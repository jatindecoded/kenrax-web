// app/product/[slug]/page.tsx
import { Careers4 } from "@/components/careers4";
import { Hero3 } from "@/components/hero3";
import products from "@/lib/products";
import { toKebabCase } from "@/scripts/fetchNotionProducts";
import Home from "@/app/products/page";
import { Metadata, ResolvingMetadata } from "next";
import properties from "@/data/properties.json"
import { generateProductDescription, generateProductKeywords, getApplication } from "@/lib/seo";

type ProductPageProps = {
  params: Promise<{ slug: string }>
}
export default async function Page({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find(
    (p) => toKebabCase(p.partNumber) === slug
  ) ?? null;

  if (!product) {
    return Home();
  }

  const seoDesc = generateProductDescription(product);
  const application = getApplication(product.type, product.OEMs, product.compatibleWith);

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.partNumber,
    "description": seoDesc,
    "sku": product.partNumber,
    "mpn": product.partNumber,
    "brand": {
      "@type": "Brand",
      "name": product.OEMs.join(", ") || "Kenrax",
    },
    "image": `https://kenrax.in/${product.images[0] || properties["media.homepage.photo.1"].media[0]}`,
    "url": `https://kenrax.in/product/${slug}`,
    "offers": {
      "@type": "Offer",
      "url": `https://kenrax.in/product/${slug}`,
      "priceCurrency": "INR",
      "price": properties["product.default.price"]?.value || "5000",
      "priceValidUntil": "2030-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": {
        "@type": "Organization",
        "name": "Kenrax",
      },
    },
    "category": product.type || "Industrial Filter",
    "application": application,
    "material": product.compatibleWith?.join(", ") || undefined,
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero3 product={product} />

      <Careers4 product={product} />
    </div >
  );
}

// synchronous static params—no async keyword
export function generateStaticParams() {
  return products.map((p) => ({
    slug: toKebabCase(p.partNumber),
  }));
}

export async function generateMetadata(
  { params }: ProductPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find(
    (p) => toKebabCase(p.partNumber) === slug
  ) ?? null;

  if (!product) return {};

  const brand = product.OEMs.join(", ") || "Kenrax";
  const type = product.type || "Replacement Part";
  const partNumber = product.partNumber;

  const title =
    brand !== "Kenrax"
      ? `${partNumber} - ${type} for ${brand} | Kenrax`
      : `${partNumber} - ${type} | Kenrax`;

  const description = generateProductDescription(product);
  const application = getApplication(product.type, product.OEMs, product.compatibleWith);
  const keywords = generateProductKeywords(product);

  const imageUrl = `https://kenrax.in/${product.images[0] || properties["media.homepage.photo.1"].media[0]}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://kenrax.in/product/${slug}`,
      siteName: "Kenrax",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 640,
          height: 800,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 640,
          height: 800,
          alt: title,
        },
      ],
    },
    alternates: {
      canonical: `https://kenrax.in/product/${slug}`,
    },
  };
}
