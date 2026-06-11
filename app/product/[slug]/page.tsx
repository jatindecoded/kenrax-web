import Page, { generateMetadata } from "@/app/[productType]/[slug]/page";
import { toKebabCase } from "@/scripts/fetchNotionProducts";
import products from "@/lib/products";

export default Page;
export { generateMetadata };

export function generateStaticParams() {
  return products.map((p) => ({
    slug: toKebabCase(p.partNumber),
  }));
}
