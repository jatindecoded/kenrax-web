import { Badge } from "@/components/ui/badge";

const ProfileAbout = () => {
  return (
    <section className="pb-8 md:pb-8">
      <div className="max-w-3xl">
        <Badge className="mb-4">About Us</Badge>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">
          Who We Are
        </h2>
        <div className="space-y-2 text-muted-foreground">
          <p>
            Kenrax Industries is an established Indian manufacturer specialising
            in precision filtration products for industrial compressed air
            systems. Founded in New Delhi, India, we have over three decades of
            hands-on manufacturing experience serving compressor OEMs, authorised
            service partners, and industrial clients across the country and
            abroad.
          </p>
          <p>
            Our in-house manufacturing facility is equipped with modern
            production machinery and staffed by a team of experienced engineers,
            quality professionals, and production specialists. We design and
            produce a comprehensive range of air filters, oil filters, air-oil
            separators, coolant filters, and hydraulic filters for rotary screw
            air compressors covering all major international and domestic brands.
          </p>
          <p>
            We are not a trading house. Every product that carries our name is
            manufactured in our own facility, from raw material processing to
            final packaging. This gives us complete control over quality,
            lead times, and cost efficiency — advantages we pass directly to our
            partners.
          </p>
          <p>
            Our mission is to serve as a trusted, long-term manufacturing partner
            for compressor brands seeking consistent quality, flexible production
            capabilities, and responsive service.
          </p>
        </div>
      </div>
    </section>
  );
};

export { ProfileAbout };
