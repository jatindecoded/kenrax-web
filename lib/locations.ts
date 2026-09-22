export interface Location {
  slug: string;
  name: string;
  state: string;
  intro: string;
  clusters: string;
  body: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
  faqs: Array<{ q: string; a: string }>;
}

export const locations: Location[] = [
  {
    slug: "delhi",
    name: "Delhi",
    state: "Delhi NCR",
    intro:
      "Kenrax supplies OEM-grade air filters, oil filters, and air-oil separators to compressor service firms, dealer workshops, and plant maintenance teams across Delhi and NCR. Our Delhi roots mean same-day pickup in many cases, and a parts desk that speaks the language of the local compressor trade.",
    clusters:
      "Delhi's compressor population lives mainly in the ring of industrial areas around the city: Okhla and Sarita Vihar in the south-east, Bawana and Alipur in the north, and Wazirpur, Mayapuri, and Moti Nagar in the west. In these belts you will find everything from single-machine packing units to multi-compressor food and pharma plants.",
    body: [
      {
        heading: "The working pattern of Delhi compressors",
        paragraphs: [
          "Many Delhi units run in tight, dusty neighbourhoods where autos, trucks, and construction share the road with factory gates. Air intake filters in these locations load visibly faster than their nameplate interval suggests, and the diaphragm-style filter housings common in Indian machines leave little room for an element that has been stretched.",
          "The service companies of Okhla and Mayapuri deal with this daily. Their routine — inexpensive elements changed on condition, oil changed on interval, separators on the hour meter — is the discipline that keeps Delhi air ends alive through the high-dust months of summer and the traffic-heavy mornings.",
        ],
        bullets: [
          "Inspect intake filters every 200–300 hours in dust-heavy belts; monthly in clean halls.",
          "Plan separator and oil changes around the pre-monsoon window so humidity doesn't do the work of contamination.",
          "Keep a cross-reference card (OEM number, brand, model) per machine so an emergency order is a single WhatsApp message.",
        ],
      },
      {
        heading: "Why price consistency and stock matter here",
        paragraphs: [
          "Delhi is a reseller and tender market. Workout owners, diesel generator resellers, and compressor dealers quote against competition, so element pricing has to stay consistent across repeat orders, not just attractive for the first one. Kenrax holds stock of the fast-moving elements for Atlas Copco, Ingersoll Rand, Elgi, Kaeser, and Kirloskar machines in this segment so a dealer's order doesn't depend on our production cycle.",
          "For plant teams, the practical point is simpler: one supplier that can confirm cross-reference fitment before dispatch removes the risk of a wrong element arriving at a shutdown.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I collect filters from Kenrax just before a scheduled shutdown?",
        a: "Yes — Kenrax is based in Delhi and can arrange same-day or next-day pickup for many fast-moving elements. It is still wise to confirm stock against your OEM part number by WhatsApp before travelling, especially for separators.",
      },
      {
        q: "How do I choose between Kenrax and OEM elements for a Delhi dust environment?",
        a: "Both protect the machine; the difference is cost. Kenrax elements match the OEM media grade and fitment. In dusty Delhi belts you will change air filters more often anyway, so value pricing on a high-turnover item compounds quickly — provided the element still meets the compressor's air flow spec.",
      },
    ],
  },
  {
    slug: "gurugram",
    name: "Gurugram",
    state: "Haryana",
    intro:
      "Gurugram's auto component plants, warehouses, and commercial campuses run compressors in continuous, high-duty cycles. Kenrax supplies filter elements and separators to this corridor with fast dispatch, and regularly works through the local OEM service companies that maintain these fleets.",
    clusters:
      "The compressor load clusters around Udyog Vihar and the IMT Manesar complex, with a second ring of warehouses and logistics parks along the NH-48 corridor and Sohna Road. Many of these are two-shift, near-continuous operations where a compressor failure is immediately visible in dispatch and production throughput.",
    body: [
      {
        heading: "Continuous duty shifts accelerate everything",
        paragraphs: [
          "A warehouse compressor that runs 20 hours a day accumulates its 2000-hour service interval in barely three months. In that rhythm, the pinch is not the price of a filter — it is the certainty of having the right element the day the hour meter clicks over.",
          "Gurugram's auto-component plants also load their air filters hard: grinding, pressing, and welding operations throw heavy particulate into the intake path. Elements there are more often changed early than late, and separator life runs shorter than the OEM book figure.",
        ],
        bullets: [
          "Convert intervals to calendar weeks, not hours, for round-the-clock machines.",
          "Watch separator pressure drop on the controller trend — in continuous duty it degrades silently.",
          "Keep one full kit per machine in the store so the shutdown is never waiting on parts.",
        ],
      },
      {
        heading: "Working with the OEM service companies",
        paragraphs: [
          "A large share of Gurugram's compressor maintenance runs through factory-authorised and independent service firms. Those firms buy elements in volume and pass the saving to the plant. Kenrax's cross-reference system lets their engineers confirm a match against any OEM number before committing, which keeps the service visit to a single trip.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you deliver to Udyog Vihar and Manesar?",
        a: "Yes. We dispatch from Delhi to Gurugram and Manesar via transport partners, with same-day ship for stock items ordered before afternoon. Contact us with your OEM numbers and we confirm stock and pricing on WhatsApp.",
      },
      {
        q: "My compressor runs 20 hours a day — should I change filters more often?",
        a: "Hours are hours regardless of the wall clock. Keep your 2000/4000-hour intervals, but because the interval arrives faster in calendar terms, move the inspection cycle (intake restriction, separator pressure drop) to monthly instead of quarterly.",
      },
    ],
  },
  {
    slug: "noida",
    name: "Noida",
    state: "Uttar Pradesh",
    intro:
      "Noida and Greater Noida's electronics, auto, and FMCG plants are quality-sensitive users of compressed air. Kenrax supplies direct-fit elements to this corridor with part-number cross-referencing, so clean-air requirements are met without an OEM price tag.",
    clusters:
      "The industrial spread runs from the older Sector 58–62 belt and the Expressway corridor to the Greater Noida and Yamuna Expressway industrial zones. Electronics, EMS, and moulding units sit alongside auto components and warehousing, giving the area a demanding mix of clean-air loads and high-turnover logistics air.",
    body: [
      {
        heading: "Clean, dry air is the compliance driver",
        paragraphs: [
          "Noida's electronics and EMS plants buy air quality, not just air. Their filtration trains — dryer, coalescing, particulate — depend on the compressor's separator staying inside its design envelope, because oil carryover from an aged separator trips the whole downstream chain.",
          "For these plants the separator change is not optional maintenance: it is an ISO 8573 air-quality commitment. We help them align separator replacement to the certification audit calendar rather than waiting for the oil smell to appear in the shop floor.",
        ],
        bullets: [
          "Schedule separator replacement to your audit cycle, not the failure signal.",
          "Log downstream filter differential pressures — they reveal separator carryover before it is visible.",
          "In moulding plants, spike loads on extend strokes are normal: size return and intake elements to the peak, not the average.",
        ],
      },
      {
        heading: "The warehousing side runs on uptime",
        paragraphs: [
          "Greater Noida's fulfilment centres run compressors for sortation and packing lines through the festive peak. Those units want maintenance that schedules itself: a pre-peak service, a stocked kit, and a supplier that can ship the same day. That is the operating pattern we serve on the Expressway side too.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which compressor brands do you cover in Noida?",
        a: "We manufacture to OE specification for Atlas Copco, Ingersoll Rand, Elgi, Kaeser, Chicago Pneumatic, Kirloskar, Gardner Denver, and Sullair machines commonly found in the Noida belt. Send your OEM part numbers and we confirm the match before dispatch.",
      },
      {
        q: "Can you help us meet ISO 8573 air quality targets?",
        a: "We support the separator side of the equation — OEM-grade elements plus guidance on change intervals — and we verify fitment against your part numbers. Full air-quality certification requires a plant-level audit, but a healthy separator is the precondition for it.",
      },
    ],
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    intro:
      "From Wadala's engineering sheds to Ambernath MIDC, Mumbai runs compressors in pharma, textile, chemical, and packaging plants. Kenrax supplies OEM-grade elements here, with attention to the one factor that governs everything in this city: moisture.",
    clusters:
      "Compressor installations spread from the inner-city belts — Wadala, Sewri, and the eastern docks — to the MIDC industrial belt of Ambernath, Badlapur, and Taloja beyond the city limits. Long coastal distances and a monsoon that arrives on schedule shape how these machines are serviced.",
    body: [
      {
        heading: "Monsoon humidity is the defining enemy",
        paragraphs: [
          "In Mumbai, intake air carries high humidity for a third of the year. Moist air loads air filter media faster, promotes varnish in oil, and shortens separator coalescing life. Plants that run a tight service window in April–May, resetting elements before the monsoon, consistently fare better than those that follow only hour meters.",
          "Condensate management becomes a maintenance discipline here: drains, separators before dryers, and element choices that survive moisture-laden intake are the difference between a compressor that runs through the monsoon and one that trips on a humid Monday.",
        ],
        bullets: [
          "Pre-monsoon service: fresh air filter, oil filter, and separator for a clean base line.",
          "Check condensate drains weekly during monsoon — a stuck trap backs water toward the separator.",
          "Match air filter media to high-humidity intake; a load that takes 3000 hours in a dry hall can arrive in 1000 here.",
        ],
      },
      {
        heading: "Pharma and textile plants buy compliance, not cheap",
        paragraphs: [
          "Mumbai's pharma plants treat compressed air as a process input with validated quality requirements; its textile mills treat it as a production utility that must simply never stop mid-run. Both buy reliability first. Kenrax elements give these plants an OEM-grade replacement path at a competitive price, with cross-reference confirmation so the validated part number maps to the right element.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you stock elements for pharma-grade compressor installations?",
        a: "We supply elements built to the OEM specification for the filter and separator models used in pharma-grade installations. Because air quality there is validated, we confirm the exact OEM part number and media rating with you before dispatch.",
      },
      {
        q: "How should I change my service rhythm for the monsoon?",
        a: "Bring your intake filter and separator attention forward to April–May rather than running the hour meter down. Fresh elements entering the monsoon give the cleanest baseline, and monthly condensate-drain checks through June–September prevent the moisture failures that occur in these months.",
      },
    ],
  },
  {
    slug: "pune",
    name: "Pune",
    state: "Maharashtra",
    intro:
      "Pune's Chakan, Ranjangaon, and Bhosari belts host some of India's densest automotive and engineering manufacturing. Kenrax supplies OEM-grade filter elements and separators to these plants and to the compressor service companies that maintain them.",
    clusters:
      "The main compressor populations sit in the Chakan industrial corridor, the Ranjangaon MIDC, and the older Bhosari–Pimpri belt. Mixed in are the mid-sized engineering and pharma units around Pirangut and along the Nagar Road. High-pressure, high-duty automotive air systems are the signature load of the belt.",
    body: [
      {
        heading: "Automotive duty means high pressure and sharp spikes",
        paragraphs: [
          "Auto component lines use high-pressure air for presses, robots, and fixture clamping. These systems run their compressors hard, cycle quickly, and punish any element that cannot keep up. Separators here must hold their oil-recovery performance under continuous high-pressure service, and intake elements load fast in the dusty environs of grinding and welding cells.",
          "The maintenance culture in Pune's plants is disciplined — scheduled, logged, hour-driven. Our role is to make the replacement side of that discipline effortless: elements that match the OEM spec exactly so the plant's part-number system keeps validating the same way.",
        ],
        bullets: [
          "Pune auto plants commonly run oil and air filter on the 1000-hour mark; keep the separator on the 2000/4000-hour book value.",
          "Log separator pressure drop at every service — high-pressure systems show drift early.",
          "Cross-reference against the OEM number on the existing element, not the model name alone.",
        ],
      },
      {
        heading: "Working with the local service ecosystem",
        paragraphs: [
          "A large slab of Pune's compressor maintenance runs through independent service companies that serve the auto belt. Volume, consistency, and fast restocking matter to them. Kenrax's cross-reference desk lets their fitters confirm the correct element from a photo of the old part — which keeps line-side technicians happy and service visits single-trip.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you serve automotive plants in Chakan and Ranjangaon?",
        a: "Yes. We supply OEM-spec filter and separator elements for the Atlas Copco, Ingersoll Rand, Elgi, and Kaeser machines common in those belts. Share your OEM part numbers and confirm fitment with us on WhatsApp before dispatch.",
      },
      {
        q: "My compressor cycles a lot due to robotic load spikes — does that harm elements?",
        a: "Frequent cycling loads the motor and starter more than the filters, but it does change service timing in practice: machines run more hours and draw harder. Keep filters on hour intervals and watch separator pressure drop; the higher the duty, the tighter the interval should sit to the book value rather than beyond.",
      },
    ],
  },
  {
    slug: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    intro:
      "Chennai's Oragadam and Sriperumbudur automotive corridor, heavy engineering units, and textile mills depend on compressed air in a hot, coastal climate. Kenrax supplies OEM-grade elements here, built for machines that face both high duty and salt-laden, humid intake air.",
    clusters:
      "Compressor populations concentrate in the Oragadam–Sriperumbudur auto belt, the older Ambattur and Tiruvottiyur engineering areas, and textile and chemical units along the GST corridor. Sea proximity gives this region a humid, occasionally saline atmosphere that affects every air filter within kilometres of the coast.",
    body: [
      {
        heading: "Salt and humidity age intake filters fast",
        paragraphs: [
          "Nothing ages an air filter like coastal humidity. Near the shore, hygroscopic salt in the air loads media quickly, and filter housings show tell-tale crusting if the element is stretched. Chennai plants that inspect intake elements on a short cycle — every few hundred hours near the coast — avoid the sudden pressure-drop alarms that coastal dust loading causes.",
          "High ambient temperature is the second factor. Hot intake air means hotter compression and faster oil degradation, so oil intervals in Chennai often run shorter than their book values. The combination loads the oil filter and separator harder and rewards a disciplined service record.",
        ],
        bullets: [
          "Shorten intake-filter inspections for units within a few kilometres of the sea.",
          "Monitor discharge temperature as a service trigger, not just as an alarm.",
          "Keep condensate traps and drains on a fixed schedule — coastal moisture is relentless.",
        ],
      },
      {
        heading: "Automotive and heavy engineering buy certainty",
        paragraphs: [
          "Oragadam's auto plants run validated maintenance systems; heavy engineering units in Ambattur and beyond favour durability. Both buy certainty: the correct element, matched to the OEM number, available when the shutdown is planned. That is the ordering pattern we support — cross-reference confirmed before dispatch, stock held for the fast movers.",
        ],
      },
    ],
    faqs: [
      {
        q: "How should coastal plants differ in air filter maintenance?",
        a: "Inspect intake elements more frequently than an inland plant would — monthly is reasonable near the coast — and change at the first sign of crusting or rapid pressure-drop climb. Salt-laden loading is not visible in the same way as plain dust, so the differential pressure trend matters more.",
      },
      {
        q: "Can you supply to units in Oragadam and Sriperumbudur?",
        a: "Yes. We manufacture to OE spec for the major brands and dispatch from Delhi with tracking. Confirm your OEM part numbers on WhatsApp and we verify fitment and stock before shipping.",
      },
    ],
  },
  {
    slug: "bengaluru",
    name: "Bengaluru",
    state: "Karnataka",
    intro:
      "Bengaluru's electronics, aerospace, and precision manufacturing facilities want clean, stable compressed air more than they want the cheapest part. Kenrax supplies OEM-grade filters and separators plus the engineering support that keeps clean-air systems inside spec.",
    clusters:
      "The industrial map runs from Peenya — one of the largest industrial estates in India — through the Hosur Road and Bommasandra electronics belts, with aerospace and precision engineering in and around the city's many special zones. Clean, dry, stable air is the shared requirement across all of them.",
    body: [
      {
        heading: "Bengaluru buys air quality, not just airflow",
        paragraphs: [
          "Electronics assembly and aerospace precision work cannot tolerate oil in the air stream. These plants run their compressors inside documents air-quality targets, and their downstream filtration only performs if the separator upstream is healthy. An aged separator that slips to high carryover silently fails every rigorous audit downstream of it.",
          "The engineering culture here rewards prevention: logged baselines, trended differential pressures, scheduled replacement. Our contribution is the matching element — built to the OEM spec so the plant's validated part numbers continue to apply — confirmed against the model before dispatch.",
        ],
        bullets: [
          "Align separator replacement with the air-quality audit calendar and the hour interval.",
          "Trend downstream filter differential pressure to catch carryover early.",
          "For dryers on the line, confirm separator health first — an over-loaded separator defeats the dryer's load.",
        ],
      },
      {
        heading: "Peenya's mixed-metal base",
        paragraphs: [
          "Peenya itself is a dense mix of machine shops, electronics, and general engineering in tight spaces. There, the operating reality is practical: parking-adjacent compressor rooms, dusty streets, and do-it-now purchase habits. Fast availability and cross-reference confirmation on WhatsApp fit that rhythm better than long tender cycles.",
        ],
      },
    ],
    faqs: [
      {
        q: "Our plant follows ISO 8573 — can you support that?",
        a: "We support the source side: OEM-spec separators and filters, plus interval guidance and cross-reference confirmation so the installed part matches the plant's specification. A full audit still requires your plant-level air testing, but a healthy separator is the prerequisite for passing it.",
      },
      {
        q: "Do you stock fast-moving elements for Peenya plants?",
        a: "We hold production stock for the major brands and dispatch same-day for many items. Message us your OEM part numbers and we confirm stock and pricing immediately.",
      },
    ],
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    intro:
      "Hyderabad's pharmaceutical, food-and-beverage, and electronics units run quality-sensitive operations where compressed air is a process input. Kenrax supplies OEM-grade filter and separator elements to these plants, matched to the exact OEM specification.",
    clusters:
      "The compressor population spreads across Jeedimetla, Kukatpally, and Sanath Nagar's established industrial belts, the pharma concentration on the Medchal and Shamirpet arc, and the newer facilities around Kollur and the Genome Valley. Pharma and food dominate the quality-sensitive segment.",
    body: [
      {
        heading: "Pharma air is a compliance input, not a utility",
        paragraphs: [
          "In Hyderabad's pharma plants, oil in the air stream is not a maintenance nuisance — it is a product-quality and audit risk. Compressed air that contacts product must sit inside validated classes, and any separator slipping toward carryover threatens that. These plants change separators on interval and record the reasons, and our elements are built so the validated part numbers keep holding.",
          "The food-and-beverage side shares the same logic plus a sensitivity to taste: even trace oil carryover is detectable in product. Both segments reward replacing the separator early rather than late and treating downstream coalescing filter life as a health signal.",
        ],
        bullets: [
          "Replace separators on the official interval, dated and logged — audit hygiene matters.",
          "Watch coalescing filter life as an early carryover indicator.",
          "After any separator change, verify the scavenge line and orifice are clear; a blocked scavenge imitates a failing separator.",
        ],
      },
      {
        heading: "The established industrial belts run differently",
        paragraphs: [
          "Jeedimetla, Sanath Nagar, and Kukatpally carry the older, high-volume engineering and packaging loads — units where the priorities are price and availability. For those, Kenrax offers the same OEM-grade elements with a value price, so a flour mill or packaging plant can run tight margins without stretching separator changes.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you help us maintain validated air quality in a pharma plant?",
        a: "We provide elements manufactured to the OEM specification and confirm them against your part numbers before dispatch, plus interval guidance. The validated air-quality status remains a plant-level requirement, but a spec-correct separator is what allows it to hold between audits.",
      },
      {
        q: "What dispatch time can a Hyderabad plant expect?",
        a: "Orders for in-stock elements placed before afternoon are dispatched from Delhi the same day, with transport partners delivering to Hyderabad typically within a few days depending on the route. Confirm stock on WhatsApp before ordering.",
      },
    ],
  },
  {
    slug: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    intro:
      "Ahmedabad's textile mills, chemical units, and ceramics plants are some of the toughest environments for compressor filtration in the country. Kenrax supplies OEM-grade elements built for heavy particulate loads, with pricing that respects the mill's cost discipline.",
    clusters:
      "The industrial base runs from the Vatva, Naroda, and Odhav GIDC estates through the Kalol–Chhatral textile corridor, with chemical units along the Ahmedabad–Viramgam and Ahmedabad–Mehsana roads. Dust is the dominant fact of life in the spinning and ginning segment.",
    body: [
      {
        heading: "Textile dust loads filters like nothing else",
        paragraphs: [
          "In spinning and ginning areas, the air around the compressor is essentially loaded with fibre and dust particles all day. Intake elements here change on condition far more often than on hours — many mills run replacement cycles of a few hundred hours — and a stretched filter is a direct risk to the machine and the fabric quality. Filter housing maintenance (cleaning the intake path and pre-filter screens) does as much work here as the element itself.",
          "The mill's economics reward this: elements are among the lowest-cost items on the balance sheet, and the cost of a dust-ingested air end is a repair that shuts a production line. Mills that buy value-priced, spec-correct elements and change them early run the cheapest economics of all.",
        ],
        bullets: [
          "Change intake elements on visual condition in spinning units, not on the hour meter.",
          "Clean pre-filter screens and housing intake paths at every element change.",
          "Plan separator and oil changes around the high-dust season to keep the whole train at baseline.",
        ],
      },
      {
        heading: "Chemicals and ceramics share the load logic",
        paragraphs: [
          "Ahmedabad's chemical units want oil-free reliability for instrumentation air; its ceramics plants face abrasive ambient dust similar to the mills. Both reward the same discipline: a stocked kit, a hardened inspection cycle, and a supplier that confirms fitment before dispatch.",
        ],
      },
    ],
    faqs: [
      {
        q: "How often should a spinning mill change its air filter?",
        a: "On condition rather than the hour meter. In a dust-heavy spinning shed, expect several hundred hours at most — inspect monthly and change at the first visible darkening. It is the cheapest element on the machine and the one most exposed in this environment.",
      },
      {
        q: "Do you supply to textile mills across the Kalol–Chhatral belt?",
        a: "Yes. We manufacture to OE spec for the major compressor brands and dispatch across Gujarat. Confirm your OEM part numbers on WhatsApp and we verify fitment and stock before shipping.",
      },
    ],
  },
  {
    slug: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    intro:
      "Kolkata's engineering units, jute mills, and pharma plants represent the city's long industrial history, and their compressors are serviced accordingly — old machines kept alive by good parts discipline. Kenrax supplies OEM-grade elements to keep these machines running on schedule.",
    clusters:
      "Compressors cluster around the Howrah industrial belt, Taratala and the Garden Reach areas, Dankuni across the Hooghly, and the engineering and packaging yards scattered along the circular canal and BELTOL regions. Jute mills add a distinctive, fibre-laden dust load on the intake side.",
    body: [
      {
        heading: "The jute and fibre load",
        paragraphs: [
          "Jute mills and jute-adjacent packaging units run compressors in atmospheres heavy with fibre dust. Intake filters clog and harden quickly, and the resulting restriction drives the same energy-and-temperature spiral seen in textile belts. Mill maintenance teams keep an inspection rhythm measured in days, not months, and change elements well before the hour book value.",
          "Because these are often older, hard-working machines, the parts must be right the first time: a wrong element in a shutdown costs a day of production in an industry that runs on thin margins. Confirming the OEM number against the old element is the norm here, and we support it via cross-reference confirmation on WhatsApp.",
        ],
        bullets: [
          "Inspect intake elements weekly in fibre-heavy sheds; change on the first signs of hardening.",
          "Keep the air-filter housing and pre-filter screens clean — they do a third of the separating work.",
          "For older machines, verify the separator model against the element number; superseded numbers are common.",
        ],
      },
      {
        heading: "Howrah's engineering and pharma side",
        paragraphs: [
          "Howrah and Taratala carry general engineering, fabrication, and pharma load where the priority is reliability over raw price. These units typically run their compressors on disciplined schedules and want a supplier that adds certainty — matched elements, confirmed numbers, dependable restocking.",
        ],
      },
    ],
    faqs: [
      {
        q: "My jute mill's air filter can't last its full interval. Is that normal?",
        a: "Yes. Fibre-laden air clogs media far faster than the book interval suggests. The correct practice is a short inspection cycle (weekly) with condition-based replacement. You will use more elements but protect the air end and the energy bill — which in this environment is the cheaper economics.",
      },
      {
        q: "Do you supply superseded part numbers for older compressors?",
        a: "We cross-reference OEM numbers, including superseded and renumbered parts for older machines. Send the number from your current element (or a photo) and we confirm the correct replacement before dispatch.",
      },
    ],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}