import { Careers4 } from "@/components/careers4";
import { Hero3 } from "@/components/hero3";
import products from "@/lib/products";
import { toKebabCase } from "@/scripts/fetchNotionProducts";
import Home from "@/app/products/page";
import { Metadata, ResolvingMetadata } from "next";
import properties from "@/data/properties.json"
import { generateProductDescription, generateProductKeywords, getApplication } from "@/lib/seo";

export type ProductPageProps = {
  params: Promise<{ slug: string }>
}
export default async function Page({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find(
    (p) => toKebabCase(p.partNumber) === slug
  ) ?? null;

  if (!product) {
    return Home();
  }

  const seoDesc = generateProductDescription(product);
  const application = getApplication(product.type, product.OEMs, product.compatibleWith);

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.partNumber,
    "description": seoDesc,
    "sku": product.partNumber,
    "mpn": product.partNumber,
    "brand": {
      "@type": "Brand",
      "name": product.OEMs.join(", ") || "Kenrax",
    },
    "image": `https://kenrax.in/${product.images[0] || properties["media.homepage.photo.1"].media[0]}`,
    "url": `https://kenrax.in/product/${slug}`,
    "category": product.type || "Industrial Filter",
    "application": application,
    "material": product.compatibleWith?.join(", ") || undefined,
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://kenrax.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://kenrax.in/products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.partNumber,
        "item": `https://kenrax.in/product/${slug}`
      }
    ]
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Hero3 product={product} />

      <Careers4 product={product} />

      <section className="py-8">
        <div className="mx-auto grid max-w-4xl gap-4 px-2">
          <details className="group rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold tracking-tight">
              Key Benefits
            </summary>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Direct OEM-grade replacement for {product.OEMs.join(", ")}.</li>
              <li>
                Filtration media and construction matched to the application:{" "}
                {application}.
              </li>
              <li>Engineered fit — drop-in installation without modification.</li>
            </ul>
          </details>
          <details className="group rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold tracking-tight">
              Compatible Compressor Brands
            </summary>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {product.compatibleWith.slice(0, 20).map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </details>
        </div>
      </section>
    </div >
  );
}

export function generateStaticParams() {
  return products.flatMap((p) => ({
    productType: toKebabCase(p.type),
    slug: toKebabCase(p.partNumber),
  }));
}

export async function generateMetadata(
  { params }: ProductPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find(
    (p) => toKebabCase(p.partNumber) === slug
  ) ?? null;

  if (!product) return {};

  const brand = product.OEMs.join(", ") || "Kenrax";
  const type = product.type || "Replacement Part";
  const partNumber = product.partNumber;

  const title =
    brand !== "Kenrax"
      ? `${partNumber} - ${type} for ${brand} | Kenrax`
      : `${partNumber} - ${type} | Kenrax`;

  const description = generateProductDescription(product);
  const application = getApplication(product.type, product.OEMs, product.compatibleWith);
  const keywords = generateProductKeywords(product);

  const imageUrl = `https://kenrax.in/${product.images[0] || properties["media.homepage.photo.1"].media[0]}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://kenrax.in/product/${slug}`,
      siteName: "Kenrax",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 640,
          height: 800,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 640,
          height: 800,
          alt: title,
        },
      ],
    },
    alternates: {
      canonical: `https://kenrax.in/product/${slug}`,
    },
  };
}
