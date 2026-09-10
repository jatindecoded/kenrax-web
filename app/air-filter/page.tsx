import { Team2 } from "@/components/team2";
import products from "@/lib/products";
import blogs from "@/data/blogs/blogs.json";
import { Blog8 } from "@/components/blog8";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Suspense } from "react";

const airFilters = products.filter((p) => p.type === "Air Filter");

const faqs = [
  {
    question: "What does an air filter do in a screw compressor?",
    answer:
      "The air filter removes dust, dirt, and particulate matter from intake air before it enters the compressor rotors. A clean air filter ensures efficient compression, protects internal components from abrasion, and maintains consistent air quality output.",
  },
  {
    question: "How often should I replace my compressor air filter?",
    answer:
      "Replacement intervals depend on operating environment. In dusty or industrial settings, inspect every 500–1000 hours and replace as needed. In clean environments, 2000–4000 hours may be acceptable. Always follow the OEM maintenance schedule for your compressor model.",
  },
  {
    question: "Are Kenrax air filters compatible with Atlas Copco and Ingersoll Rand compressors?",
    answer:
      "Yes. Kenrax manufactures air filters that are direct replacements for OEM parts used in Atlas Copco, Ingersoll Rand, Elgi, Kaeser, Chicago Pneumatic, Kirloskar, and other major screw compressor brands.",
  },
  {
    question: "What is the difference between an OEM air filter and a Kenrax replacement?",
    answer:
      "Kenrax air filters are engineered to meet or exceed OEM specifications for filtration efficiency, airflow, and fitment. They use equivalent filter media and construction quality at a more competitive price point.",
  },
  {
    question: "How do I find the right air filter for my compressor?",
    answer:
      "Search by your OEM part number on our products page, or browse the air filter category above. If you're unsure, contact us with your compressor make, model, and current part number — we'll match it.",
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
  "name": "Air Filters for Screw Compressors",
  "description":
    "Kenrax manufactures replacement air filters for Atlas Copco, Ingersoll Rand, Elgi, Kaeser, and other screw air compressors. Browse our full range.",
  "url": "https://kenrax.in/air-filter",
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": airFilters.length,
    "itemListElement": airFilters.slice(0, 20).map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "url": `https://kenrax.in/product/${p.url.split("/").pop()}`,
    })),
  },
};

export default function AirFilterPage() {
  const relatedBlogs = blogs
    .filter(
      (b) =>
        b.title.toLowerCase().includes("filter") ||
        b.title.toLowerCase().includes("air")
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
            Air Filters for Screw Compressors
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Kenrax manufactures replacement air filters that protect your compressor
            rotors, bearings, and valves from dust and particulate damage. Direct-fit
            replacements for all major OEM brands.
          </p>
        </div>
      </section>

      <section className="py-8 border-t">
        <div className="container flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            Browse Air Filters ({airFilters.length})
          </h2>
          <div className="w-full">
            <Suspense fallback={<div className="text-center py-10">Loading products...</div>}>
              <Team2 products={airFilters} />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="py-8 border-t">
        <div className="mx-auto flex flex-col items-center text-center max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            What an Air Filter Does
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-4">
            The air filter is the first line of defence in a screw compressor. It
            captures airborne contaminants before they enter the compression chamber,
            preventing premature wear on rotors, bearings, and oil seals. A clogged or
            undersized air filter reduces airflow, increases energy consumption, and
            risks contaminating the oil system.
          </p>
          <p className="text-muted-foreground max-w-3xl">
            Kenrax air filters use high-grade filter media calibrated for the airflow
            and pressure requirements of each compressor model, ensuring consistent
            filtration efficiency throughout the service interval.
          </p>
        </div>
      </section>

      <section className="py-8 border-t">
        <div className="mx-auto flex flex-col items-center text-center max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            When to Replace Your Compressor Air Filter
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-4">
            The correct replacement interval depends on where your compressor runs.
            In dusty manufacturing floors and construction sites, air filters load up
            faster and may need attention every 500–1000 operating hours. In clean,
            climate-controlled facilities, a filter can often last 2000–4000 hours.
            Always follow your compressor manual, but start inspecting earlier if the
            environment is dusty — it is far cheaper to replace a filter on schedule
            than to repair a compressor that has ingested abrasive dust.
          </p>
          <p className="text-muted-foreground max-w-3xl">
            A dark, visibly dirty, or mechanically damaged filter element should be
            replaced immediately regardless of hours. When in doubt, compare the new
            element against a freshly opened one — if you can see a clear difference,
            change it.
          </p>
        </div>
      </section>

      <section className="py-8 border-t">
        <div className="mx-auto flex flex-col items-center text-center max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            Signs Your Air Filter Needs Replacing
          </h2>
          <ul className="text-muted-foreground max-w-3xl space-y-3 text-left">
            <li>
              <b>Higher discharge temperature</b> — a clogged intake filter starves
              the compressor of air, causing it to work harder and run hotter.
            </li>
            <li>
              <b>Reduced output pressure or flow</b> — downstream equipment runs
              weak or slow because the compressor cannot pull in enough air.
            </li>
            <li>
              <b>Increased energy consumption</b> — the compressor draws more power
              to compensate for restricted intake airflow.
            </li>
            <li>
              <b>Visible contamination</b> — a filter element that looks dark,
              oily, or clogged with debris has reached the end of its service life.
            </li>
          </ul>
        </div>
      </section>

      {relatedBlogs.length > 0 && (
        <section className="py-8 border-t">
          <Blog8
            heading="Related Articles"
            description="Guides and insights on air compressor filtration and maintenance from the Kenrax blog."
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
  title: "Air Filters for Screw Compressors | Kenrax",
  description:
    "Browse Kenrax's range of replacement air filters for Atlas Copco, Ingersoll Rand, Elgi, Kaeser, and other screw air compressors. OEM-quality fitment at competitive prices.",
  keywords: [
    "air filter for compressor",
    "compressor air filter replacement",
    "Atlas Copco air filter",
    "Ingersoll Rand air filter",
    "Elgi air filter",
    "Kaeser air filter",
    "screw compressor air filter",
    "air filter manufacturer India",
    "Kenrax air filter",
  ],
  openGraph: {
    title: "Air Filters for Screw Compressors | Kenrax",
    description:
      "Replacement air filters for Atlas Copco, Ingersoll Rand, Elgi, Kaeser screw compressors. OEM-quality from Kenrax Industries.",
    url: "https://kenrax.in/air-filter",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Air Filters for Screw Compressors | Kenrax",
    description:
      "Replacement air filters for all major screw compressor brands. OEM-quality from Kenrax Industries.",
  },
  alternates: {
    canonical: "https://kenrax.in/air-filter",
  },
};