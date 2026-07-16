import { Badge } from "@/components/ui/badge";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import properties from "@/data/properties.json";
import { whatsappHref } from "@/components/constants";

const ProfileContact = () => {
  return (
    <section className="py-16 md:py-24">
      <Badge className="mb-4">Contact</Badge>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
        Partner With Us
      </h2>
      <p className="text-muted-foreground mb-10 max-w-screen-md">
        Interested in discussing a manufacturing partnership? We would be happy
        to share more about our capabilities, provide samples, or discuss your
        specific requirements.
      </p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <MessageCircle className="size-4 text-primary" />
            <p className="text-sm font-semibold">WhatsApp</p>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            +91-{properties["contact.phone.visible"].value}
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Phone className="size-4 text-primary" />
            <p className="text-sm font-semibold">Phone</p>
          </div>
          <a
            href={`tel:+91${properties["contact.phone.visible"].value}`}
            className="text-sm text-muted-foreground hover:text-primary"
          >
            +91-{properties["contact.phone.visible"].value}
          </a>
          <p className="text-xs text-muted-foreground">
            Mon-Fri, 10am-6pm IST
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Mail className="size-4 text-primary" />
            <p className="text-sm font-semibold">Email</p>
          </div>
          <a
            href={`mailto:${properties["contact.email"].value}`}
            className="text-sm text-muted-foreground hover:text-primary"
          >
            {properties["contact.email"].value}
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <MapPin className="size-4 text-primary" />
            <p className="text-sm font-semibold">Address</p>
          </div>
          <p className="text-sm text-muted-foreground whitespace-pre-line">
            {properties["contact.address"].value}
          </p>
        </div>
      </div>
    </section>
  );
};

export { ProfileContact };
