import { BadgeCheck } from "lucide-react";

const badges = [
  "OEM-grade fit & performance",
  "Made in India",
];

export function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
      {badges.map((b) => (
        <span
          key={b}
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground"
        >
          <BadgeCheck className="size-4 text-primary" />
          {b}
        </span>
      ))}
    </div>
  );
}