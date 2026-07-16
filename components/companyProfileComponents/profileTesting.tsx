import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  Gauge,
  ArrowUpDown,
  Zap,
  Ruler,
  Microscope,
  CheckCircle,
  FlaskConical,
} from "lucide-react";

const testingCapabilities = [
  {
    icon: Gauge,
    title: "Real-Time Pressure Testing",
    description:
      "Every separator and filter undergoes pressure testing under simulated operating conditions to verify structural integrity and performance before dispatch.",
  },
  {
    icon: Zap,
    title: "Filtration Efficiency Testing",
    description:
      "Particle capture rates and airflow characteristics are measured against industry benchmarks to ensure consistent filtration performance across batches.",
  },
  {
    icon: ArrowUpDown,
    title: "Differential Pressure Validation",
    description:
      "Pressure drop across filter media is validated against specifications, ensuring optimal airflow with minimal resistance in compressor operation.",
  },
  {
    icon: ShieldCheck,
    title: "Burst Pressure & Structural Testing",
    description:
      "Products are tested to their structural limits to determine burst pressure margins and verify reliability under real-world pressure spikes.",
  },
  {
    icon: Ruler,
    title: "Dimensional Accuracy Verification",
    description:
      "Precision measurement of all critical dimensions — ID, OD, height, seal geometry, and fitment interfaces — ensures direct drop-in fit for the intended compressor model.",
  },
  {
    icon: Microscope,
    title: "Raw Material Inspection",
    description:
      "Incoming materials — filtration media, adhesives, metal components, and PU compounds — are inspected for quality and consistency before entering production.",
  },
  {
    icon: CheckCircle,
    title: "End-of-Line Functional Testing",
    description:
      "Finished products undergo a final functional check covering fitment, seal integrity, and visual inspection before dispatch.",
  },
  {
    icon: FlaskConical,
    title: "Batch-Wise Quality Sampling",
    description:
      "Statistical sampling across every production batch with sample retention for full traceability and quality assurance records.",
  },
];

const ProfileTesting = () => {
  return (
    <section className="py-16 md:py-24 print-break-before">
      <Badge className="mb-4">Quality</Badge>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
        Quality Assurance & Testing
      </h2>
      <p className="text-muted-foreground mb-10 max-w-screen-md">
        Every product undergoes rigorous testing in our in-house quality
        laboratory. Our multi-stage inspection process — from incoming raw
        materials through in-process checks to final product validation —
        ensures consistent performance, dimensional accuracy, and reliability
        across all production batches.
      </p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testingCapabilities.map((t) => (
          <div key={t.title} className="flex flex-col gap-3">
            <t.icon className="size-5 text-primary" />
            <h3 className="text-lg font-bold tracking-tight">{t.title}</h3>
            <p className="text-sm text-muted-foreground">{t.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export { ProfileTesting };
