import { Metadata } from "next";
import { Faq5 } from "@/components/faq5";

export default function FaqPage() {
  return <Faq5 />;
}

export const metadata: Metadata = {
  title: "FAQs - Air Compressor Filters & Replacement Parts | Kenrax",
  description:
    "Common questions about Kenrax air filters, oil filters, and air-oil separators for screw compressors: OEM compatibility, bulk ordering, shipping, samples, and custom labeling.",
  alternates: {
    canonical: "https://kenrax.in/faq",
  },
  openGraph: {
    title: "FAQs - Kenrax Industries",
    description:
      "Answers on OEM-compatible air compressor filter replacements, bulk orders, shipping, samples, and private labeling.",
    url: "https://kenrax.in/faq",
    type: "website",
  },
};