import { Team2 } from "@/components/team2";
import { TrustBadges } from "@/components/trustBadges";
import products from "@/lib/products";
import blogs from "@/data/blogs/blogs.json";
import { Blog8 } from "@/components/blog8";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Suspense } from "react";

const separators = products.filter((p) => p.type === "Air Oil Separator");

const faqs = [
  {
    question: "What does an air-oil separator do?",
    answer:
      "In a screw compressor, oil is injected into the compression chamber for cooling and sealing. The air-oil separator removes this oil from the compressed air stream before discharge, ensuring clean, dry air output while returning oil to the system. A failing separator increases oil consumption and contaminates downstream equipment.",
  },
  {
    question: "How do I know when to replace my air-oil separator?",
    answer:
      "Common signs include: rising oil consumption, visible oil in the compressed air line, increased pressure drop across the separator, and oil carryover (oil mist at the discharge). Most separators are rated for 4000–8000 hours, but this varies by operating conditions.",
  },
  {
    question: "Are Kenrax separators compatible with Atlas Copco and Ingersoll Rand?",
    answer:
      "Yes. Kenrax manufactures air-oil separators that are direct replacements for OEM parts in Atlas Copco, Ingersoll Rand, Elgi, Kaeser, Chicago Pneumatic, and other major brands. Each separator is built to match OEM dimensions, media type, and separation efficiency.",
  },
  {
    question: "What is oil carryover and why does it matter?",
    answer:
      "Oil carryover is the amount of oil that passes through the separator and exits with the compressed air. High carryover means oil is being lost from the system, increasing operating costs and potentially contaminating tools, processes, or products downstream.",
  },
  {
    question: "Can I clean an air-oil separator instead of replacing it?",
    answer:
      "No. Air-oil separators use coalescing media that cannot be effectively cleaned or regenerated. Once the media is saturated or damaged, the separator must be replaced to maintain separation efficiency.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.question,
    "acceptedAnswer:": {
      "@type": "Answer",
      "text": f.answer,
    },
  })),
};

const categorySchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Air-Oil Separators for Screw Compressors",
  "description":
    "Kenrax manufactures replacement air-oil separators for Atlas Copco, Ingersoll Rand, Elgi, Kaeser, and other screw air compressors.",
  "url": "https://kenrax.in/air-oil-separator",
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": separators.length,
    "itemListElement": separators.slice(0, 20).map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "url": `https://kenrax.in/product/${p.url.split("/").pop()}`,
    })),
  },
};

export default function AirOilSeparatorPage() {
  const relatedBlogs = blogs
    .filter(
      (b) =>
        b.title.toLowerCase().includes("separator") ||
        b.title.toLowerCase().includes("oil carryover") ||
        b.title.toLowerCase().includes("oil")
    )
    .map((b) => ({
      id: b.id,
      title: b.title,
      summary:
        (b.content || [])
          .map((block: any) =>
            (block["paragraph"]?.rich_text ?? [])
              .map((rt: any) => rt.plain_text)
              .join("")
          )
          .join("")
          .slice(0, 100),
      label: "Blog",
      author: "Kenrax Industries",
      published: b.createdAt,
      url: `/blogs/${b.slug}`,
      image: b.coverImage,
    }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categorySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="py-10">
        <div className="container flex flex-col items-center text-center">
          <Badge variant="secondary" className="mb-4">
            Product Category
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-pretty lg:text-5xl">
            Air-Oil Separators for Screw Compressors
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Kenrax manufactures replacement air-oil separators that deliver clean,
            low-oil-carryover compressed air. Direct-fit replacements for all major
            OEM brands.
          </p>
        </div>
      </section>

      <section className="py-8 border-t">
        <div className="container flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            Browse Air-Oil Separators
          </h2>
          <div className="w-full">
            <Suspense fallback={<div className="text-center py-10">Loading products...</div>}>
              <Team2 products={separators} />
            </Suspense>
          </div>
        </div>
      </section>

      <TrustBadges />

      <section className="py-8 border-t">
        <div className="mx-auto flex flex-col items-center text-center max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            What an Air-Oil Separator Does
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-4">
            In an oil-injected screw compressor, oil is mixed with air during
            compression. The air-oil separator removes this oil from the compressed
            air stream using coalescing media, returning clean oil to the system and
            delivering dry, low-oil air to downstream applications.
          </p>
          <p className="text-muted-foreground max-w-3xl">
            A failing separator increases oil consumption, raises operating costs, and
            can contaminate pneumatic tools, instrumentation, and finished products.
            Kenrax separators are built to match OEM separation efficiency and
            pressure drop specifications.
          </p>
        </div>
      </section>

      <section className="py-8 border-t">
        <div className="mx-auto flex flex-col items-center text-center max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            When to Replace Your Air-Oil Separator
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-4">
            Separator elements typically run 4000–8000 operating hours depending on
            duty cycle, air quality, and oil condition. Because a separator cannot be
            cleaned and regenerated, the correct move is scheduled replacement — keep
            a spare on hand so a rising differential pressure or visible oil carryover
            never forces an unplanned shutdown.
          </p>
          <p className="text-muted-foreground max-w-3xl">
            The cost of a separator is a fraction of what oil carryover costs in lost
            lubricant, contaminated downstream equipment, and rejected product.
            Replace it on the OEM schedule and check the differential pressure
            regularly to catch early degradation.
          </p>
        </div>
      </section>

      <section className="py-8 border-t">
        <div className="mx-auto flex flex-col items-center text-center max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            Signs Your Separator Needs Replacing
          </h2>
          <ul className="text-muted-foreground max-w-3xl space-y-3 text-left">
            <li>
              <b>Oil carryover at the discharge</b> — oil mist in the air line or
              downstream of the aftercooler means the separator media is saturated.
            </li>
            <li>
              <b>Rising oil consumption</b> — frequent top-ups with no external oil
              leak point to oil being pushed out with the compressed air.
            </li>
            <li>
              <b>Higher pressure drop</b> — a loaded separator restricts airflow,
              forcing the compressor to work harder and consume more energy.
            </li>
            <li>
              <b>Oil in condensate drains</b> — visible oil in the condensate from
              receiver or aftercooler drains confirms separator media failure.
            </li>
          </ul>
        </div>
      </section>

      {relatedBlogs.length > 0 && (
        <section className="py-8 border-t">
          <Blog8
            heading="Related Articles"
            description="Guides and insights on air-oil separation, oil carryover, and compressor maintenance from the Kenrax blog."
            posts={relatedBlogs}
          />
        </section>
      )}

      <section className="py-8 border-t">
        <div className="container flex flex-col items-center">
          <h2 className="text-2xl font-bold tracking-tight mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}

export const metadata: Metadata = {
  title: "Air-Oil Separators for Screw Compressors | Kenrax",
  description:
    "Browse Kenrax's range of replacement air-oil separators for Atlas Copco, Ingersoll Rand, Elgi, Kaeser, and other screw air compressors. OEM-quality fitment at competitive prices.",
  keywords: [
    "air oil separator",
    "compressor air oil separator",
    "Atlas Copco air oil separator",
    "Ingersoll Rand oil separator",
    "Elgi air oil separator",
    "Kaeser oil separator",
    "screw compressor separator",
    "air oil separator manufacturer India",
    "Kenrax air oil separator",
    "oil separator replacement",
  ],
  openGraph: {
    title: "Air-Oil Separators for Screw Compressors | Kenrax",
    description:
      "Replacement air-oil separators for Atlas Copco, Ingersoll Rand, Elgi, Kaeser screw compressors. OEM-quality from Kenrax Industries.",
    url: "https://kenrax.in/air-oil-separator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Air-Oil Separators for Screw Compressors | Kenrax",
    description:
      "Replacement air-oil separators for all major screw compressor brands. OEM-quality from Kenrax Industries.",
  },
  alternates: {
    canonical: "https://kenrax.in/air-oil-separator",
  },
};