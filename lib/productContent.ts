import type { Product } from "@/scripts/fetchNotionProducts";

export interface ProductSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}

const BRAND_TEXT: Record<string, string> = {
  "Atlas Copco":
    "Atlas Copco rotaries are high-speed and clearance-sensitive, so intake contamination accelerates wear faster than on slower machines.",
  Elgi:
    "Elgi screw compressors are widely deployed in Indian plants, and their service cycles are driven by reliable, spec-true elements rather than part-name fitment.",
  "Ingersoll Rand":
    "Ingersoll Rand air ends rely on clean intake and clean oil to hold their design clearances, which makes the air and oil filter the two most important elements on the machine.",
  CPT:
    "CPT (Chicago Pneumatic) compressors are workhorses in demanding environments, where filter sealing quality matters as much as media grade.",
  Kaeser:
    "Kaeser compressors are engineered around low energy consumption, and a visibly loaded filter inside the design pressure drop is part of how that efficiency is maintained.",
  KPC:
    "KPC machines run hard in small plants, where a scheduled element change is far cheaper than an unscheduled air end repair.",
  "K.G. Khosla":
    "K.G. Khosla screw compressors are built for dusty Indian conditions, making the intake filter the busiest element in the service kit.",
};

function brandNote(brand: string): string | undefined {
  for (const [key, note] of Object.entries(BRAND_TEXT)) {
    if (brand.toLowerCase().includes(key.toLowerCase())) return note;
  }
  return undefined;
}

const TYPE_EDITORIAL: Record<string, { role: string; interval: string[]; signs: string[]; fit: string[] }> = {
  "Air Filter": {
    role:
      "The air filter is the compressor's intake guard. It removes dust and particulate from ambient air before it reaches the rotors, bearings, and oil system. In a screw compressor the clearances between rotors and housing are measured in thousandths of a millimetre — abrasive dust that bypasses the filter gets pinned between those surfaces and scores them. The filtration media must handle the machine's full intake airflow while presenting a minimal pressure drop, because every extra bar of intake restriction is paid for twice: once in energy, once in heat.",
    interval: [
      "Clean environments: 2000–4000 operating hours, or per the OEM manual.",
      "Dusty or industrial environments: inspect every 500–1000 hours and change on condition.",
      "Always change earlier if the element shows loading, damage, or if the filter restriction alarm activates.",
    ],
    signs: [
      "A dark, clearly loaded or visibly dusty element when compared with a new one.",
      "Rising intake restriction shown on the compressor controller or a differential pressure gauge.",
      "Higher discharge temperature, because a starved intake forces the rotors to work harder.",
      "Reduced output flow or pressure at the point of use.",
    ],
    fit: [
      "Isolate and depressurise the compressor before opening the housing.",
      "Remove the old element and compare dimensions and gasket profile against the new one before installing.",
      "Clean the housing and intake pipe interior so no debris falls into the air end.",
      "Seat the element squarely, rock it gently into place, and confirm the housing seals firmly.",
    ],
  },
  "Oil Filter": {
    role:
      "The oil filter protects the lubrication circuit in an oil-injected screw compressor. Oil does three jobs at once — it cools the air end, seals the running clearance between the rotors, and conveys away wear particles. The oil filter stops those particles circulating back into the bearings and rotors. A loaded or bypassing oil filter is one of the quietest causes of premature wear in the entire machine, because it rarely produces a loud symptom before the damage is done.",
    interval: [
      "Change together with every oil change, typically 1000, 2000, or 4000 hours per the OEM manual.",
      "Stand-alone change is never recommended — the element and the fill should move as one.",
      "After any mechanical repair, run briefly then change oil and oil filter again to flush debris.",
    ],
    signs: [
      "A rising differential pressure across the oil filter on the gauge or controller.",
      "Lower oil pressure available at the bearings for the same machine load.",
      "Discharge temperature climbing above the machine's healthy baseline.",
      "Evidence of oil bypassing (unfiltered oil circulating) during normal running.",
    ],
    fit: [
      "Check the thread, sealing ring, and anti-drainback arrangement against your old element.",
      "Pre-fill the new element with oil where the design allows, before screwing it on.",
      "Torque the element to spec — overtightening deforms the seal, under-tightening leaks.",
      "Note the fresh-element differential pressure as the baseline for the next service.",
    ],
  },
  "Air Oil Separator": {
    role:
      "The air-oil separator sits between the air end and the point of use. Compressed air leaves the rotors carrying a fine oil mist; the separator's coalescing media collects those droplets and returns the oil to the sump while letting the air pass. When the separator ages, coalescing efficiency decays: residual oil carryover climbs, oil consumption rises, and downstream equipment — dryers, filters, valves, tools, and the product itself — starts to collect the oil the separator should have recovered.",
    interval: [
      "Typical OEM interval: 2000–4000 operating hours, or per the machine manual.",
      "Quality-sensitive plants (food, pharma, electronics) should align replacement with the air-quality audit calendar.",
      "If separator pressure drop climbs, replace early regardless of hours.",
    ],
    signs: [
      "Oil consumption rising between services with no other explanation.",
      "Oil film in the receiver drain, piping, or downstream filter elements.",
      "A rising differential pressure across the separator on the controller.",
      "The machine running hotter as the separator adds restriction to the discharge path.",
    ],
    fit: [
      "Confirm the element matches the OEM number, dimensions, and sealing arrangement of your old one.",
      "Check the scavenge/return line and orifice are clear — a blocked scavenge imitates a failing separator.",
      "Seat the element and torque the housing cover to spec; a poor seal defeats the new element.",
      "After fitting, verify oil carryover visually and the separator pressure drop reading on restart.",
    ],
  },
};

const DEFAULT_EDITORIAL = {
  role:
    "This replacement element is engineered for consistent, repeated duty in rotary screw compressors and their support circuits. Its purpose is to protect precision components — rotors, bearings, valves, or downstream equipment — from the contamination that surrounds them in industrial service.",
  interval: [
    "Follow the OEM service manual interval for the compressor or circuit it protects.",
    "Inspect on condition wherever the environment is dusty, humid, or high-duty.",
    "Replace earlier after any contamination event such as an over-temp trip or mechanical repair.",
  ],
  signs: [
    "Visible loading or damage on the element compared with a new unit.",
    "A rising differential pressure reading across the element in service.",
    "The protected equipment running hotter, slower, or with degraded output.",
  ],
  fit: [
    "Verify dimensions and sealing against the element being replaced before fitting.",
    "Clean the housing and seating area before installation.",
    "Confirm the element is seated squarely and the housing seals firmly.",
  ],
};

function typeTitle(type: string): string {
  if (type === "Air Oil Separator") return "air-oil separator";
  return type.toLowerCase();
}

export function getProductSections(product: Product): ProductSection[] {
  const brand = product.OEMs.length > 0 ? product.OEMs.join(" and ") : "Kenrax";
  const type = product.type || "Replacement Part";
  const typeLower = typeTitle(type);
  const part = product.partNumber;
  const seed = hash(part);

  const editorial = TYPE_EDITORIAL[type] || DEFAULT_EDITORIAL;
  const note = brandNote(brand);
  const openerVariants = [
    `Kenrax manufactures the ${part} — an OEM-grade ${typeLower} built for ${brand} screw compressors. ${note ? note + " " : ""}This element is made to the original specification so it installs exactly where the OEM part did, with the same media grade, dimensions, and sealing.`,
    `The ${part} is Kenrax's direct replacement ${typeLower} for ${brand} compressor service. ${note ? note + " " : ""}Rather than a generic 'fits most' element, it is built to the specific performance envelope of the machine it replaces.`,
    `If your ${brand} compressor is due for service, the ${part} ${typeLower} is the drop-in replacement element to fit. ${note ? note + " " : ""}It matches the original part's filtration spec so the compressor keeps running inside its design performance window.`,
  ];

  const closingVariants = [
    `For the ${part}, order quantities and dispatch times are confirmed on WhatsApp — send the OEM number from your current element and we verify the match before shipping.`,
    `Order the ${part} directly from Kenrax on WhatsApp or from the product page; assume part-number confirmation takes minutes, not days.`,
    `Stocking the ${part} ahead of the interval keeps the service shutdown to a planned event. Confirm price and availability on WhatsApp.`,
  ];

  const sections: ProductSection[] = [];

  sections.push({
    id: "overview",
    title: `About the ${part} ${typeLower}`,
    paragraphs: [
      openerVariants[seed % openerVariants.length],
      product.description
        ? product.description
        : `In service, this ${typeLower} continuously ${type === "Air Oil Separator" ? "recover oil mist from the compressed air stream" : "filters the medium that protects the compressor's precision components"}. Keeping it changed on the OEM interval protects the investment in the machine far beyond the cost of the element itself.`,
    ],
  });

  sections.push({
    id: "role",
    title: `What the ${part} does in your ${brand} compressor`,
    paragraphs: [
      editorial.role,
      `The ${part} is a scheduled-service consumable, not a repair item. Fitted as part of the ${brand} machine's standard maintenance, it keeps ${brand === "Kenrax" ? "the compressor" : `the ${brand} compressor`} inside its design operating band between services.`,
    ],
  });

  sections.push({
    id: "interval",
    title: "When to replace this element",
    paragraphs: editorial.interval.map((line) => `• ${line}`),
  });

  sections.push({
    id: "signs",
    title: "Signs it needs replacement",
    bullets: editorial.signs,
    paragraphs: [
      "Replace on any of the above regardless of hour count. For this part, keeping a fresh element in stock before the interval arrives is the single cheapest insurance policy on the machine.",
    ],
  });

  if (product.compatibleWith.length > 0) {
    sections.push({
      id: "compatibility",
      title: `Direct-fit compatibility for ${brand}`,
      paragraphs: [
        `The ${part} is cross-referenced for these ${brand} OEM part numbers and models:`,
      ],
      bullets: product.compatibleWith.slice(0, 30),
    });
  } else {
    sections.push({
      id: "compatibility",
      title: `Confirming fitment for ${brand}`,
      paragraphs: [
        `Fitment for the ${part} is confirmed against the OEM part number from your current element. WhatsApp us the number (or a photo of the element) and we verify media grade, dimensions, and sealing before dispatch. Cross-reference is available for Atlas Copco, Ingersoll Rand, Elgi, Kaeser, Chicago Pneumatic, Kirloskar, Gardner Denver, and Sullair machines.`,
      ],
    });
  }

  sections.push({
    id: "fitting",
    title: "Fitting and verification",
    paragraphs: editorial.fit.map((line) => `• ${line}`),
  });

  sections.push({
    id: "ordering",
    title: `Ordering the ${part}`,
    paragraphs: [closingVariants[seed % closingVariants.length]],
  });

  return sections;
}