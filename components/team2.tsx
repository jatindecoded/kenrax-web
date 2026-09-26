"use client"
import { Toggle } from "./ui/toggle";
import { Product } from "@/scripts/fetchNotionProducts";
import { useEffect, useState } from 'react';
import ProductCard from "./productCard";
import { useSearchParams } from "next/navigation";
import { SearchCustom } from "./searchCustom";
import { productsPageHref } from "./constants";
import { trackEvent } from "@/lib/analytics";


interface ProductPageInterface {
  products: Product[] | undefined;
}

const Team2 = ({ products }: ProductPageInterface) => {
  if (!products) {
    return null
  }
  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState(products);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [activeOems, setActiveOems] = useState<string[]>([]);

  const handleToggle = (filter: string) => {
    setActiveFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const handleOemToggle = (oem: string) => {
    setActiveOems(prev =>
      prev.includes(oem)
        ? prev.filter(o => o !== oem)
        : [...prev, oem]
    );
  };

  useEffect(() => {
    trackEvent("view_item_list", {
      item_list_name: "product_category",
      items: products.slice(0, 20).map((p) => ({ item_id: p.partNumber, item_name: p.partNumber, item_brand: p.OEMs?.[0], item_category: p.type })),
    });
  }, [products]);

  useEffect(() => {
    setResults(products.filter(product => {
      const typeMatch = activeFilters.length === 0 ? true : activeFilters.includes(product.type.toLowerCase())
      const oemMatch = activeOems.length === 0 ? true : (product.OEMs ?? []).some(o => activeOems.includes(o.toLowerCase()))
      const queryMatch = name ? product.partNumber.toLowerCase().includes(name.toLowerCase()) : true

      return typeMatch && oemMatch && queryMatch;
    }
    ))

  }, [activeFilters, activeOems])

  const allTypes = new Set(products.map(p => p.type));
  const allOems = new Set(products.flatMap(p => p.OEMs ?? []));

  // const [results, setResults] = useState(products);

  const descMaxLength = 80;
  return (
    <section className="py-4 items-center">
      <SearchCustom
      />
      <div className="items-center flex flex-col items-start text-left">
        <h2 className="text-4xl font-bold tracking-tight text-pretty lg:text-4xl">
          Our Products
        </h2>
        <p className="mb-6 semibold text-md text-muted-foreground">We manufacture all of these.</p>
        <p className="semibold text-muted-foreground text-xs mb-1">Filter by Product Type:</p>
        <div className="flex gap-2 flex-wrap items-center mb-4">
          {
            Array.from(allTypes)?.map((p, idx) => {
              return (
                <Toggle
                  key={idx}
                  variant={'outline'}
                  className="font-bold uppercase text-xs data-[state=on]:bg-primary data-[state=on]:text-background cursor-pointer"
                  aria-label="Toggle italic"
                  pressed={activeFilters.includes(p.toLowerCase())}
                  onPressedChange={() => handleToggle(p.toLowerCase())}
                >
                  {/* <Circle fontSize={8} /> */}
                  {p.toUpperCase()}
                </Toggle>

              )
            })
          }


        </div>

        <p className="semibold text-muted-foreground text-xs mb-1">Filter by Compatible OEM:</p>
        <div className="flex gap-2 flex-wrap items-center mb-4">
          {
            Array.from(allOems)?.map((oem, idx) => {
              return (
                <Toggle
                  key={idx}
                  variant={'outline'}
                  className="font-bold uppercase text-xs data-[state=on]:bg-primary data-[state=on]:text-background cursor-pointer"
                  aria-label="Toggle OEM"
                  pressed={activeOems.includes(oem.toLowerCase())}
                  onPressedChange={() => handleOemToggle(oem.toLowerCase())}
                >
                  {oem.toUpperCase()}
                </Toggle>

              )
            })
          }


        </div>
        {name && (
          <div className="w-full flex justify-center flex-col">
            <h2 className="text-center font-semibold text-xl tracking-tight text-muted-foreground">
              Search results for "{name}"
            </h2>
            <a
              className="text-center underline text-primary font-semibold"
              href={productsPageHref}
            >
              See all products
            </a>
          </div>
        )}
        {/* <div className="w-full relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-3 w-3" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for a product. (Eg. B006700770010)"
            className="pl-8 text-xs!" />

        </div> */}

      </div>
      <div className="items-center mt-16 grid gap-x-12 gap-y-16 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {results?.map((product: Product, idx) => {
          return (
            <ProductCard
              key={idx}
              product={product} descMaxLength={descMaxLength} />
          )
        }
        )}
      </div >
    </section >
  );
};

export { Team2 };

