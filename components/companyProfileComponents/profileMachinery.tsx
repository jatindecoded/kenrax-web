import { Badge } from "@/components/ui/badge";
import {
  Cog,
  Layers,
  Droplets,
  Wind,
  Printer,
  Warehouse,
  FlaskConical,
  Wrench,
  Scissors,
  Box,
} from "lucide-react";

const machines = [
  {
    icon: Cog,
    title: "Pleating Machines",
    description:
      "High-precision pleating lines for cellulose, synthetic, and glass fibre media. Adjustable pleat height, depth, and spacing for diverse specifications.",
  },
  {
    icon: Layers,
    title: "Sealing & End-Cap Machines",
    description:
      "Automated end-cap bonding and seam sealing for leak-proof, consistent seals. Supports metal and plastic end-cap configurations.",
  },
  {
    icon: Droplets,
    title: "PU Filling & Potting Machines",
    description:
      "Polyurethane filling and potting systems with precise metering for uniform density, proper cure, and reliable circumferential sealing.",
  },
  {
    icon: Wind,
    title: "Thread & Media Winding",
    description:
      "Precision thread winding and media wrapping for separator elements. Controlled tension and wrap angle for structural integrity.",
  },
  {
    icon: Printer,
    title: "Printing & Labelling",
    description:
      "In-house printing for branding, part numbers, barcodes, and multilingual labels. Complete white-label and private-label fulfilment.",
  },
  {
    icon: Scissors,
    title: "Die-Cutting & Shaping",
    description:
      "Precision die-cutting for filter media, gaskets, and sealing components. Tight tolerances and clean edges for consistent fit.",
  },
  {
    icon: FlaskConical,
    title: "Global-Grade Adhesives",
    description:
      "High-performance adhesives and sealants imported from international manufacturers for thermal stability and long-term bond integrity.",
  },
  {
    icon: Warehouse,
    title: "Warehouse & Storage",
    description:
      "Expansive facility with climate-controlled sections for sensitive media. Buffer stock maintained for rapid order fulfilment.",
  },
  {
    icon: Box,
    title: "Packaging & Dispatch",
    description:
      "Custom branded packaging, protective wrapping, and palletisation. Packed to withstand domestic and international transit conditions.",
  },
  {
    icon: Wrench,
    title: "Tooling & Maintenance Workshop",
    description:
      "On-site workshop for die maintenance, mould servicing, and equipment calibration to minimise production downtime.",
  },
];

const ProfileMachinery = () => {
  return (
    <section className="pt-16 md:pt-24 print-break-before">
      <Badge className="mb-4">Facility</Badge>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
        In-House Manufacturing Facility
      </h2>
      <p className="text-muted-foreground mb-10 max-w-screen-md">
        Our expansive manufacturing facility in New Delhi houses everything
        needed for end-to-end filter production — from raw material processing
        and media preparation through to assembly, testing, packaging, and
        dispatch. Every stage of the manufacturing process is controlled
        in-house, giving us full command over quality, consistency, and lead
        times.
      </p>
      <div className="grid gap-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
        {machines.map((m) => (
          <div key={m.title} className="flex flex-col gap-3">
            <m.icon className="size-5 text-primary" />
            <h3 className="text-lg font-bold tracking-tight">{m.title}</h3>
            <p className="text-sm text-muted-foreground">{m.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export { ProfileMachinery };
