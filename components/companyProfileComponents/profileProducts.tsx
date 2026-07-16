import Image from "next-export-optimize-images/image";
import { Badge } from "@/components/ui/badge";

interface ProductCategory {
  name: string;
  description: string;
  image: string;
}

const productCategories: ProductCategory[] = [
  {
    name: "PU Air Filters",
    description:
      "Polyurethane-bodied air intake filters designed for durability and consistent airflow. Manufactured with precision PU encapsulation for a reliable seal and long service life.",
    image: "/media/319e28ff-134f-4a6d-8194-77bd868349ec-00-6-4143-0-air-filter.png",
  },
  {
    name: "Metal Air Filters",
    description:
      "Metal-cased air intake filters engineered for heavy-duty industrial applications. Rigid housing provides structural integrity under high-vibration and high-temperature conditions.",
    image: "/media/b743bc21-95da-44be-bcbc-f0e4a77a6408-1613800400.png",
  },
  {
    name: "Pleated Separators",
    description:
      "Coalescing separator elements with precision-pleated media for efficient oil removal. The pleated design maximises surface area, delivering low pressure drop and high separation efficiency.",
    image: "/media/05c8ce5d-a62a-45d9-80b0-ce865272471b-6211373100.png",
  },
  {
    name: "Wrapper Separators",
    description:
      "Wrapper-type oil separator elements manufactured for reliable performance and consistent oil carryover control. Economical construction without compromising filtration quality.",
    image: "/media/f10c28c9-5687-4332-be42-55177d6e7169-b006700770010-unprinted.png",
  },
  {
    name: "Oil Filters",
    description:
      "Cartridge-based oil filtration elements that remove contaminants and protect compressor components from premature wear. High-grade filter media ensures efficient particle capture.",
    image: "/media/aa75c9eb-dcba-4858-9e1d-7576254071eb-x017503.png",
  },
  {
    name: "Spin-On Oil Filters",
    description:
      "Convenient spin-on oil filter canisters for quick and easy replacement during routine maintenance. Built-in anti-drain valve and gasket for leak-free installation.",
    image: "/media/ae681678-0793-49c7-830a-3e3016b31768-b407701-2.png",
  },
  {
    name: "Element-Based Oil Filters",
    description:
      "Replaceable oil filter elements designed for high-efficiency contaminant removal in compressor lubrication systems. Housing reuse reduces long-term maintenance costs.",
    image: "/media/fc1159be-c839-45b9-a309-edbd7437c94d-010440229.png",
  },
  {
    name: "Spin-On Separators",
    description:
      "Spin-on air-oil separator canisters that simplify maintenance while delivering consistent separation performance. Self-contained unit for fast turnaround during service.",
    image: "/media/8fab97bc-2efb-4af8-a1f1-cb0f4d55d54d-kx-aos15.png",
  },
  {
    name: "Coolant Filters",
    description:
      "Filtration solutions for compressor coolant systems, ensuring clean circulation and optimal thermal management. Removes particulates and sludge to protect heat exchangers.",
    image: "/media/c9e19fc1-645a-42e2-a21e-529b4b1c1b31-6-4163-0.png",
  },
  {
    name: "Hydraulic Filters",
    description:
      "Hydraulic fluid filtration products engineered to protect pumps, valves, and actuators from contamination. High collapse resistance and fine filtration ratings for critical circuits.",
    image: "/media/9b707e63-4452-4e9b-b441-812b71f8323a-6-4139-0.png",
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
        {productCategories.map((cat) => (
          <div key={cat.name} className="flex flex-col gap-3">
            <div className="overflow-hidden bg-muted rounded-md h-40">
              <Image
                width={160}
                height={120}
                src={cat.image}
                alt={cat.name}
                className="object-contain h-full w-full scale-[1.25] object-center"
              />
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
