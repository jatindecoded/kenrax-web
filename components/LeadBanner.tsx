"use client";

import { Button } from "./ui/button";
import { trackEvent } from "@/lib/analytics";

const WHATSAPP_NUMBER = "919810329240";

export function LeadBanner() {
  return (
    <section className="py-8 border-t">
      <div className="container mx-auto flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl font-bold tracking-tight">
          Need the Right Replacement Filter?
        </h2>
        <p className="max-w-2xl text-muted-foreground">
          Send us your OEM part number or compressor model on WhatsApp and get
          the price list within one business day.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            onClick={() => {
              const utm = getUtm();
              trackEvent("generate_lead", utm.params);
              const message =
                "Hi Kenrax, please send me the current price list and product catalog." +
                utm.messageSuffix;
              window.open(
                `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
                "_blank"
              );
            }}
          >
            Get Price List
          </Button>
          <Button
            asChild
            variant="outline"
            onClick={() => trackEvent("download_catalog")}
          >
            <a href="/media/catalog.pdf" download>
              Download Product Catalog
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];

function getUtm(): { params: Record<string, string>; messageSuffix: string } {
  let utm: Record<string, string> = {};
  try {
    const stored = localStorage.getItem("kenrax_utm");
    if (stored) utm = JSON.parse(stored);
    const params = new URLSearchParams(window.location.search);
    const fresh = UTM_KEYS.filter((k) => params.get(k));
    if (fresh.length > 0) {
      utm = Object.fromEntries(UTM_KEYS.map((k) => [k, params.get(k) || ""]).filter(([, v]) => v));
      localStorage.setItem("kenrax_utm", JSON.stringify(utm));
    }
  } catch {
    const params = new URLSearchParams(window.location.search);
    utm = Object.fromEntries(UTM_KEYS.map((k) => [k, params.get(k) || ""]).filter(([, v]) => v));
  }
  const suffix = Object.entries(utm)
    .map(([k, v]) => `%0A${k}: ${v}`)
    .join("");
  return { params: utm, messageSuffix: suffix ? `%0A%0A---%0ASource${suffix}` : "" };
}