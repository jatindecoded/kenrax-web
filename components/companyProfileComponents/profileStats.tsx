import { Badge } from "@/components/ui/badge";

const stats = [
  {
    value: "30+",
    label: "Years of Experience",
  },
  {
    value: "850+",
    label: "Trusted Clients",
  },
  {
    value: "550+",
    label: "Product SKUs",
  },
  {
    value: "99.9%",
    label: "Repeat Order Rate",
  },
];

const ProfileStats = () => {
  return (
    <section className="py-10 md:py-16">
      <Badge className="mb-4">At a Glance</Badge>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-10">
        Some Numbers
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2">
            <div className="text-4xl md:text-5xl font-bold tracking-tight">
              {stat.value}
            </div>
            <p className="text-sm font-semibold tracking-tight text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export { ProfileStats };
