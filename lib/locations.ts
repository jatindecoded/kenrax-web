export interface Location {
  slug: string;
  name: string;
  state: string;
  intro: string;
  industries: string[];
}

export const locations: Location[] = [
  {
    slug: "delhi",
    name: "Delhi",
    state: "Delhi NCR",
    intro:
      "Kenrax supplies OEM-grade replacement air filters, oil filters, and air-oil separators to compressor service firms and plant maintenance teams across Delhi and the wider NCR. From the industrial clusters of Okhla, Bawana, and Alipur to compressor dealers in Kotla Mubarakpur, our stock covers the part numbers most commonly replaced in the capital's manufacturing and transport hubs.",
    industries: ["Light engineering", "Food processing", "Packaging", "Pharmaceuticals", "FMCG"],
  },
  {
    slug: "gurugram",
    name: "Gurugram",
    state: "Haryana",
    intro:
      "Gurugram's auto component plants, warehouses, and commercial complexes run screw compressors around the clock. Kenrax replacement elements for Atlas Copco, Ingersoll Rand, Elgi, and Kaeser are stocked for next-day delivery to sites across the MNC, Udyog Vihar, and Manesar corridors.",
    industries: ["Automotive components", "Warehousing & logistics", "IT & commercial", "Precision engineering"],
  },
  {
    slug: "noida",
    name: "Noida",
    state: "Uttar Pradesh",
    intro:
      "Noida's electronics, auto, and warehousing units depend on reliable compressed air. Kenrax provides direct-fit air filters, oil filters, and separators to Noida and Greater Noida plants, with part-number cross-referencing so you order the right element the first time.",
    industries: ["Electronics & EMS", "Automotive", "FMCG warehousing", "Plastic & moulding"],
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    intro:
      "From Dadar to Ambernath MIDC, Mumbai's pharmaceutical, textile, and engineering units rely on uninterrupted compressed air. Kenrax replacements are available for the city's most common compressor fleets, priced well below OEM parts and backed by part-number cross-referencing.",
    industries: ["Pharmaceuticals", "Textiles", "Chemicals", "Port & logistics", "Plastics"],
  },
  {
    slug: "pune",
    name: "Pune",
    state: "Maharashtra",
    intro:
      "Pune's Chakan, Ranjangaon, and Bhosari belts host some of India's largest automotive and compressor plants. Kenrax supplies OEM-grade filter elements to Pune manufacturers and compressor service companies, matching the exact filtration grade and fitment of the original part.",
    industries: ["Automotive", "Auto components", "Machinery", "Pharma & biotech", "Defence"],
  },
  {
    slug: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    intro:
      "Chennai's Oragadam and Sriperumbudur automotive corridor and heavy engineering units run high-duty screw compressors. Kenrax air filters, oil filters, and separators protect these machines against dust and contamination, with fast dispatch from our Delhi warehouse to Tamil Nadu.",
    industries: ["Automotive", "Heavy engineering", "Textiles", "Chemicals", "Rubber & tyres"],
  },
  {
    slug: "bengaluru",
    name: "Bengaluru",
    state: "Karnataka",
    intro:
      "Bengaluru's electronics, aerospace, and precision manufacturing facilities demand clean, oil-free compressed air. Kenrax separators and filters help these plants control oil carryover and pressure drop, extending element life and reducing energy spend.",
    industries: ["Electronics", "Aerospace", "Automotive", "Precision manufacturing", "Biotech"],
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    intro:
      "Hyderabad's pharmaceutical, food & beverage, and electronics units are quality-sensitive with compressed air. Kenrax supplies filter elements engineered to the exact OEM filtration grade, so your ISO 8573 air quality targets stay achievable between services.",
    industries: ["Pharmaceuticals", "Food & beverage", "Electronics", "Life sciences", "IT campuses"],
  },
  {
    slug: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    intro:
      "Ahmedabad's textile, chemical, and pharma units across GIDC estates run compressors hard. Kenrax replacement filters and separators deliver OEM-matching performance at competitive prices, with cross-reference support over WhatsApp for your part numbers.",
    industries: ["Textiles", "Chemicals", "Pharmaceuticals", "Ceramics", "Plastics"],
  },
  {
    slug: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    intro:
      "Kolkata's engineering, jute, and pharma plants benefit from Kenrax OEM-grade filter elements that match the original part's media, burst strength, and fitment. We help Howrah and Kolkata maintenance teams replace air filters, oil filters, and separators on schedule — not on failure.",
    industries: ["Engineering & fabrication", "Jute & packaging", "Pharmaceuticals", "Foundries", "Food processing"],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}