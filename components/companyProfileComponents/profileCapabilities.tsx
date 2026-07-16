import { Badge } from "@/components/ui/badge";
import {
  Factory,
  Palette,
  Globe,
  BarChart3,
  IndianRupee,
  Truck,
  FileText,
  Users,
} from "lucide-react";

const capabilities = [
  {
    icon: Factory,
    title: "Custom Product Development",
    description:
      "Filters designed and manufactured to your exact specifications — from concept and prototyping to tooling, testing, and mass production.",
  },
  {
    icon: Palette,
    title: "Private Label & White-Label",
    description:
      "Full customisation of branding, packaging, labelling, and part number mapping — your brand, your part numbers.",
  },
  {
    icon: Globe,
    title: "Global Raw Material Sourcing",
    description:
      "High-grade filtration media, adhesives, and raw materials sourced from trusted international suppliers.",
  },
  {
    icon: BarChart3,
    title: "Flexible Order Volumes",
    description:
      "From prototype batches of 50 units to high-volume runs of 50,000+, we scale to match your procurement cycle.",
  },
  {
    icon: IndianRupee,
    title: "Competitive & Flexible Pricing",
    description:
      "Direct manufacturing with no middlemen. Tiered pricing based on quality preferences, material choices, and order volumes.",
  },
  {
    icon: Truck,
    title: "Supply Chain & Logistics",
    description:
      "Buffer stock for rapid fulfilment. Domestic shipping across India and international dispatch with your freight partners.",
  },
  {
    icon: FileText,
    title: "Documentation & Compliance",
    description:
      "Material certificates, test reports, dimensional drawings, and compatibility data for quality management and regulatory filings.",
  },
  {
    icon: Users,
    title: "Dedicated Account Management",
    description:
      "A single point of contact for order placement, production updates, and post-delivery support.",
  },
];

const ProfileCapabilities = () => {
  return (
    <section className="py-16 md:py-24 print-break-before">
      <Badge className="mb-4">Capabilities</Badge>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
        Our Capabilities
      </h2>
      <p className="text-muted-foreground mb-10 max-w-screen-md">
        We offer end-to-end manufacturing flexibility, enabling OEMs to
        outsource their filtration product requirements with confidence. Our
        capabilities span the full product lifecycle — from initial design
        through to delivery and ongoing support.
      </p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((cap) => (
          <div key={cap.title} className="flex flex-col gap-3">
            <cap.icon className="size-5 text-primary" />
            <h3 className="text-lg font-bold tracking-tight">{cap.title}</h3>
            <p className="text-sm text-muted-foreground">{cap.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export { ProfileCapabilities };
