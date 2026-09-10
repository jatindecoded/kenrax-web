import { Team2 } from "@/components/team2";
import { TrustBadges } from "@/components/trustBadges";
import products from "@/lib/products";
import blogs from "@/data/blogs/blogs.json";
import { Blog8 } from "@/components/blog8";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Suspense } from "react";

const oilFilters = products.filter((p) => p.type === "Oil Filter");

const faqs = [
  {
    question: "Why is the oil filter important in a screw compressor?",
    answer:
      "The oil filter removes contaminants, sludge, and metal particles from compressor lubricating oil. Clean oil reduces friction, prevents bearing wear, and maintains proper cooling. A failing oil filter leads to accelerated wear on rotors and bearings.",
  },
  {
    question: "How often should I replace the oil filter on my compressor?",
    answer:
      "Oil filters are typically replaced at every oil change interval. For most screw compressors, this is every 2000–4000 operating hours. Check your compressor's maintenance manual for the exact interval.",
  },
  {
    question: "Can I use a Kenrax oil filter as a direct replacement for OEM filters?",
    answer:
      "Yes. Kenrax oil filters are engineered as direct-fit replacements for OEM filters used in Atlas Copco, Ingersoll Rand, Elgi, Kaeser, and other brands. They match OEM dimensions, thread specifications, and filtration ratings.",
  },
  {
    question: "What happens if I use the wrong oil filter?",
    answer:
      "Using an incompatible oil filter can cause oil bypass (unfiltered oil circulating), reduced lubrication, increased operating temperature, and premature compressor failure. Always match the part number to your compressor model.",
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
  "name": "Oil Filters for Screw Compressors",
  "description":
    "Kenrax manufactures replacement oil filters for Atlas Copco, Ingersoll Rand, Elgi, Kaeser, and other screw air compressors.",
  "url": "https://kenrax.in/oil-filter",
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": oilFilters.length,
    "itemListElement": oilFilters.slice(0, 20).map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "url": `https://kenrax.in/product/${p.url.split("/").pop()}`,
    })),
  },
};

export default function OilFilterPage() {
  const relatedBlogs = blogs
    .filter(
      (b) =>
        b.title.toLowerCase().includes("oil") ||
        b.title.toLowerCase().includes("filter") ||
        b.title.toLowerCase().includes("maintenance")
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
            Oil Filters for Screw Compressors
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Kenrax manufactures replacement oil filters that keep your compressor
            lubrication system clean. Direct-fit replacements for all major OEM
            brands.
          </p>
        </div>
      </section>

      <section className="py-8 border-t">
        <div className="container flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            Browse Oil Filters
          </h2>
          <div className="w-full">
            <Suspense fallback={<div className="text-center py-10">Loading products...</div>}>
              <Team2 products={oilFilters} />
            </Suspense>
          </div>
        </div>
      </section>

      <TrustBadges />

      <section className="py-8 border-t">
        <div className="mx-auto flex flex-col items-center text-center max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            What an Oil Filter Does
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-4">
            In a screw compressor, the oil filter continuously removes contaminants
            from the lubricating oil — carbon deposits, metal shavings, sludge, and
            particulate matter. Without proper filtration, these contaminants circulate
            through bearings, rotors, and seals, causing accelerated wear and
            increasing the risk of unplanned downtime.
          </p>
          <p className="text-muted-foreground max-w-3xl">
            Kenrax oil filters use filtration media matched to the flow rate and
            pressure of each compressor model, ensuring clean oil delivery to critical
            components throughout the service interval.
          </p>
        </div>
      </section>

      <section className="py-8 border-t">
        <div className="mx-auto flex flex-col items-center text-center max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            When to Replace Your Compressor Oil Filter
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-4">
            The oil filter is a sacrificial component — it collects what your
            compressor would otherwise circulate through its bearings, rotors, and
            seals. For most oil-injected screw compressors the filter is changed
            alongside the oil every 2000–4000 operating hours, but heavy-duty service
            or a dusty environment can shorten that interval. Always follow the OEM
            schedule in your compressor manual, and change the filter whenever you
            change the oil — never reuse a filter with fresh oil.
          </p>
          <p className="text-muted-foreground max-w-3xl">
            If oil analysis or periodic inspection shows heavy contamination, shorten
            the interval. Replacing a filter on schedule is a small, predictable cost;
            the bearing and rotor damage from unfiltered oil is not.
          </p>
        </div>
      </section>

      <section className="py-8 border-t">
        <div className="mx-auto flex flex-col items-center text-center max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            Signs Your Oil Filter Needs Replacing
          </h2>
          <ul className="text-muted-foreground max-w-3xl space-y-3 text-left">
            <li>
              <b>Elevated discharge temperature</b> — a clogged oil filter restricts
              oil flow, reducing cooling capacity and running the compressor hot.
            </li>
            <li>
              <b>Higher filter pressure drop</b> — the differential pressure gauge
              or indicator shows the element loading up with contaminants.
            </li>
            <li>
              <b>Metal particles or sludge in the oil</b> — evidence that abrasive
              wear is occurring; filter and oil should both be changed.
            </li>
            <li>
              <b>More frequent oil top-ups</b> — increased oil consumption often
              points to lubrication systems under strain, including a loaded filter.
            </li>
          </ul>
        </div>
      </section>

      {relatedBlogs.length > 0 && (
        <section className="py-8 border-t">
          <Blog8
            heading="Related Articles"
            description="Guides and insights on compressor oil systems, filtration, and maintenance from the Kenrax blog."
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
  title: "Oil Filters for Screw Compressors | Kenrax",
  description:
    "Browse Kenrax's range of replacement oil filters for Atlas Copco, Ingersoll Rand, Elgi, Kaeser, and other screw air compressors. OEM-quality fitment at competitive prices.",
  keywords: [
    "oil filter for compressor",
    "compressor oil filter replacement",
    "Atlas Copco oil filter",
    "Ingersoll Rand oil filter",
    "Elgi oil filter",
    "Kaeser oil filter",
    "screw compressor oil filter",
    "oil filter manufacturer India",
    "Kenrax oil filter",
  ],
  openGraph: {
    title: "Oil Filters for Screw Compressors | Kenrax",
    description:
      "Replacement oil filters for Atlas Copco, Ingersoll Rand, Elgi, Kaeser screw compressors. OEM-quality from Kenrax Industries.",
    url: "https://kenrax.in/oil-filter",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oil Filters for Screw Compressors | Kenrax",
    description:
      "Replacement oil filters for all major screw compressor brands. OEM-quality from Kenrax Industries.",
  },
  alternates: {
    canonical: "https://kenrax.in/oil-filter",
  },
};