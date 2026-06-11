import type { Product } from "@/scripts/fetchNotionProducts";
import notionProducts from "@/data/products.json";
import manualEntries from "@/data/manual-products.json";
import { generateProductDescription } from "@/lib/seo";

type ManualEntry = {
  partNumber: string;
  type?: string;
  OEMs?: string[];
  compatibleWith?: string[];
  images?: string[];
  description?: string;
  priority?: number | null;
};

function toKebabCase(str: string) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .replace(/_/g, "-")
    .toLowerCase();
}

function withFallbacks(entry: ManualEntry): Product {
  const type = entry.type || "Replacement Part";
  const OEMs = entry.OEMs?.length ? entry.OEMs : ["Kenrax"];
  const compatibleWith = entry.compatibleWith ?? [];
  const images = entry.images ?? [];
  const description =
    entry.description ||
    generateProductDescription({
      partNumber: entry.partNumber,
      type,
      OEMs,
      compatibleWith,
      description: entry.description,
    });
  const priority = entry.priority ?? 999;
  const id = `manual-${toKebabCase(entry.partNumber)}`;
  const url = `/${toKebabCase(type)}/${toKebabCase(entry.partNumber)}`;

  return {
    id,
    partNumber: entry.partNumber,
    type,
    OEMs,
    compatibleWith,
    images,
    description,
    priority,
    url,
  };
}

function mergeAndSort() {
  const existing = new Set(notionProducts.map((p) => p.partNumber));

  const manual = manualEntries
    .filter((e) => !existing.has(e.partNumber))
    .map(withFallbacks);

  const all = [...notionProducts, ...manual];
  return all.map((p) => ({
    ...p,
    url: `/${toKebabCase(p.type)}/${toKebabCase(p.partNumber)}`,
  }));
}

const products: Product[] = mergeAndSort();
export default products;
