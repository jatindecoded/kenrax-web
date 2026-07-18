import Image from "next-export-optimize-images/image";
import { Badge } from "@/components/ui/badge";

interface ProductCategory {
  name: string;
  description: string;
  images: string[];
}

const productCategories: ProductCategory[] = [
  {
    name: "PU Air Filters",
    description:
      "Polyurethane-bodied air intake filters designed for durability and consistent airflow. Manufactured with precision PU encapsulation for a reliable seal and long service life.",
    images: [
      "/media/319e28ff-134f-4a6d-8194-77bd868349ec-00-6-4143-0-air-filter.png",
      "/media/b743bc21-95da-44be-bcbc-f0e4a77a6408-1613800400.png",
    ],
  },
  {
    name: "Metal Air Filters",
    description:
      "Metal-cased air intake filters engineered for heavy-duty industrial applications. Rigid housing provides structural integrity under high-vibration and high-temperature conditions.",
    images: ["/media/9b707e63-4452-4e9b-b441-812b71f8323a-6-4139-0.png"],
  },
  {
    name: "Pleated Separators",
    description:
      "Coalescing separator elements with precision-pleated media for efficient oil removal. The pleated design maximises surface area, delivering low pressure drop and high separation efficiency.",
    images: ["/media/4974ad4e-5e27-4e76-b455-e4448d1c4656-39863857.png"],
  },
  {
    name: "Wrapper Separators",
    description:
      "Wrapper-type oil separator elements manufactured for reliable performance and consistent oil carryover control. Economical construction without compromising filtration quality.",
    images: ["/media/8fab97bc-2efb-4af8-a1f1-cb0f4d55d54d-kx-aos15.png"],
  },
  {
    name: "Oil Filters",
    description:
      "Cartridge-based oil filtration elements that remove contaminants and protect compressor components from premature wear. High-grade filter media ensures efficient particle capture.",
    images: ["/media/aa75c9eb-dcba-4858-9e1d-7576254071eb-x017503.png"],
  },
  {
    name: "Spin-On Oil Filters",
    description:
      "Convenient spin-on oil filter canisters for quick and easy replacement during routine maintenance. Built-in anti-drain valve and gasket for leak-free installation.",
    images: ["/media/ae681678-0793-49c7-830a-3e3016b31768-b407701-2.png"],
  },
  {
    name: "Element-Based Oil Filters",
    description:
      "Replaceable oil filter elements designed for high-efficiency contaminant removal in compressor lubrication systems. Housing reuse reduces long-term maintenance costs.",
    images: ["/media/79445364-20fa-42bc-936e-6d7387afdcf7-b004804620001.png"],
  },
  {
    name: "Spin-On Separators",
    description:
      "Spin-on air-oil separator canisters that simplify maintenance while delivering consistent separation performance. Self-contained unit for fast turnaround during service.",
    images: ["/media/d8ed3509-4b6e-433e-b6df-da4adf5859f2-6221372500.png"],
  },
  {
    name: "Coolant Filters",
    description:
      "Filtration solutions for compressor coolant systems, ensuring clean circulation and optimal thermal management. Removes particulates and sludge to protect heat exchangers.",
    images: ["/media/a8ab9011-ff55-420c-98ae-d91859ec85f1-39329602.png"],
  },
  {
    name: "Hydraulic Filters",
    description:
      "Hydraulic fluid filtration products engineered to protect pumps, valves, and actuators from contamination. High collapse resistance and fine filtration ratings for critical circuits.",
    images: ["/media/fc1159be-c839-45b9-a309-edbd7437c94d-010440229.png"],
  },
];

const ProfileProducts = () => {
  return (
    <section className="py-16 md:py-24 print-break-before">
      <Badge className="mb-4">Products</Badge>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
        Product Range
      </h2>
      <p className="text-muted-foreground mb-10 max-w-screen-md">
        Comprehensive filtration solutions for rotary screw air compressors,
        manufactured to meet or exceed OEM specifications.
      </p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {productCategories.map((cat, catIndex) => (
          <div key={cat.name} className={`flex flex-col gap-3 ${catIndex == 4 && "print-break-before"}`}>
            <div
              className={`overflow-hidden bg-muted flex rounded-md h-36 ${
                cat.images.length > 1 ? "grid-cols-2" : ""
              }`}
            >
              {cat.images.map((src, i) => (
                <Image
                  width={160}
                  height={120}
                  src={src}
                  alt={cat.name}
                  key={i}
                  className="object-cover h-full mx-auto"
                />
              ))}
            </div>
            <h3 className="text-lg font-bold tracking-tight">{cat.name}</h3>
            <p className="text-sm text-muted-foreground">{cat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export { ProfileProducts };
