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
              <Button>Request a Quote</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Request a Quote</DialogTitle>
                <DialogDescription>
                  Tell us what you need — we reply via WhatsApp or email within one
                  business day.
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
    const message = `Hi Kenrax, I need a quote.%0A%0AName: ${name}%0APhone: ${phone}%0APart Number / Model: ${partNumber}`;
    trackEvent("generate_lead", { name, phone, part_number: partNumber });
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