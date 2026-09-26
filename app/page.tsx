import { Contact7 } from "@/components/contact7";
import { Faq5 } from "@/components/faq5";
import { Gallery6 } from "@/components/gallery6";
import { Hero151 } from "@/components/hero151";
import { Logos3 } from "@/components/logos3";
import { Stats8 } from "@/components/stats8";
import { Testimonial10 } from "@/components/testimonial10";
import products from "@/lib/products";
import { Metadata } from "next";
import properties from "@/data/properties.json"

const airFilters = products.filter((p) => p.type === "Air Filter");
const oilFilters = products.filter((p) => p.type === "Oil Filter");
const separators = products.filter((p) => p.type === "Air Oil Separator");

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://kenrax.in/#organization",
    "name": "Kenrax Industries",
    "url": "https://kenrax.in",
    "logo": "https://kenrax.in/favicon.svg",
    "description": "Manufacturer and supplier of OEM replacement air filters, oil filters, air-oil separators, and hydraulic filters for screw air compressors.",
    "foundingLocation": "New Delhi, India",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9810329240",
      "contactType": "sales",
      "email": "jatin.kenrax@gmail.com",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://wa.me/919810329240",
      "https://kenrax.in"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Delhi",
      "addressCountry": "IN"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Hero151 />
      <Stats8 />
      <Logos3 />
      <Gallery6
        heading="Air Filters for Screw Compressors"
        demoUrl="/air-filter"
        items={airFilters.slice(0, 10)}
      />
      <Gallery6
        heading="Oil Filters for Screw Compressors"
        demoUrl="/oil-filter"
        items={oilFilters.slice(0, 10)}
      />
      <Gallery6
        heading="Air-Oil Separators for Screw Compressors"
        demoUrl="/air-oil-separator"
        items={separators.slice(0, 10)}
      />
      <Testimonial10 />
      <Faq5 />
      <Contact7 />
    </>
  );
}


export const metadata: Metadata = {
  title: "Kenrax - Air Oil Filters, Separators",
  description: "Kenrax is India's leading manufacturer of replacement air filters, oil filters, air-oil separators, and hydraulic filters for screw air compressors. OEM-quality equivalents for Atlas Copco, Ingersoll Rand, Elgi, Kaeser, and more. Get a quote today.",
  keywords: [
    "air filter manufacturer India",
    "oil filter manufacturer India",
    "air oil separator manufacturer",
    "hydraulic filter manufacturer",
    "compressor filter manufacturer",
    "OEM replacement filters",
    "Atlas Copco replacement filters",
    "Ingersoll Rand replacement filters",
    "Elgi replacement filters",
    "Kaeser replacement filters",
    "CP replacement filters",
    "Chicago Pneumatic filters",
    "Kirloskar replacement filters",
    "Gardner Denver filters",
    "compressor filter supplier Delhi",
    "screw compressor filters",
    "Kenrax filters",
    "Kenrax air oil separators",
    "air filter replacement India",
    "oil separator manufacturer Delhi"
  ],
  openGraph: {
    url: "https://kenrax.in",
    type: "website",
    title: "Kenrax | Air Filter & Oil Separator Manufacturer in India",
    description: "Kenrax is India's leading manufacturer of replacement air filters, oil filters, air-oil separators, and hydraulic filters for screw air compressors. OEM-quality for Atlas Copco, Ingersoll Rand, Elgi, Kaeser.",
    images: [
      {
        url: `https://kenrax.in/og_image.webp`,
        width: 640,
        height: 800,
        alt: "Kenrax Filters"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenrax | Air Filter & Oil Separator Manufacturer in India",
    description: "India's leading manufacturer of replacement air filters, oil filters, and air-oil separators for screw compressors. OEM-quality for all major brands.",
    images: [
      {
        url: `https://kenrax.in/og_image.webp`,
        width: 640,
        height: 800,
        alt: "Kenrax Filters"
      }
    ]
  },
  alternates: {
    canonical: "https://kenrax.in",
  },
};
