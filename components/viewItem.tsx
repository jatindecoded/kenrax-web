"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function ViewItem({ partNumber, type, brand }: { partNumber: string; type: string; brand: string }) {
  useEffect(() => {
    trackEvent("view_item", {
      currency: "INR",
      value: 0,
      items: [{ item_id: partNumber, item_name: partNumber, item_brand: brand, item_category: type }],
    });
  }, [partNumber, type, brand]);
  return null;
}