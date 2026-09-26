import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import properties from "@/data/properties.json";
import products from "@/lib/products";

const airCount = products.filter((p) => p.type === "Air Filter").length;
const oilCount = products.filter((p) => p.type === "Oil Filter").length;
const sepCount = products.filter((p) => p.type === "Air Oil Separator").length;

export default function AboutPage() {
  const whatsappUrl = `https://wa.me/91${properties["contact.phone.whatsapp"].value}?text=${encodeURIComponent(
    "Hi Kenrax, I'd like to know more about your company and products."
  )}`;

  return (
    <>
      <section className="py-10">
        <div className="container flex flex-col items-start text-left">
          <h1 className="text-4xl font-bold tracking-tight text-pretty lg:text-5xl">
            About Kenrax Industries
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Kenrax Industries manufactures OEM-grade replacement filtration for
            screw air compressors — air filters, oil filters, and air-oil
            separators — engineered in New Delhi and shipped across India.
          </p>
        </div>
      </section>

      <section className="py-8 border-t">
        <div className="container flex flex-col items-start text-left max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            What we do
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-4">
            A screw compressor breathes through three consumables that decide
            its operating cost and reliability: the air filter, the oil filter,
            and the air-oil separator. Kenrax manufactures all three, engineered
            to match the original part&apos;s media grade, dimensions, and
            sealing so they drop in without compromise.
          </p>
          <p className="text-muted-foreground max-w-3xl mb-4">
            We catalogue {airCount} air filters, {oilCount} oil filters, and{" "}
            {sepCount} air-oil separators today, covering Atlas Copco, Elgi,
            Ingersoll Rand, Chicago Pneumatic, Kaeser, KPC, and K.G. Khosla
            fitment patterns — and we verify any OEM part number on request
            before you order.
          </p>
        </div>
      </section>

      <section className="py-8 border-t">
        <div className="container flex flex-col items-start text-left max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            How we work
          </h2>
          <ul className="max-w-3xl space-y-3 text-muted-foreground">
            <li>
              You send a part number — a label from your compressor, an OEM
              number, or the filter itself.
            </li>
            <li>
              We cross-reference it against our catalogue and confirm fitment
              and price on WhatsApp, usually the same working day.
            </li>
            <li>
              In-stock parts dispatch from Delhi in 24–48 hours; bulk and
              private-label orders are scheduled against confirmed timelines.
            </li>
            <li>
              Every filter ships with a manufacturing-defect warranty.
            </li>
          </ul>
        </div>
      </section>

      <section className="py-8 border-t">
        <div className="container flex flex-col items-start text-left max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            Who we serve
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-4">
            Maintenance teams, compressor service firms, dealers, and
            distributors who need reliable replacements without waiting on
            import cycles. We also manufacture custom and white-label filters
            for private-label buyers, and ship to customers across all major
            industrial belts in India.
          </p>
          <Button size="lg" asChild>
            <a href={whatsappUrl} target="_blank">
              Talk to Us on WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}

export const metadata: Metadata = {
  title: "About Kenrax Industries - OEM-Grade Compressor Filters, Made in India",
  description:
    "Kenrax Industries manufactures OEM-grade air filters, oil filters, and air-oil separators for screw compressors in New Delhi, India. 500+ cross-referenced part numbers, 24-48h dispatch, custom labeling available.",
  keywords: [
    "Kenrax Industries about",
    "compressor filter manufacturer Delhi",
    "air oil separator manufacturer India",
    "private label filter manufacturing",
    "white label compressor filters",
  ],
  alternates: {
    canonical: "https://kenrax.in/about",
  },
};