"use client";
import Image from 'next-export-optimize-images/image'

import AutoScroll from "embla-carousel-auto-scroll";
import properties from "../data/properties.json";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "OEM Spare Parts for",
}: Logos3Props) => {
  return (
    <section className="pt-12">
      <div className="container flex flex-col">
        <h1 className="mt-6 text-2xl font-bold tracking-tight md:text-4xl">
          {heading}
        </h1>
      </div>
      <div className="pt-16 overflow-hidden">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, direction: "backward" })]}
          >
            <CarouselContent className="ml-0">
              {properties["media.oem.logos"].media.toReversed().map((img, idx) => (
                <CarouselItem
                  key={idx}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <Image
                        width={100}
                        height={100}
                        src={img}
                        alt={"OEM Logo"}
                        className={"object-contain h-14 w-auto"}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
        </div>
        <div className="mt-16 text-xs text-muted-foreground">
          Logos of OEMs shown—like Atlas Copco, Ingersoll Rand, Elgi, etc.—belong to their respective owners. Kenrax Industries is not affiliated with them; logos are used only to indicate product compatibility.
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
