import type { Product } from "@/scripts/fetchNotionProducts";

const APPLICATION_MAP: Record<string, string> = {
  "Air Filter":
    "Removes airborne contaminants, dust, dirt, and particulate matter from intake air to protect compressor internal components including rotors, bearings, and valves. Ensures clean compressed air output, reduces wear on downstream equipment, and maintains optimal compressor efficiency. Regular replacement of air filters prevents performance degradation and extends the operational life of rotary screw air compressors.",
  "Oil Filter":
    "Filters out contaminants, sludge, carbon deposits, and metal particles from compressor lubricating oil to maintain oil quality, reduce friction, prevent premature wear of bearings and rotors, and extend equipment life. Critical for maintaining proper lubrication, reducing heat buildup, and ensuring reliable compressor operation between oil change intervals.",
  "Air Oil Separator":
    "Separates oil from compressed air to deliver clean, low oil-carryover air while minimizing pressure drop in rotary screw air compressors. Uses advanced coalescing media to efficiently remove oil aerosols from the compressed air stream, ensuring oil carryover remains within acceptable limits. Essential for protecting downstream equipment, reducing oil consumption, and maintaining compressed air quality standards.",
  "Hydraulic Filter":
    "Removes contaminants from hydraulic fluid to protect system components such as pumps, valves, actuators, and seals from premature wear and failure. Ensures consistent hydraulic system performance, reduces downtime, and extends the service life of hydraulic components in industrial equipment.",
  "Line Filter":
    "Provides final-stage filtration of compressed air at point of use to remove remaining particulates, moisture, and oil aerosols. Ensures high-quality compressed air for sensitive applications including pneumatic controls, instrumentation, painting, and food processing.",
};

const DEFAULT_APPLICATION =
  "Industrial-grade aftermarket replacement part engineered for use in air compression and pneumatic systems. Designed to provide reliable performance, consistent fit, and long service life in demanding industrial environments.";

function getCompatText(OEMs?: string[], compatibleWith?: string[]): string {
  if (OEMs && OEMs.length > 0) {
    const brandList = OEMs.join(" and ");
    let text = `Compatible with ${brandList} rotary screw air compressors`;
    if (compatibleWith && compatibleWith.length > 0) {
      const compatList = compatibleWith.slice(0, 5).join(", ");
      text += `, including popular models such as ${compatList}`;
    }
    text += ". Aftermarket replacement part designed for reliable drop-in fit and consistent performance.";
    return text;
  }
  if (compatibleWith && compatibleWith.length > 0) {
    return `Compatible with ${compatibleWith.slice(0, 5).join(", ")} and more compressor models. Aftermarket replacement designed for reliable performance.`;
  }
  return "Compatible with a wide range of rotary screw air compressors. Aftermarket replacement part engineered for dependable fit and function in various industrial applications.";
}

export function getApplication(
  type: string,
  OEMs?: string[],
  compatibleWith?: string[],
): string {
  const base = APPLICATION_MAP[type] || DEFAULT_APPLICATION;
  const compat = getCompatText(OEMs, compatibleWith);
  return `${base} ${compat}`;
}

export function generateProductDescription(
  product: Pick<
    Product,
    "partNumber" | "type" | "OEMs" | "compatibleWith" | "description"
  >,
): string {
  if (product.description) return product.description;

  const brand =
    product.OEMs.length > 0 ? product.OEMs.join(" and ") : "Kenrax";
  const type = product.type || "Replacement Part";
  const partNumber = product.partNumber;
  const typeLower = type.toLowerCase();

  const application = APPLICATION_MAP[type] || DEFAULT_APPLICATION;

  const parts: string[] = [];

  parts.push(
    `Premium aftermarket ${typeLower} compatible with ${brand} rotary screw air compressors. Reference Part Number: ${partNumber} — designed as a direct drop-in replacement, meeting or exceeding original specifications for reliable performance and long service life.`,
  );

  parts.push(
    `Application: This ${typeLower} ${application.charAt(0).toLowerCase() + application.slice(1)}`,
  );

  if (product.OEMs.length > 0) {
    const oemList = product.OEMs.join(", ");
    let compatDetail = `Compatibility: Aftermarket replacement for ${oemList} air compressors`;
    if (product.compatibleWith.length > 0) {
      compatDetail += ` — fits models including ${product.compatibleWith.slice(0, 7).join(", ")}`;
    }
    compatDetail += `. Direct fit, no modifications needed.`;
    parts.push(compatDetail);
  } else if (product.compatibleWith.length > 0) {
    parts.push(
      `Compatibility: Fits compressor models including ${product.compatibleWith.slice(0, 7).join(", ")}. Direct fit aftermarket replacement.`,
    );
  }

  parts.push(
    `Kenrax replacement ${typeLower}s are manufactured with high-grade materials for durability and consistent protection. Trusted by industries across India for quality compressor spares and replacement filters.`,
  );

  parts.push(
    `Order your ${brand} ${partNumber} ${typeLower} from Kenrax. Competitive pricing, bulk discounts, fast shipping across India. Contact us on WhatsApp or phone for price and availability.`,
  );

  return parts.join("\n\n");
}

export function generateProductKeywords(
  product: Pick<Product, "partNumber" | "type" | "OEMs" | "compatibleWith">,
): string[] {
  const { partNumber, type, OEMs, compatibleWith } = product;
  const brand = OEMs.join(", ") || "Kenrax";
  const brandShort = OEMs[0] || "Kenrax";

  const keywords = [
    `${partNumber}`,
    `${partNumber} ${type}`,
    `${brand} ${partNumber}`,
    `${brand} ${type}`,
    `${brand} ${type} ${partNumber}`,
    `Replacement ${type} for ${brand}`,
    `Aftermarket ${type} ${brand}`,
    `Buy ${partNumber} ${type}`,
    `${partNumber} ${type} Compatible`,
    `${brand} ${partNumber} ${type}`,
    `${type} for Air Compressor`,
    `OEM ${type} Replacement`,
    `${type} Manufacturer India`,
    `${type} Supplier India`,
    "Air Compressor Spare Parts",
    "Kenrax Replacement Filters",
    `${brandShort} Compressor ${type}`,
    `${type} for ${brandShort} Compressor`,
  ];

  if (compatibleWith.length > 0) {
    compatibleWith.slice(0, 5).forEach((model) => {
      keywords.push(`${type} for ${model}`);
      keywords.push(`${partNumber} ${model}`);
    });
  }

  return [...new Set(keywords)];
}
