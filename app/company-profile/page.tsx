import { Metadata } from "next";
import { ProfileHero } from "@/components/companyProfileComponents/profileHero";
import { ProfileAbout } from "@/components/companyProfileComponents/profileAbout";
import { ProfileCapabilities } from "@/components/companyProfileComponents/profileCapabilities";
import { ProfileMachinery } from "@/components/companyProfileComponents/profileMachinery";
import { ProfileProducts } from "@/components/companyProfileComponents/profileProducts";
import { ProfileTesting } from "@/components/companyProfileComponents/profileTesting";
import { ProfileStats } from "@/components/companyProfileComponents/profileStats";
import { ProfileContact } from "@/components/companyProfileComponents/profileContact";
import { Logos3 } from "@/components/logos3";

export default function CompanyProfile() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://kenrax.in/#organization",
    name: "Kenrax Industries",
    url: "https://kenrax.in",
    logo: "https://kenrax.in/favicon.svg",
    description:
      "Established Indian manufacturer of precision filtration products for industrial compressed air systems. Specialising in air filters, oil filters, air-oil separators, coolant filters, and hydraulic filters.",
    foundingLocation: "New Delhi, India",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9810329240",
      contactType: "sales",
      email: "jatin.kenrax@gmail.com",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      "https://www.linkedin.com/company/kenrax",
      "https://www.instagram.com/kenraxindustries/",
      "https://www.facebook.com/kenraxindustries/",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kenrax Office",
      addressLocality: "New Delhi",
      addressRegion: "Dwarka",
      addressCountry: "IN",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <ProfileHero />
      <ProfileAbout />
      <ProfileCapabilities />
      <section className="py-16 md:py-24 print-break-before flex items-center justify-center">
        <img
          src="/media/gandr-collage.jpg"
          alt="Kenrax Manufacturing Collage"
          className="w-full max-w-5xl rounded-lg border object-contain"
        />
      </section>
      <ProfileMachinery />
      <ProfileProducts />
      <ProfileTesting />
      <ProfileStats />
      <Logos3 heading="Trusted by Leading Compressor Brands" />
      <ProfileContact />
    </>
  );
}

export const metadata: Metadata = {
  title: "Company Profile - Kenrax Industries",
  description:
    "Kenrax Industries is an established Indian manufacturer of precision filtration products for industrial compressed air systems. Over 30 years of manufacturing excellence.",
  keywords: [
    "Kenrax Industries",
    "filtration manufacturer India",
    "compressor filter manufacturer",
    "OEM filter supplier",
    "air filter manufacturer Delhi",
    "oil separator manufacturer India",
    "private label filter manufacturing",
    "white label compressor filters",
  ],
  openGraph: {
    url: "https://kenrax.in/company-profile",
    type: "website",
    title: "Company Profile | Kenrax Industries",
    description:
      "Established Indian manufacturer of precision filtration products for industrial compressed air systems. 30+ years of manufacturing excellence.",
    images: [
      {
        url: "https://kenrax.in/og_image.png",
        width: 640,
        height: 800,
        alt: "Kenrax Industries Company Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Company Profile | Kenrax Industries",
    description:
      "Established Indian manufacturer of precision filtration products for industrial compressed air systems. 30+ years of manufacturing excellence.",
    images: [
      {
        url: "https://kenrax.in/og_image.png",
        width: 640,
        height: 800,
        alt: "Kenrax Industries Company Profile",
      },
    ],
  },
};
