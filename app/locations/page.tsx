import { Metadata } from "next";
import { locations } from "@/lib/locations";
import { ArrowUpRight } from "lucide-react";
import Image from "next-export-optimize-images/image";
import properties from "@/data/properties.json";

const photos = [
  properties["media.homepage.photo.1"].media[0],
  properties["media.homepage.photo.2"].media[0],
  properties["media.homepage.photo.3"].media[0],
  properties["media.homepage.photo.4"].media[0],
];

export default function LocationsPage() {
  return (
    <>
      <section className="py-10">
        <div className="container flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight text-pretty lg:text-5xl">
            Air Compressor Filters in India
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Kenrax Industries supplies OEM-grade replacement air filters, oil
            filters, and air-oil separators for screw compressors to cities across
            India — with part-number cross-referencing and fast dispatch.
          </p>
        </div>
      </section>

      <section className="py-8 border-t">
        <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((l, i) => (
            <a
              key={l.slug}
              href={`/locations/${l.slug}`}
              className="group flex flex-col overflow-hidden rounded-lg border bg-card"
            >
              <Image
                width={600}
                height={400}
                src={photos[i % photos.length]}
                alt={`Kenrax compressor filters in ${l.name}`}
                className="aspect-video w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold">{l.name}</h2>
                  <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                  {l.intro}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export const metadata: Metadata = {
  title: "Air Compressor Filters & Separators Across India | Kenrax",
  description:
    "Kenrax supplies OEM-grade air filters, oil filters, and air-oil separators for screw compressors across Delhi, Mumbai, Pune, Chennai, Bengaluru, Hyderabad, Ahmedabad, Kolkata, and more.",
  alternates: {
    canonical: "https://kenrax.in/locations",
  },
};