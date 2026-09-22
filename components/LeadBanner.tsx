"use client";

import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { trackEvent } from "@/lib/analytics";

const WHATSAPP_NUMBER = "919810329240";

export function LeadBanner() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-8 border-t">
      <div className="container mx-auto flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl font-bold tracking-tight">
          Need the Right Replacement Filter?
        </h2>
        <p className="max-w-2xl text-muted-foreground">
          Send us your OEM part number or compressor model and get a quote
          within one business day.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button>GET PRICE LIST</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Get Price List</DialogTitle>
                <DialogDescription>
                  Tell us which filters you need — we send the price list via
                  WhatsApp within one business day.
                </DialogDescription>
              </DialogHeader>
              <LeadForm onClose={() => setOpen(false)} />
            </DialogContent>
          </Dialog>
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

function LeadForm({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [partNumber, setPartNumber] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const utm = getUtm();
    const message = `Hi Kenrax, please send me the price list.%0A%0AName: ${name}%0APhone: ${phone}%0AProduct / Part Numbers: ${partNumber}${utm.messageSuffix}`;
    trackEvent("generate_lead", { name, phone, part_number: partNumber, ...utm.params });
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <label className="flex flex-col gap-1 text-sm">
        Name
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-md border px-3 py-2"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        Phone / WhatsApp number
        <input
          required
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="rounded-md border px-3 py-2"
          placeholder="+91 ..."
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        OEM part number or compressor model
        <input
          required
          value={partNumber}
          onChange={(e) => setPartNumber(e.target.value)}
          className="rounded-md border px-3 py-2"
        />
      </label>
      <Button type="submit" className="w-full">
        Send via WhatsApp
      </Button>
    </form>
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
    // localStorage may be unavailable; fall back to URL params only
    const params = new URLSearchParams(window.location.search);
    utm = Object.fromEntries(UTM_KEYS.map((k) => [k, params.get(k) || ""]).filter(([, v]) => v));
  }
  const suffix = Object.entries(utm)
    .map(([k, v]) => `%0A${k}: ${v}`)
    .join("");
  return { params: utm, messageSuffix: suffix ? `%0A%0A---%0ASource${suffix}` : "" };
}