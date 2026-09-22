import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowUpRight, MapPin } from "lucide-react";
import properties from "@/data/properties.json";
import products from "@/lib/products";
import { locations, getLocation } from "@/lib/locations";
import { notFound } from "next/navigation";

const airCount = products.filter((p) => p.type === "Air Filter").length;
const oilCount = products.filter((p) => p.type === "Oil Filter").length;
const sepCount = products.filter((p) => p.type === "Air Oil Separator").length;

const categories = [
  { name: "Air Filters", count: airCount, url: "/air-filter", desc: "Intake filtration that keeps dust out of the compression chamber." },
  { name: "Oil Filters", count: oilCount, url: "/oil-filter", desc: "Protect rotors, bearings, and oil from contamination." },
  { name: "Air-Oil Separators", count: sepCount, url: "/air-oil-separator", desc: "Control oil carryover and keep downstream air clean." },
];

const oemBrands = [
  "Atlas Copco",
  "Ingersoll Rand",
  "Elgi",
  "Kaeser",
  "Chicago Pneumatic",
  "Kirloskar",
  "Gardner Denver",
  "Sullair",
];

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const location = getLocation(city);
  if (!location) notFound();

  const whatsappPriceUrl = `https://wa.me/91${properties["contact.phone.whatsapp"].value}?text=${encodeURIComponent(
    `Hi Kenrax, I'm in ${location.name}, ${location.state}. Please share your current price list.`
  )}`;

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://kenrax.in/locations#${location.slug}`,
    name: "Kenrax Industries",
    description: location.intro,
    url: "https://kenrax.in/",
    telephone: `+91${properties["contact.phone.visible"].value}`,
    areaServed: {
      "@type": "City",
      name: `${location.name}, ${location.state}`,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: location.name,
      addressRegion: location.state,
      addressCountry: "IN",
    },
    makesOffer: categories.map((c) => ({
      "@type": "Offer",
      name: c.name,
      url: `https://kenrax.in${c.url}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: location.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="py-10">
        <div className="container flex flex-col items-center text-center">
          <Badge variant="secondary" className="mb-4">
            Air Compressor Filters in {location.name}
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-pretty lg:text-5xl">
            Air Compressor Filters &amp; Separators Manufacturer in {location.name}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            {location.intro}
          </p>
        </div>
      </section>

      <section className="py-8 border-t">
        <div className="mx-auto flex flex-col items-center text-center max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            Where {location.name}&apos;s compressors actually run
          </h2>
          <p className="text-muted-foreground max-w-3xl">{location.clusters}</p>
        </div>
      </section>

      <section className="py-8 border-t">
        <div className="container flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            Product Categories Available in {location.name}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
            {categories.map((c) => (
              <a
                key={c.name}
                href={c.url}
                className="group rounded-lg border bg-card p-6 text-left transition-colors hover:border-primary"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{c.name}</h3>
                  <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                <p className="mt-4 text-sm font-medium">
                  {c.count} part numbers in stock
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {location.body.map((section) => (
        <section key={location.slug + section.heading} className="py-8 border-t">
          <div className="mx-auto flex flex-col items-center text-center max-w-4xl">
            <h2 className="text-2xl font-bold tracking-tight mb-6">
              {section.heading}
            </h2>
            {section.paragraphs.map((para, i) => (
              <p key={i} className="text-muted-foreground max-w-3xl mb-4">
                {para}
              </p>
            ))}
            {section.bullets && (
              <ul className="text-muted-foreground max-w-3xl space-y-3 text-left">
                {section.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      <section className="py-8 border-t">
        <div className="mx-auto flex flex-col items-center text-center max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            Every Major Compressor Brand Covered
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-6">
            Every filter Kenrax makes for {location.name} is engineered to match
            the original part&apos;s media grade, dimensions, and sealing so it
            drops straight in. We cross-reference your OEM part number on WhatsApp
            before you order.
          </p>
          <ul className="flex flex-wrap justify-center gap-2 max-w-3xl">
            {oemBrands.map((b) => (
              <li
                key={b}
                className="rounded-full border bg-card px-4 py-1.5 text-sm text-muted-foreground"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-8 border-t">
        <div className="container flex flex-col items-center">
          <h2 className="text-2xl font-bold tracking-tight mb-6 text-center">
            Compressor Filter FAQs for {location.name}
          </h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl">
            {location.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-8 border-t">
        <div className="mx-auto flex flex-col items-center text-center max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight mb-2">
            Get the price list for {location.name}
          </h2>
          <p className="text-muted-foreground mb-6">
            Send us your OEM part numbers and we confirm fitment and pricing on
            WhatsApp.
          </p>
          <Button size="lg" asChild>
            <a href={whatsappPriceUrl} target="_blank">
              Get Price List
            </a>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            <MapPin className="inline size-4 mr-1" />
            Kenrax Industries, Delhi — dispatching to {location.name},{" "}
            {location.state}.
          </p>
        </div>
      </section>

      <section className="py-8 border-t">
        <div className="container flex flex-col items-center text-center">
          <h2 className="text-lg font-bold tracking-tight mb-4">We Also Serve</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {locations
              .filter((l) => l.slug !== location.slug)
              .map((l) => (
                <a
                  key={l.slug}
                  href={`/locations/${l.slug}`}
                  className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
                >
                  {l.name}
                </a>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const location = getLocation(city);
  if (!location) return {};
  const title = `Air Compressor Filters & Separators Manufacturer in ${location.name} | Kenrax`;
  const description = location.intro;
  return {
    title,
    description,
    keywords: [
      `air filter manufacturer ${location.name}`,
      `compressor air filter ${location.name}`,
      `air oil separator ${location.name}`,
      `compressor oil filter ${location.name}`,
      `Kenrax ${location.name}`,
    ],
    openGraph: {
      title,
      description,
      url: `https://kenrax.in/locations/${location.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://kenrax.in/locations/${location.slug}`,
    },
  };
}