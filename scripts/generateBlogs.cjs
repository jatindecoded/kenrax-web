const fs = require("fs");

const rt = (t) => ({
  type: "text",
  text: { content: t, link: null },
  plain_text: t,
  annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false, color: "default" },
  href: null,
});

const blk = (type, text) => ({
  object: "block",
  type,
  [type]: { rich_text: text ? [rt(text)] : [] },
});

const h2 = (t) => blk("heading_2", t);
const h3 = (t) => blk("heading_3", t);
const p = (t) => blk("paragraph", t);
const bq = (t) => blk("blockquote", t);
const ul = (items) => items.map((i) => blk("bulleted_list_item", i));
const ol = (items) => items.map((i) => blk("numbered_list_item", i));
const div = () => blk("divider");

const WA_LIST = "You can order these directly from Kenrax on WhatsApp (or check price on the product pages).";

const existing = JSON.parse(fs.readFileSync("data/blogs/blogs.json", "utf8"));
const [original, ...rest] = existing;
const meta = Object.fromEntries(rest.map((b) => [b.slug, b]));
const covers = Object.fromEntries(rest.map((b) => [b.slug, b.coverImage]));
const base = meta;

function entry(slug, title, coverImage, createdAt, content) {
  return {
    id: slug,
    title,
    slug,
    content,
    coverImage,
    createdAt,
    updatedAt: createdAt,
  };
}

const blogs = [];
blogs.push(original);

// ---------------------------------------------------------------------------
// 1. Air Filter Maintenance Checklist (expanded to full long-form)
// ---------------------------------------------------------------------------
blogs.push(
  entry(
    "air-filter-maintenance-checklist",
    "Air Filter Maintenance Checklist for Screw Compressors",
    covers["air-filter-maintenance-checklist"],
    base["air-filter-maintenance-checklist"].createdAt,
    [
      p("A screw compressor breathes a lot. A typical 75 kW unit draws around 15–20 cubic metres of air per minute — and every cubic metre of air in an industrial environment carries dust, dirt, moisture, and even oil vapour from other machinery. The air filter is the only thing standing between all of that contamination and your rotors, bearings, and oil system."),
      p("This is a practical, shop-floor checklist for maintaining compressor air filters. It is written from the perspective of a maintenance team that has 30 minutes on a scheduled shutdown and needs to know exactly what to check, when, and why."),
      div(),
      h2("Why the air filter matters"),
      p("Inside a rotary screw compressor, the rotors rotate at high speed with clearances measured in thousandths of a millimetre. Abrasive dust that slips past a tired or damaged air filter gets pinched between the rotors and the housing, scoring the surfaces and contaminating the oil. The cost is never 'just a filter'."),
      ul([
        "A new air filter: a few thousand rupees.",
        "A set of reground or replaced rotors after dust ingestion: a compressor-sized repair bill, often 40–60% of the value of a new air end.",
        "Unplanned downtime while the repair is executed: usually the most expensive line of all, because production stops with it.",
        "Secondary damage: contaminated oil gets pumped through the entire system, loading the oil filter, the separator, and the cooler.",
      ]),
      p("In short, the air filter is the cheapest insurance policy on the machine. A discipline of checking it on a calendar rather than on failure will pay for itself many times over."),
      div(),
      h2("How often should you inspect the air filter?"),
      p("The OEM interval for filter replacement typically falls in the 1000–4000 hour band depending on the compressor. But hours are a poor predictor when the environment changes. Two identical compressors, one in a clean climate-controlled hall and one beside a concrete batching plant, will need air filters at completely different frequencies."),
      ol([
        "Inspect every 250 operating hours (about monthly for a single-shift plant) in normal indoor conditions.",
        "Inspect every 100 operating hours (weekly) where the ambient is dusty, humid, or near construction, cement, textiles, or agriculture.",
        "Change on schedule per the OEM manual, or earlier if inspection says so — whichever comes first.",
        "For seasonal businesses such as flour milling or spice processing, add an inspection at the start of the high-dust season and one at the end.",
      ]),
      div(),
      h2("The pre-shutdown inspection"),
      p("Do the full external inspection during a planned shutdown, not while the compressor is running. Give yourself five minutes per machine and use a torch."),
      ol([
        "Isolate, lock out, and tag the compressor, then wait for the air end and oil system to depressurise.",
        "Open the filter housing as per the manual and remove the element by rocking it gently — do not lever it out with a screwdriver or you risk tearing the media.",
        "Hold the element up to a strong light. A working element looks near-white or pale cream. As it loads, it darkens uniformly.",
        "Look for patterns in the dirt: a dark band only on one side means the intake path is allowing uneven flow; wet spots mean moisture is entering the intake.",
        "Check the rubber gasket at the filter base and wherever the element seats. A hardened, cracked, or missing gasket allows dirty air straight into the machine.",
        "Sweep out the housing, wipe the seat and the intake pipe, and retire any element that is visibly damaged regardless of hours.",
      ]),
      div(),
      h2("When to change — the definitive signs"),
      p("Hours are a guideline; condition decides. Change the element when any of the following is true:"),
      ul([
        "The media has visibly loaded — you can see a distinct colour difference between a used element and a brand-new one of the same type.",
        "The media is wrinkled, crushed, or shows a tear or a puncture. Even a pinhole lets unfiltered air through.",
        "The element does not seat properly in the housing or feels loose with the housing closed.",
        "The compressor controller reports a rising intake restriction / dirty air filter alarm, or you can measure a higher pressure drop across the filter than when new.",
        "The element has been in service beyond the OEM maximum interval, even if it still looks clean. Paper and pleated media lose strength and efficiency with age.",
      ]),
      p("A useful trick: note the reading of the compressor's filter restriction indicator (or the differential pressure across the filter) at every service. A sudden, unexplained jump — say double the normal reading over a short period — is your earliest warning that something changed in the environment, such as construction nearby, and the filter is now loading rapidly."),
      div(),
      h2("What a clogged filter actually costs"),
      p("It is tempting to \"stretch\" an air filter to the next quarter. Here is what actually happens when you run a compressor on a heavily loaded or clogged filter:"),
      ol([
        "The intake is starved, so the compressor works harder to produce the same flow.",
        "Energy consumption climbs — treating a choked air filter effectively wastes power that shows up directly on your electricity bill.",
        "The compressor runs hotter, degrading the oil faster and closing in on the oil-change interval, which shifts the cost onto the oil side.",
        "In load/unload operation, the compressor runs longer cycles and cycles more often, putting extra wear on the motor, starter, and drive.",
        "If the filter loads to the point of bypass — and many filters have a bypass valve that opens under extreme restriction — unfiltered air enters the machine, defeating the entire purpose.",
      ]),
      p("Rule of thumb used by many plants: for every bar of extra pressure drop at the intake caused by a restricted filter, you pay roughly 1% of the compressor's rated power. For a 75 kW machine running 6000 hours a year at ₹9 per kWh, that is about ₹4 lakh a year of wasted electricity for a single bar of restriction. The filter that would have cost a few thousand rupees suddenly looks very cheap."),
      div(),
      h2("Buying the right replacement"),
      p("A filter is only as good as its media, its sealing, and its structural integrity. When you buy a replacement, check that it matches the OEM part on four things:"),
      ul([
        "Media grade — the filtration rating (e.g., micron / class) must match the original so airflow and cleanliness are not compromised.",
        "Diameter and height — the element must seat in the housing with the correct negative clearance.",
        "Sealing — the gasket profile must match so it seals under the housing's own clamping force.",
        "Structural element — the inner core must stand up to the pressure differential without collapsing at the end of life.",
      ]),
      p("Kenrax manufactures direct-fit replacements to these exact specifications for all the major screw compressor brands, so the part drops straight in out of the box. " + WA_LIST),
      div(),
      h2("The one-line summary"),
      p("Inspect the air filter on a fixed cycle, change it on condition, never let it reach the bypass point, and buy elements that genuinely match the OEM spec. That single checklist line protects your air end, your energy bill, and your production schedule."),
    ]
  )
);

// ---------------------------------------------------------------------------
// 2. When to Replace the Compressor Oil Filter (expanded)
// ---------------------------------------------------------------------------
blogs.push(
  entry(
    "when-to-replace-compressor-oil-filter",
    "When to Replace Your Compressor Oil Filter (and What Happens If You Don't)",
    covers["when-to-replace-compressor-oil-filter"],
    base["when-to-replace-compressor-oil-filter"].createdAt,
    [
      p("In a flooded screw compressor, the oil does far more than lubricate. It cools the air end, seals the running clearance between the rotors, and carries away wear particles and contaminants. The oil filter's job is to keep that oil clean for the entire interval between oil changes — a dirty oil filter quietly compromises all four functions."),
      div(),
      h2("What the oil filter protects"),
      p("Every filter in a compressor has a reason to exist, and the oil filter's job is specific: to remove particulates from the oil so they do not circulate through the system."),
      ul([
        "Bearing surfaces and the rotor housing — particulate is abrasive and shortens air-end life.",
        "The air-oil separator — a clogged separator element is often traced back to contaminated oil.",
        "The oil cooler — dirty oil coats the heat exchanger with a varnish that reduces heat transfer, so the compressor runs hotter.",
        "Control and regulation components — sticking valves and solenoids are a classic symptom of contaminated oil.",
        "The minimum-pressure, check, and relief valves — these are precision components sensitive to debris.",
      ]),
      p("Replacing an oil filter is cheap. Replacing an air end because the lubrication path was starved or abraded is not. The filter is the cheapest component in the whole oil circuit and the one with the largest downstream liability."),
      div(),
      h2("The standard replacement interval"),
      p("Most OEMs specify the oil filter change at the same interval as the oil change, commonly every 1000, 2000, or 4000 operating hours depending on the compressor, its duty, and the environment. Two rules matter more than the number itself:"),
      ol([
        "Always change the oil filter together with each oil change. Even if the filter looks fine, a fresh fill deserves a fresh element and the old element is full of particles from the previous interval.",
        "Whenever you repair a compressor after a mechanical failure, change the oil and oil filter again after the first few hours of running, because the failure releases debris into the oil.",
      ]),
      div(),
      h2("Signs the oil filter is or was failing"),
      p("Many of the symptoms almost read like an oil problem, because a clogged filter and contaminated oil interact. Watch for these:"),
      ul([
        "A rising differential pressure across the oil filter — the compressor controller or a gauge will show increasing resistance as the element loads.",
        "Higher discharge temperature — restricted oil flow means less cooling and sealing, so the air end runs hotter than its healthy baseline.",
        "Low oil pressure at the gauge — the filter adds resistance to the oil circuit, dropping the pressure available at the bearings.",
        "Recommending earlier oil changes — if your oil analysis shows rapid contamination between changes, a failing by-passing filter may be letting particles through.",
        "Oil bypass opened — many oil filters carry a bypass valve intended only for cold-start. If the element loads enough to hold the bypass open during normal running, unfiltered oil circulates and the filter is effectively dead.",
      ]),
      div(),
      h2("The bypass problem deserves its own spotlight"),
      p("Almost every screw compressor oil filter has a bypass valve so that lubrication is never completely lost, even with a fully blocked filter. That safety valve is a good thing at cold start and during a genuine emergency. But it hides a very dangerous normal-running condition: when the element loads up and the bypass cracks open, the compressor keeps running sweetly while entirely unfiltered oil circulates. By the time anyone sees a warning, the damage is done."),
      p("This is precisely why the oil filter must be replaced on interval — not on visible symptoms. Unlike an air filter, you cannot open the housing and \"look\" at the element, and by the time the symptoms arrive, the filter has already failed at its job."),
      div(),
      h2("Cheap oil filters are a false economy"),
      p("The oil filter specification includes more than the can's thread pattern. It covers the micron rating of the media, the dirt-holding capacity, the burst strength, and the anti-drainback behaviour on start-up. A cheap filter that looks identical can have less media, coarser filtration, or a weaker bypass door — and none of that shows up in a photo."),
      p("When you buy replacements, ask three questions: Does the media rating match the OEM spec? Does the filter have the same bypass setting? Is the construction (media, core, gaskets) rated for the compressor's oil flow and pressure? Kenrax manufactures its oil filters to the OEM specification for exactly these parameters. " + WA_LIST),
      div(),
      h2("Practical checklist for your next service"),
      ol([
        "Note the baseline differential pressure across the oil filter when you install a new element.",
        "Change the oil filter at every oil change, without exception.",
        "Record filter restriction readings at each service so you can spot abnormal loading.",
        "After any mechanical repair or air-end event, run the machine briefly, then change oil and oil filter again to flush debris.",
        "Buy filters matched to the OEM media spec, not just \"compatible threads\".",
      ]),
      div(),
      h2("The one-line summary"),
      p("Change the oil filter on interval, always with the oil change, and never buy on thread size alone. The oil filter is a few thousand rupees of protection for a component set worth dozens of times more."),
    ]
  )
);

// ---------------------------------------------------------------------------
// 3. 5 Signs Separator Needs Replacing (expanded)
// ---------------------------------------------------------------------------
blogs.push(
  entry(
    "5-signs-your-air-oil-separator-needs-replacing",
    "5 Signs Your Air-Oil Separator Needs Replacing",
    covers["5-signs-your-air-oil-separator-needs-replacing"],
    base["5-signs-your-air-oil-separator-needs-replacing"].createdAt,
    [
      p("The air-oil separator is the component that removes the oil mist from the compressed air before it leaves the compressor. When it works, you never notice it. When it stops working, you notice it in three places at once: higher oil consumption, fouled downstream equipment, and pressure loss across the separator."),
      p("Here are the five signs that your separator element has reached the end of its life, what each one actually means, and what to do next."),
      div(),
      h2("1. Your oil consumption has crept up"),
      p("A healthy separator returns nearly all the oil it captures back to the sump via the scavenge line. The tiny amount that escapes is expected and harmless. When the element starts to saturate — loaded with fines, varnish, or moisture — it can no longer coalesce the oil droplets efficiently, and oil starts leaving with the air."),
      p("The classic symptom is the top-up bottle coming out between services when it never used to, or the separator drain sight-glass filling faster than expected. A compressor that was fine on oil at change time but needs regular top-ups is a compressor with a separator problem until proven otherwise."),
      p("Why it matters beyond the oil bill: oil that leaves with the air is oil that is not in the sump, so the oil level drops, the compressor works hotter, and the machine enters a downward spiral of temperature and wear."),
      div(),
      h2("2. Oil is visible in or around downstream equipment"),
      p("Look at the air receiver, the air dryer, the filters, or the compressed air line drops. If you see oily film, dark residue on the inside of piping, or oil in the condensate drain, the separator is letting oil past."),
      ul([
        "Check the drain of the air receiver and the condensate traps — oil in the water is a strong signal.",
        "Check downstream coalescing filters — a premature burst or discoloured downstream filter can indicate excess oil loading.",
        "Check tools and cylinders that use the air — oily air shortens seals and fouls pneumatic valves.",
      ]),
      p("For food, pharma, electronics, and other quality-sensitive plants, oil in the air stream is not just a maintenance nuisance, it is an air-quality compliance failure. ISO 8573-1 class tolerance for residual oil is measured in parts per million — an aged separator can go from conforming to failing in a few hundred hours."),
      div(),
      h2("3. The pressure drop across the separator is rising"),
      p("The separator sits between the air end and the point of use, so an ageing or loaded element adds resistance. Many compressors log the separator pressure drop, and a sudden rise is one of the most reliable early warnings there is."),
      p("The consequences of a rising pressure drop are proportional and mechanical: the compressor has to work harder to maintain outlet pressure, so it draws more power; the pressure ratio across the air end rises; and the additional pressure differential across the separator can increase oil carryover. You are paying for a restriction that is doing nothing useful."),
      div(),
      h2("4. You are replacing it well outside the OEM interval"),
      p("Separator life is measured in service hours, and the OEM interval — commonly 2000 to 4000 hours depending on the machine and duty — exists for a reason. Like the oil filter, the separator degrades in ways you cannot see from outside. The media becomes saturated with sub-micron particles and the coalescing performance decays gradually, long before any alarm triggers."),
      p("A separator that has exceeded its interval is operating on borrowed time and borrowed performance. Replace it on interval, not on symptom. The plant that 'never really changed separators much' is usually the plant that quietly buys more oil and more downstream filters than its books show."),
      div(),
      h2("5. The compressor runs hotter or cycles more"),
      p("A loaded separator raises the overall system pressure the air end must produce. Compressors respond to that by working harder, running hotter, and tripping into higher load cycles. If you track second-stage temperature or the pressure at the discharge, you will often see the drift days before the alarm."),
      p("The fix for all five signs is the same — replace the separator element with one that genuinely matches the OEM specification for media, dimensions, and sealing. It is a half-hour job on a scheduled shutdown and it restores oil consumption, pressure drop, and downstream air quality to normal."),
      div(),
      h2("How Kenrax separators fit into the fix"),
      p("Kenrax manufactures air-oil separator elements to the OEM specification for each compressor model, so the replacement matches the exact coalescing media grade, the dimensional fit, and the sealing arrangement of the original part. You order by your OEM part number and the element drops straight in. " + WA_LIST),
      div(),
      h2("The one-line summary"),
      p("Watch oil consumption, downstream oil, separator pressure drop, interval over-run, and running temperature. Any one of the five is enough to schedule a replacement — all five mean it is already overdue."),
    ]
  )
);

// ---------------------------------------------------------------------------
// 4. Hydraulic Return Line Filters (expanded)
// ---------------------------------------------------------------------------
blogs.push(
  entry(
    "hydraulic-return-line-filters-guide",
    "Hydraulic Return Line Filters: The Complete Guide for Plant Engineers",
    covers["hydraulic-return-line-filters-guide"],
    base["hydraulic-return-line-filters-guide"].createdAt,
    [
      p("Every hydraulic system quietly produces contamination. The pump sheds wear particles, seals shed elastomer bits, and the fluid itself soaks up moisture and sludge over its life. In a closed-loop hydraulic circuit, there is exactly one place all of that debris flows back to the reservoir: the return line."),
      p("This guide explains what return line filters do, why they are easy to under-specify, how to size and monitor them, and when to change the element."),
      div(),
      h2("Where the return line filter sits and what it catches"),
      p("In a typical circuit, the pump draws clean fluid from the reservoir, pushes it through the control valves and cylinders, and the spent fluid returns to the reservoir through the return line. The return line filter sits in that return path, catching whatever the components shed on the way back."),
      ul([
        "Pump wear debris — the single largest source of contamination in most systems.",
        "Valve and solenoid wear material.",
        "Elastomer particles from seals, hoses, and o-rings.",
        "Soft contaminants — sludge, varnish, and the by-products of oil degradation.",
        "Ingress from the reservoir — dust, moisture, and anything that enters on top-up.",
      ]),
      p("Because the return line carries full flow back to the reservoir, the filter runs at the full system return flow rate and, on the return stroke, at actuator velocity spikes. Sizing a return filter is therefore about flow and housing capacity as much as it is about filtration rating."),
      div(),
      h2("Why filtration rating (beta ratio) matters"),
      p("Filters are rated by their beta ratio — a measure of how many particles of a given size the element removes. A Beta(x)=75 element removes 98.7% of particles of size x, and 75/76 of them are gauged. The 'micron' number on a can is shorthand for that size x."),
      ul([
        "Coarser elements (e.g., 25 micron) are common on heavy-duty mobile systems where flow is large and cost matters.",
        "Finer elements (e.g., 10 micron or below) protect proportional valves and servo systems, which are sensitive to fine contamination.",
        "A return line filter that is too coarse lets particles circulate that the pump, valves, and cylinders then grind and re-circulate.",
      ]),
      p("Never down-spec the media to save money on a filter. The pump and valves are graded to expect a certain cleanliness class. Every step coarser than the specification shifts the wear load onto the very components you are trying to protect."),
      div(),
      h2("Sizing: flow, viscosity, and cold start"),
      ol([
        "Match the housing to the full return flow rate, not the average. Return flow spikes on extend strokes.",
        "Account for oil viscosity — thicker oil at cold start creates a higher pressure drop across the element.",
        "Check the burst pressure of the housing — the return line can see spikes from actuator transients.",
        "Consider the filtration architecture of the whole system (suction vs pressure vs return filters) so the return filter covers what the others do not.",
      ]),
      p("A well-chosen return line filter has plenty of dirt-holding capacity so that elements last a full service interval even in a dirty system. An undersized housing forces premature element changes and, worse, may push the filter's bypass open between changes."),
      div(),
      h2("The indicator: your early-warning system"),
      p("Most return line filters carry a visual (and often electrical) clogging indicator that measures differential pressure across the element. That indicator is the single most useful maintenance signal in the hydraulic system:"),
      ul([
        "Learn the normal 'new element' reading and record it at every change.",
        "Watch the trend between services, not just the green/red zone.",
        "Act on electrical alarm contacts — wire them to the PLC so a blocked return filter trips a warning, not a failure.",
        "Remember the bypass: if the return line filter has a bypass, a blocked element means unfiltered fluid returns to the reservoir and circulates.",
      ]),
      div(),
      h2("Common failure patterns and their root causes"),
      ul([
        "Elements blocking 'too fast' — usually a shift in operating conditions (new spool wear, a failing pump, moisture ingress) rather than a defective filter. Investigate the source, not just the symptom.",
        "Cold-start shudder or noise — high viscosity over a cold element. Consider a cold-start bypass or a coarser pre-spec'd element.",
        "Return line filter collapsed or burst housing — a blocked element plus cold high-viscosity flow can spike pressure. Check the burst rating and the bypass.",
        "Metal particles found at change-out — the element caught them, but something upstream is shedding them. Take a wear sample for oil analysis.",
      ]),
      div(),
      h2("Return filter maintenance checklist"),
      ol([
        "Change the element at the OEM interval, on condition from the indicator, or after a contamination event — whichever comes first.",
        "Record the new-element differential pressure at every change to build a baseline.",
        "When a failure caused debris, change the element, flush, and change again after a short soak run.",
        "Never mix O-rings or seals of different materials — use the correct elastomer for the fluid.",
        "Buy elements with a certified beta ratio, not just 'compatible' hardware.",
      ]),
      div(),
      h2("The one-line summary"),
      p("The return line filter is the system's collection point for everything upstream sheds. Size it for full return flow, keep a fine enough media to protect the valves, trust the clogging indicator, and change on interval — it is the cheapest insurance your hydraulic circuit has. Kenrax manufactures return line filter elements and housings to OEM specification, matched to your part number. " + WA_LIST),
    ]
  )
);

// ---------------------------------------------------------------------------
// 5. How to find the right compressor filter (expanded)
// ---------------------------------------------------------------------------
blogs.push(
  entry(
    "how-to-find-right-compressor-filter",
    "How to Find the Right Compressor Filter: Part Numbers, Cross-Referencing, and Fitment",
    covers["how-to-find-right-compressor-filter"],
    base["how-to-find-right-compressor-filter"].createdAt,
    [
      p("The most common buyer problem we hear is not price — it is getting the right part the first time. A compressor nameplate, a worn part number, and a service history between you and the correct filter. This guide walks through exactly how to identify the right filter, what the part numbers mean, and how cross-referencing works so you never install the wrong element."),
      div(),
      h2("Where to find your part number"),
      p("Every compressor has at least three honest sources for the correct part number:"),
      ol([
        "The compressor nameplate and manual — the manual's spare parts list gives OEM numbers for air filter, oil filter, separator, and every service item. This is the authoritative source.",
        "The filter element itself — air filters usually carry a printed part number on the media or outer cartridge; oil filters and separators print on the can, base, or gasket. Wipe off the oil and look for a debossed or stencilled number.",
        "Your maintenance history — the last invoice or service record for that machine lists exactly what was installed and when.",
      ]),
      p("If the number is worn away, the next fallback is the geometry: measure the outer diameter, height, and the sealing arrangement, and note the OEM brand of compressor. A competent cross-reference can usually reconstruct the correct part from those three dimensions."),
      div(),
      h2("What the OEM part number actually encodes"),
      p("OEM part numbers are rarely random. On most filters they encode, in some order, the product family, the media grade or application, and a unique variant. Two examples of how that matters:"),
      ul([
        "A number that differs only in the final digit or letter is often a different variant — clean vs heavy-duty media, or a different sealing arrangement. Do not assume the seller will catch it.",
        "Interchange/renumbered numbers: manufacturers renumber parts over time. The superseded number may be listed on the element or in the manual's cross-reference table.",
      ]),
      p("This is exactly why 'compatible with' lists exist: a quality supplier maintains a cross-reference from each OEM number to the correct replacement element, including superseded numbers."),
      div(),
      h2("How cross-referencing works in practice"),
      p("A genuine cross-reference is a technical match, not a guess by similarity. When you give a supplier your OEM number, they check four things before saying 'yes, matches':"),
      ol([
        "Media — same filtration rating and media construction (e.g., cellulose vs synthetic, same micron/class).",
        "Dimensions — same outside diameter, length, and any lead-in or pilot diameters.",
        "Sealing — same gasket or seal profile and the same compression height.",
        "Function — same duty. A separator and an air filter of similar size are different products; a cross-reference that doesn't distinguish them is worthless.",
      ]),
      p("What a good supplier does NOT do is claim 'fits all brands' or match only the thread/overall height. A filter's performance lives in the media and the sealing, not the silhouette."),
      div(),
      h2("The 9-character recipe for finding your filter"),
      p("Have this string ready whenever you text or call a supplier — it takes 30 seconds and eliminates nearly every wrong-part mishap:"),
      bq("Compressor brand + model + kW, then OEM part numbers for air filter / oil filter / separator, then any info from the existing element (photos work great on WhatsApp)."),
      p("With that one string, a supplier who maintains a real cross-reference system can confirm fitment before you order. If the supplier needs only the compressor model and 'send a photo' — good sign. If they need nothing at all — be suspicious."),
      div(),
      h2("Common part-number mistakes and how to avoid them"),
      ul([
        "Confusing the air filter and separator number — different products, similar packaging. Photograph the element you are replacing.",
        "Using a superseded number without checking the current variant — ask for the current OEM number to match.",
        "Buying 'compatible' on looks alone — two filters can look identical and have different media grades. Get the media spec.",
        "Assuming the number on a competitor's cross-reference list is verified — even reputable aftermarket lists contain errors; confirm against the manual where possible.",
      ]),
      p("The discipline that saves the most money and time is simple: write down the part numbers from the manual into the machine's logbook, and re-verify against the element itself at every change. Over a few services, you build an accurate parts list per machine that makes the next order a text message."),
      div(),
      h2("Ordering from Kenrax"),
      p("Kenrax maintains a cross-reference for the major screw compressor brands — Atlas Copco, Ingersoll Rand, Elgi, Kaeser, Chicago Pneumatic, Kirloskar, Gardner Denver, Sullair and others. Send us the OEM numbers from your manual or a photo of the element, and we confirm the match before dispatch. " + WA_LIST),
      div(),
      h2("The one-line summary"),
      p("Find the OEM numbers on the manual and the element, give the supplier the full 'brand + model + OEM numbers' string, and only accept a cross-reference that has verified media, dimensions, and sealing. The right filter the first time is cheaper than any filter that is slightly wrong."),
    ]
  )
);

// ---------------------------------------------------------------------------
// 6. NEW — Compressor Service Kit checklist (1000/2000/4000 hours)
// ---------------------------------------------------------------------------
blogs.push(
  entry(
    "compressor-service-kit-1000-2000-4000-hours",
    "The Complete Screw Compressor Service Schedule: 1000, 2000, and 4000 Hour Kits",
    covers["when-to-replace-compressor-oil-filter"],
    "2026-08-20T00:00:00Z",
    [
      p("A screw compressor that is serviced on a schedule is a boring, predictable, low-cost machine. A compressor serviced on failure is a series of surprises. This guide lays out the three service levels used across the industry — the 1000, 2000, and 4000 hour kits — and what each one should contain, so your next service meets the OEM intent instead of the minimum order size."),
      div(),
      h2("Why the intervals exist"),
      p("The service intervals are not arbitrary. Each interval corresponds to how fast the different components degrade under normal use:"),
      ul([
        "Oil and oil filter degrade with hours and temperature — hence a service at 1000, 2000, or 4000 depending on the duty and the OEM design.",
        "The air filter loads with hours in the ambient — roughly matching the oil interval in clean rooms but far shorter in dusty ones.",
        "The separator loads with hours of oil contact — its interval is often double the oil interval, at the 2000 or 4000 hour mark.",
        "Consumables — gaskets, belts, valves, and hoses — live on calendar time as much as operating hours.",
      ]),
      p("The exact hours for your machine are in the OEM manual. Treat the figures below as the industry-standard skeleton that your manual fills in."),
      div(),
      h2("The 1000-hour / first-service kit"),
      p("The 1000-hour service is the compressor's first full service and the regular light service in many fleets. Typical contents:"),
      ul([
        "Compressor oil — drain, flush, and refill with the OEM viscosity and grade.",
        "Oil filter element.",
        "Air filter element (inspect at minimum — replace if any loading).",
        "Inspect the intake valve, minimum-pressure valve, and unloader operation.",
        "Torque-check oil and air connections; look for leaks.",
        "Inspect belts, coupling, and motor mounts; check drive alignment.",
      ]),
      p("Operators running in very dusty environments often shorten the air filter attention to the 500-hour or even 250-hour mark, because the air filter is the cheapest component and the most exposed to the environment."),
      div(),
      h2("The 2000-hour / mid-level kit"),
      p("At 2000 hours most compressors graduate to a fuller service:"),
      ul([
        "All of the 1000-hour items.",
        "Air-oil separator replacement — most OEMs put the separator change at the 2000-hour mark (or at every second oil change).",
        "Inspect and clean the oil cooler and aftercooler fins.",
        "Inspect the safety valve, check the minimum-pressure valve opening.",
        "Check the thermostat / temperature control operation.",
        "Inspect hoses, clamps, and the flexible coupling for age cracks.",
        "Drain the receiver and check the condensate traps.",
      ]),
      p("This is also the sensible checkpoint for oil analysis: a sample at 2000 hours tells you whether the oil and machine are healthy, and gives you the trend baseline for the next intervals."),
      div(),
      h2("The 4000-hour / major service kit"),
      p("At the 4000-hour mark the compressor gets its major annual-style service:"),
      ul([
        "All of the 2000-hour items.",
        "Air-oil separator replacement (if not already done at 2000).",
        "Inspect the air end breathing and listen for abnormal noise; check vibration.",
        "Check bearing clearances where the design allows scheduled inspection.",
        "Replace belts if any sign of cracking or glazing.",
        "Inspect and, if required, clean or replace the intake filter housing seals.",
        "Check the motor — insulation, bearings, and starter contacts.",
        "Update the machine history: hours, oil analysis, and any anomalies.",
      ]),
      p("Many OEM maintenance plans anchor the 4000-hour service to the air end's major inspection cycle. If your compressor is approaching its first 4000-hour service, budget both time and spares, and schedule it — skipping a major service is how medium failures become catastrophic ones."),
      div(),
      h2("Building a service kit so the shutdown is never short"),
      p("The most common reason a planned service turns into a production outage is the absence of a ready kit. Prepare in advance:"),
      ol([
        "Make a per-machine list from the OEM manual: oil quantity and grade, oil filter, air filter, separator, and any consumables.",
        "Cross-reference each item to a current part number (see our guide on finding the right filter).",
        "Stock one complete kit per machine before the interval arrives.",
        "At the kit change, log the hours, the differential pressure baselines, and the actual numbers fitted.",
        "Check the kit against hours when the compressor rolls over — many fleets run a 'service due' reminder at the hours marker.",
      ]),
      p("A compressor kit is not a luxury purchase; it is the inventory that keeps a scheduled shutdown a four-hour job instead of a four-day one."),
      div(),
      h2("Service kit contents at a glance"),
      ul([
        "1000 hours: oil, oil filter, air filter (inspect), belt & valve inspection.",
        "2000 hours: add separator, cooler clean, condensate traps, valve checks.",
        "4000 hours: add air-end/motor inspection, vibration check, full consumable refresh, history update.",
      ]),
      div(),
      h2("How Kenrax supports your schedule"),
      p("Kenrax makes the air filters, oil filters, and separators that go in 1000/2000/4000-hour kits for all the major screw compressor brands, built to the OEM media specification and cross-referenced to your part numbers. Order the full kit on WhatsApp and we confirm fitment before dispatch. " + WA_LIST),
      div(),
      h2("The one-line summary"),
      p("Service at the OEM intervals, carry the three-level kit contents, and treat the 4000-hour service as a planned major event. A compressor on a calendar is cheap to run; a compressor on a crisis is not."),
    ]
  )
);

// ---------------------------------------------------------------------------
// 7. NEW — Why oil carryover ruins downstream equipment
// ---------------------------------------------------------------------------
blogs.push(
  entry(
    "why-oil-carryover-ruins-downstream-equipment",
    "Why Oil Carryover Ruins Downstream Equipment (and How to Stop It)",
    covers["5-signs-your-air-oil-separator-needs-replacing"],
    "2026-08-28T00:00:00Z",
    [
      p("Oil carryover is the silent tax on compressed air. It does not announce itself with an alarm — it shows up weeks later as fouled dryers, clogged filters, gummed valves, discoloured products, and a compressed air bill that quietly grows. This guide explains what oil carryover is, what it costs, and how to eliminate it."),
      div(),
      h2("What oil carryover actually is"),
      p("In an oil-injected screw compressor, the compressed air leaving the air end is an oil-laden mixture — a fine mist of oil droplets suspended in the air at full discharge pressure. The air-oil separator's job is to coalesce that mist back into droplets and recover it to the sump. 'Oil carryover' is the residual oil that escapes anyway, measured in parts per million (ppm) of the delivered airflow."),
      ul([
        "A healthy system with a fresh separator typically carries over a very low ppm — effectively a thin film on the inside of a long pipe run over a year.",
        "An ageing or saturated separator lets the carryover climb by orders of magnitude.",
        "Downstream equipment is designed to tolerate a design ppm — not the actual figure from a failing separator.",
      ]),
      p("The relationship between separator age and carryover is not linear. It is a curve that stays low for most of the element's life and then climbs sharply near the end. That is why interval-based replacement catches problems that hour-based monitoring often misses."),
      div(),
      h2("What it does to each downstream component"),
      p("Oil in the air stream does not stay 'in the air'. It deposits everywhere the air goes."),
      ul([
        "Air receiver and piping — oil films the internal surfaces, and the film hardens into varnish over heat cycles. That varnish never fully comes off without chemical cleaning.",
        "Air dryers — oil coats the heat exchanger and the separator internals, cutting heat transfer and loading the dryer's own filter. Refrigerated dryers lose performance you then pay for in energy.",
        "Downstream filters — coalescing and particulate filters load up with oil they were never designed to hold, so elements need changing far more often and the differential pressure across them climbs.",
        "Pneumatic valves and actuators — oil mixes with the elastomer seals, causing swelling, sticking, and premature rubber failure. Solenoids stick; cylinders creep.",
        "Pneumatic tools and instruments — oil coats air tool internals and contamifies small orifices in regulators and flow meters.",
        "Product and process — in food, pharma, chemical, and paint plants, even trace oil can contaminate product, fail air-quality testing, and trigger recall-grade incidents.",
      ]),
      div(),
      h2("The cost side of carryover"),
      p("The line items are mundane but they add up faster than any single bill:"),
      ol([
        "Extra oil consumption — top-ups between changes.",
        "Shorter downstream filter and dryer service life.",
        "More frequent condensate treatment and drainage cleanup.",
        "Pneumatic component repair and replacement.",
        "Energy — a loaded separator raises system pressure and power draw.",
        "Risk — rejected product and failed air quality audits carry costs that dwarf all the rest.",
      ]),
      p("In most plants, the single cheapest way to attack all of these simultaneously is to fix the source: keep the separator healthy, on interval, with the correct media."),
      div(),
      h2("How to measure carryover without an instrument"),
      p("You do not need a lab to tell you carryover is climbing. These shop-floor signals correlate strongly with separator condition:"),
      ul([
        "Darker condensate or an oily film floating in the receiver drain.",
        "Downstream filter elements that look wet or discoloured long before their service interval.",
        "An oily sheen on the inside of piping when you open a coupling.",
        "A compressor that needs oil top-ups between changes (oil is going somewhere).",
        "Fouled dryer condensate traps that need constant cleaning.",
      ]),
      p("If you do have a lab or instrument, sample the air at the receiver and test for oil. A single measurement is a snapshot; two measurements six months apart give you the trend, which is worth far more."),
      div(),
      h2("Where the separator fits, and where it doesn't"),
      p("The separator is the primary oil-removal stage, and keeping it healthy is the biggest lever. But it is not the only one. A complete oil-carryover defence at the system level is:"),
      ol([
        "Change the separator on interval with the OEM-spec media.",
        "Keep the scavenge/return line and its orifice clean — if the separator recovers oil poorly, even a new element carries over.",
        "Keep the oil clean and at the right level — dirty or over-filled oil loads the separator.",
        "Watch the sump oil level and the discharge temperature as the canary signals.",
        "Confirm downstream filtration matches the plant's ISO 8573 air quality class.",
      ]),
      div(),
      h2("Prevention over cure"),
      p("The cheapest point to act is always before the separator saturates. Spec the element to the OEM media, change it at interval, and keep the scavenge path clear. If you have done all of that and carryover still climbs, the conversation moves to the machine itself — oil level, temperature, and air end condition — rather than to the downstream cleanup bill."),
      div(),
      h2("The one-line summary"),
      p("Oil carryover leaves through one component and damages everything downstream. Fix the source first: a healthy, correct-spec separator on an honest schedule. Kenrax supplies OEM-spec separators cross-referenced to your part number. " + WA_LIST),
    ]
  )
);

// ---------------------------------------------------------------------------
// 8. NEW — The cost of a clogged air filter
// ---------------------------------------------------------------------------
blogs.push(
  entry(
    "cost-of-a-clogged-air-filter",
    "The Real Cost of a Clogged Air Filter: Energy, Downtime, and Repairs",
    covers["air-filter-maintenance-checklist"],
    "2026-09-05T00:00:00Z",
    [
      p("Air filters are cheap, and that is precisely why they are so commonly neglected. A plant manager will fight for a budget line on an air end rebuild but wave away a few thousand rupees on a filter. This guide puts hard numbers on what that wave-away actually costs — in energy, in downtime, and in the repair bills that quietly accumulate at the far end."),
      div(),
      h2("How a clogged filter breaks the compressor's economics"),
      p("A screw compressor is a fixed-displacement machine: it pumps a near-constant volume of air at a given speed. If the intake is restricted, the machine does not 'give up and rest' — it keeps trying to pump the same volume against a higher effort. That effort shows up as higher power draw, higher temperatures, and eventually as mechanical stress."),
      p("The mechanism is simple: a clogged air filter raises the pressure drop across the intake. The compressor compensates by working against a higher pressure ratio, which means the rotors have to carry a heavier load and the air end has to reject more heat every revolution."),
      div(),
      h2("The energy arithmetic"),
      p("Here is the back-of-envelope calculation that makes the cost concrete. For a compressor at nominal conditions, the power consumption scales roughly with the pressure ratio it has to produce:"),
      ul([
        "Take a 75 kW compressor running 6000 hours a year, two shifts, five days a week.",
        "Assume the intake restriction from a loaded filter adds roughly 1% of rated power. That is about 0.75 kW.",
        "At ₹9 per kWh and 6000 hours, the waste is roughly ₹40,000–50,000 per year.",
        "Double the restriction to 2% — common near the end of a real element's life — and the waste doubles with it.",
      ]),
      p("The exact figure depends on your duty cycle and tariff, but the shape of the answer is the same everywhere: a severely loaded air filter is individually costing more than the replacement element that would have fixed it, every single year. The filter is literally free by comparison."),
      p("Many compressors also carry a service alarm for the air filter restriction precisely because the OEMs know this. An ignored service light is just a way of paying the energy bill twice."),
      div(),
      h2("The temperature and oil side-effects"),
      ul([
        "A restricted intake makes the machine run hotter, so the oil oxidises faster and the oil-change interval effectively shortens.",
        "Hotter running also loads the oil cooler, reducing its margin before the 'high temperature' alarm trips in summer.",
        "In load/unload machines, restriction changes the pressure ratio, lengthening load cycles and wearing the motor, starter, and drive more through extra starts.",
        "Hotter oil attacks seals and hoses, shortening component life across the whole machine.",
      ]),
      p("None of these show up as a line item on the electricity bill, but together they drag the whole compressor toward earlier, bigger repairs."),
      div(),
      h2("The catastrophic end: filter bypass and dust ingestion"),
      p("Most air filter housings have a bypass mechanism that opens if the element becomes so blocked that the differential pressure is extreme. Its purpose is to protect against a fully starved intake. But a bypass that opens during normal running is a disaster in slow motion: it lets unfiltered ambient air into the compressor."),
      ul([
        "Dust is abrasive at rotor clearances — scoring begins the moment bypass air arrives.",
        "The wear particles then contaminate the oil, loading the oil filter and separator.",
        "What started as a 'we'll stretch the air filter' decision ends as an air end overhaul.",
      ]),
      p("The bypass is fundamentally a pressure switch, not a cleanliness guarantee. The only way to keep unfiltered air out of the machine is to change the element before it ever gets to bypass conditions."),
      div(),
      h2("The downtime component"),
      p("Every minute a compressor is down is production lost, and production time is the most expensive unit in the plant. There are two very different flavours of downtime around this problem:"),
      ol([
        "Planned: a 15-minute filter change during a scheduled shutdown. Cost: near zero.",
        "Unplanned: the machine trips or an alarm forces a stop mid-shift because a filter was stretched past its limit. Cost: the production hour, the transport of the part, the overtime, and the supervision.",
      ]),
      p("A filter occasionally reaching end-of-life between planned services is normal. A filter stretching from interval to interval while production 'orders it later' is how every unplanned outage happens."),
      div(),
      h2("The maintenance practice that fixes it"),
      ol([
        "Inspect the air filter on a 250-hour or monthly cycle (100 hours in dusty environments).",
        "Change on condition — visibly loaded, damaged, restriction alarm, or exceeded maximum interval.",
        "Record restriction at every change to build your machine's baseline trend.",
        "Stock the element before the interval arrives, keyed to the machine's cross-reference card.",
        "Never clean and reuse elements — the media is damaged by blowing or washing, and the fine particles embedded in it negate the cleaning.",
      ]),
      div(),
      h2("The one-line summary"),
      p("A clogged filter costs more in energy per year than its own replacement price, drives temperature and oil degradation, and can end in an air end overhaul past bypass. Replace on interval and on condition — it is the highest-return maintenance decision in the compressor bay. Kenrax makes the OEM-spec air filters, oil filters, and separators for every major brand. " + WA_LIST),
    ]
  )
);

// ---------------------------------------------------------------------------
// 9. NEW — Air filter vs oil filter vs separator (whole-system guide)
// ---------------------------------------------------------------------------
blogs.push(
  entry(
    "air-filter-vs-oil-filter-vs-separator",
    "Air Filter vs Oil Filter vs Separator: The Whole Service System, Explained",
    covers["hydraulic-return-line-filters-guide"],
    "2026-09-18T00:00:00Z",
    [
      p("Every screw compressor has three consumable filters worth understanding — the air filter, the oil filter, and the air-oil separator. They work together to protect the machine and the air it delivers, and each fails differently. If you know what each one does, where it sits, and what its failure looks like, you can run a compressor with almost no surprises."),
      div(),
      h2("The three lines of defence"),
      p("Think of the compressor as two circuits — an air circuit and an oil circuit — with the separator as the point where they meet."),
      ul([
        "The air filter guards the intake: it cleans the air entering the air end. Its enemy is environmental dust.",
        "The oil filter guards the oil circuit: it clean the oil recirculating through the air end. Its enemy is wear particles and oil sludge.",
        "The air-oil separator guards the exit: it strips oil from the compressed air after compression. Its enemy is saturation by the very oil it is trying to recover.",
      ]),
      p("Each sits at a different place in the machine, faces a different contaminant, and has a different failure signature. Yet they share one strategic truth: all three are cheaper than the damage they prevent."),
      div(),
      h2("The air filter — first line"),
      p("Air comes in, gets filtered against dust, and enters the compression chamber."),
      ul([
        "Location: intake housing, ahead of the air end.",
        "Contaminant it catches: ambient dust, dirt, and particulates.",
        "Failure signature: rising restriction alarm, hot running, starved intake, and — at the extreme — bypassed unfiltered air.",
        "Replacement rhythm: on condition more than on interval; heavily environment-dependent.",
      ]),
      p("The air filter is the only one you can inspect visually. If you can see loading, and especially if the compress-room dust level is visible, change it. It is the cheapest element and the most environment-driven."),
      div(),
      h2("The oil filter — the circulation guard"),
      p("Oil circulates through the air end continuously, carrying heat and sealing the rotors. The oil filter cleans that recirculating oil."),
      ul([
        "Location: in the oil circuit, typically after the oil cooler, before the air end.",
        "Contaminant it catches: wear particles, carbon, and sludge carried in the oil.",
        "Failure signature: rising differential pressure, low oil pressure at the gauge, hot running, and bypassed unfiltered oil at the extreme.",
        "Replacement rhythm: strictly with the oil change on the OEM interval.",
      ]),
      p("You cannot 'inspect' the oil filter. Change it when the oil is changed, every time, without exception — the two go together because a contaminant-loaded element has no value to a fresh fill."),
      div(),
      h2("The air-oil separator — the last gate"),
      p("Compressed air leaves the air end at high pressure carrying an oil mist. The separator coalesces those droplets and returns the oil to the sump, releasing nearly oil-free air."),
      ul([
        "Location: in the discharge path from the air end, ahead of the aftercooler.",
        "Contaminant it catches: it does not 'catch' debris — it recovers oil mist from the air stream.",
        "Failure signature: rising oil consumption, oil in downstream equipment, climbing separator pressure drop, higher running temperature.",
        "Replacement rhythm: on the OEM interval, commonly 2000–4000 hours, or when symptoms appear.",
      ]),
      p("The separator is the component whose failure has the widest ripple: it costs oil, it fouls everything downstream, and it quietly degrades air quality you may be certified against."),
      div(),
      h2("How the three interact"),
      p("The filters are not independent. A failing air filter makes the machine run hotter, which degrades the oil, which loads the oil filter faster and pushes sludge into the separator. A separator that returns oil poorly leaves the sump low, which makes the machine run hotter still. It is one system wearing from three directions."),
      p("That interaction is why the professional habit is to treat the three as a kit: change all three on the compressor's service schedule and the whole machine stays in its design band. Mixing intervals — 'just the air filter this time' — is how imbalances creep in."),
      div(),
      h2("Reading your machine's 'vitals'"),
      p("With a little history, three indicators tell you the health of all three filters at a glance:"),
      ol([
        "Intake restriction — the air filter's report card.",
        "Oil filter differential pressure — the oil circuit's report card.",
        "Separator pressure drop and oil usage — the separator's report card.",
      ]),
      p("Log these at every service and you will see drift days before any alarm. You will also know exactly which element to blame when a symptom appears — which is the practical dividend of understanding the system."),
      div(),
      h2("Buying all three from one place has real advantages"),
      p("Lineage matters. If you buy the three service elements from one manufacturer that builds to the OEM spec, the cross-referencing is done once, the parts arrive together, and the compatibility is documented rather than assumed. Kenrax manufactures all three — air filters, oil filters, and separators — for the major screw compressor brands, each matched to the OEM part number and media spec. " + WA_LIST),
      div(),
      h2("The one-line summary"),
      p("Air filter guards the intake, oil filter guards the circulation, separator guards the exit. Treat them as a system serviced as a kit, log the three vital indicators, and the compressor will tell you exactly what it needs next."),
    ]
  )
);

// ---------------------------------------------------------------------------
// 10. NEW — Pressure drop explained
// ---------------------------------------------------------------------------
blogs.push(
  entry(
    "pressure-drop-compressed-air-systems",
    "Pressure Drop in Compressed Air Systems: A Practical Guide",
    covers["hydraulic-return-line-filters-guide"],
    "2026-09-20T00:00:00Z",
    [
      p("Pressure drop is the difference between the pressure the compressor produces and the pressure that actually reaches the point of use. Every plant lives with some of it. The difference between well-run plants and average ones is knowing where it comes from, how to measure it, and which drops are worth spending money to fix. This guide gives you the practical playbook."),
      div(),
      h2("Where pressure drop comes from"),
      p("Pressure drop is friction — the air rubbing against the inside of pipes, bends, valves, filters, dryers, and hoses as it moves. Four things drive it:"),
      ul([
        "Velocity: move air faster and friction climbs roughly with the square of the speed. This is why undersized pipe is the classic culprit.",
        "Length and routing: every metre of pipe, every bend, and every fitting adds a little resistance.",
        "Restrictions: filters, dryers, separators, and receiver outlets are deliberate restrictions with a pressure drop of their own.",
        "Cleanliness: a coated or blocked filter element adds restriction that was not in the design.",
      ]),
      p("The important mental model: pressure drop is energy expenditure. Every bar of pressure drop the compressor must overcome is paid twice — once in the compressor producing extra pressure, once in the plant paying for that extra power."),
      div(),
      h2("Why pressure drop is expensive"),
      p("The rule of thumb used across the industry: for every 1 bar of pressure drop that a compressor must compensate for, power consumption rises roughly 6–7% at the compressor."),
      p("Run the arithmetic for a 75 kW compressor with a system & times; pressure drop of 1.5 bar:"),
      ol([
        "Extra power demand: about 0.75 kW x 1.5 -> in the region of 1 kW of continuous load.",
        "At 6000 hours and ₹9/kWh, that is roughly ₹50,000–60,000 a year.",
        "And it is entirely avoidable in most cases.",
      ]),
      p("The money is not a single bill — it is spread invisibly across every machine the compressor feeds. That is why pressure drop is the least-examined line on the compressor's balance sheet, and one of the largest."),
      div(),
      h2("The 1-bar rule you can apply today"),
      p("A practical rule used by compressed air auditors: aim for total system pressure drop below 10% of the compressor's output pressure. For a 7–8 bar system, that means keeping the total drop under about 0.7–0.8 bar. If your discharge pressure is 7 bar, the goal is roughly 6.2+ bar at the tool."),
      p("If your system is well above the 10% figure, do not guess at the fix — measure it. The measurement method below costs nothing and takes an afternoon."),
      div(),
      h2("How to measure pressure drop (no instruments required)"),
      ol([
        "Use the gauge already on the compressor: it shows the discharge (after-compressor) pressure.",
        "Fit or borrow a test gauge at the farthest and heaviest points of use — e.g., at the end of the main header and at a critical machine.",
        "Run the plant under full production load.",
        "Record the compressor pressure and the pressure at the point of use at the same moment.",
        "The difference is your system pressure drop. Repeat at a quiet time and compare — the drop should fall, telling you how much is 'fixed restriction' versus 'flow-dependent'.",
      ]),
      p("If you find a large gap, walk the system: the cause is usually oversized machines choking a small pipe, an undersized regulator, or a filter that hasn't been changed."),
      div(),
      h2("The biggest lever: filters and separators"),
      p("Filters and dryers sit in the air stream precisely to remove things — and every hour they run, that removal costs pressure. The discipline that gives the best return:"),
      ul([
        "Keep filter elements fresh — an old element's differential pressure climbs as it loads, and downstream particulate/coalescing filter elements are the classic quiet offenders.",
        "Change on the element's clogging indicator, not on the calendar alone.",
        "Match the filter size to the actual flow — an undersized filter runs permanently throttled.",
        "Remember the separator inside the compressor: an aged separator adds restriction the compressor pays for continuously, even before it starts carrying over oil.",
      ]),
      p("Every plant engineer has a story of 'finding' half a bar by replacing an ancient filter that was well past its life. That half bar is pure savings, and it shows up on the next electricity bill."),
      div(),
      h2("Cheap fixes that pay for themselves"),
      ol([
        "Graph any obvious undersized sections of header or drop line — the single highest-return pipe change in most plants.",
        "Remove excessive bends and long-radius them where you can.",
        "Fit larger quick-release couplings at heavy-use points; small couplings throttle at high flow.",
        "Change compressor-side filters and separators on schedule.",
        "Re-balance load so no single machine alone creates a huge instantaneous draw.",
      ]),
      div(),
      h2("The flow-pressure relationship to remember"),
      p("Pressure drop rises with the square of flow. That means small improvements in flow discipline (reducing leaks, stopping breathing on oversized tools) produce disproportionate drops in pressure loss — one reason leak-fixing programs so often 'find' system pressure without changing any hardware. Fix the flow first, then the restriction."),
      div(),
      h2("The one-line summary"),
      p("Pressure drop is paid twice and measured rarely. Keep the total under about 10% of supply pressure, change filter and separator elements on schedule, and attack undersized pipe before anything else. Kenrax's OEM-spec filters and separators keep the restriction side of that equation as low as the design allows. " + WA_LIST),
    ]
  )
);

// ---------------------------------------------------------------------------
// 12. Kenrax vs Mann HUMMEL (competitor comparison)
// ---------------------------------------------------------------------------
const props = JSON.parse(fs.readFileSync("data/properties.json", "utf8"));
blogs.push(
  entry(
    "kenrax-vs-mann-hummel-filters",
    "Kenrax vs Mann HUMMEL: Choosing the Right Replacement Filter for Your Compressor",
    props["media.homepage.photo.3"].media[0],
    "2026-09-25T10:00:00.000Z",
    [
      p("Mann HUMMEL is one of the best-known filter brands in the world, and it enjoys genuine recognition in Indian compressor rooms. But for a plant that needs a replacement air filter, oil filter, or air-oil separator this month — not next quarter — the practical comparison is about fitment, lead time, and cost in the Indian market. This article compares Kenrax and Mann HUMMEL honestly, so you can decide what fits your operation."),
      div(),
      h2("Why the Mann HUMMEL comparison comes up"),
      p("Most compressor owners end up comparing these two brands for one of three reasons: their maintenance kit specifies a Mann part number they cannot get in time; they want a second source so they are never waiting on one supplier; or they want local custom labeling for their private label business. Those are all legitimate reasons, and they deserve a straight answer about the trade-offs."),
      div(),
      h2("The short version"),
      ul([
        "Fitment: both brands can supply a correct replacement — the difference is how the equivalence is verified. Kenrax cross-references the OEM or Mann part number and confirms fitment before you order.",
        "Availability: Kenrax manufactures in New Delhi and typically dispatches in 24–48 hours; Mann HUMMEL parts in India depend on distributor stock and import lead times.",
        "Pricing: Kenrax is priced for the Indian replacement market; Mann HUMMEL carries premium import pricing.",
        "Customization: Kenrax offers custom and white-label manufacturing; Mann HUMMEL is a fixed-line catalogue.",
        "Warranty: both stand behind their products; Kenrax covers every filter against manufacturing defects.",
      ]),
      div(),
      h2("How the cross-reference works"),
      p("The key discipline before buying any replacement — Kenrax or otherwise — is verifying equivalence on dimensions, media grade, and sealing. Here is the sequence Kenrax follows when you send a part number:"),
      ol([
        "You share the OEM part number or the Mann part number on WhatsApp or email.",
        "Kenrax matches it against a catalogue of 500+ part numbers for air filters, oil filters, and air-oil separators.",
        "Fitment is confirmed on dimensions, sealing surface, and media grade before any order is placed.",
        "You order only once the equivalent has been checked against your compressor.",
      ]),
      div(),
      h2("When Kenrax makes sense"),
      ul([
        "You need the filter this week, not in a month.",
        "You want a second source so you are never held up by one supplier.",
        "You are a dealer, distributor, or private-label buyer who wants custom numbering or white-label manufacturing.",
        "Your compressor uses a legacy or discontinued OEM part number that the brand no longer stocks.",
      ]),
      div(),
      h2("When the original brand makes sense"),
      ul([
        "You are under a service contract that mandates original-brand consumables.",
        "Your maintenance policy is strictly original-parts-only.",
        "Change-interval or warranty conditions from your OEM require factory-brand elements.",
      ]),
      div(),
      h2("What to send us"),
      p("If you would like a Kenrax quote, send your part-number list on WhatsApp. Include the compressor brand and model if you have it — Kenrax confirms fitment and pricing, usually within the same working day, and ships from Delhi within 24–48 hours."),
      div(),
      h2("The one-line summary"),
      p("Both brands can supply a correct part; the real differences are lead time, price, and how far a supplier will go to verify fitment for you. Kenrax competes on the first two and is explicit about the third. " + WA_LIST),
    ]
  )
);

fs.writeFileSync(
  "data/blogs/blogs.json",
  JSON.stringify(blogs, null, 2) + "\n",
  "utf8"
);
console.log("blogs.json written:", blogs.length, "blogs");
blogs.forEach((b) =>
  console.log(`- ${b.slug} (${b.content.length} blocks)`)
);