import Image from "next-export-optimize-images/image";
import properties from "@/data/properties.json";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const ProfileHero = () => {
  return (
    <section className="pt-8 md:pt-8">
      <div className="flex flex-col items-center text-center gap-6">
        <Image
          width={64}
          height={64}
          src={properties["media.logo"].media[0]}
          alt="Kenrax Industries Logo"
          className="object-contain rounded-md border"
        />
        <div className="flex flex-col gap-2">
          <h1
            className={`text-3xl md:text-5xl font-bold tracking-tighter uppercase ${spaceGrotesk.className}`}
          >
            {properties["company.name"].value}
          </h1>
          <p className="text-lg md:text-xl font-semibold tracking-tight text-muted-foreground">
            Precision Filtration Manufacturing
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-muted-foreground">
          <span>Established Manufacturer</span>
          <span className="hidden md:inline">&bull;</span>
          <span>New Delhi, India</span>
          <span className="hidden md:inline">&bull;</span>
          <span>30+ Years of Excellence</span>
        </div>
        <div className="mt-4 overflow-hidden rounded-lg border w-full max-w-sm h-64">
          <Image
            width={800}
            height={450}
            src="/media/01a7995a-264c-48dc-8734-1b5b33f73251-general-3.png"
            alt="Kenrax Industries"
            className="object-cover h-full w-full object-center"
          />
        </div>
      </div>
    </section>
  );
};

export { ProfileHero };
