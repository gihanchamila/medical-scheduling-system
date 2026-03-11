import Link from "next/link";
import {
  Pill,
  Calendar,
  Video,
  FlaskConical,
  Drill,
  ArrowUpRight,
  PhoneCall,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Appointments",
    href: "/appointments",
    desc: "Book a specialist doctor for in-person visits with minimal waiting time.",
    icon: Calendar,
    className: "lg:col-span-6 lg:row-span-2 bg-primary text-primary-foreground", // Featured card
  },
  {
    title: "Pharmacy",
    href: "/pharmacy",
    desc: "Order medicines online with home delivery.",
    icon: Pill,
    className: "lg:col-span-6 lg:row-span-1 bg-secondary",
  },
  {
    title: "Laboratories",
    href: "/labs",
    desc: "Fast and accurate clinical test results.",
    icon: FlaskConical,
    className: "lg:col-span-3 lg:row-span-1 bg-background border border-border",
  },
  {
    title: "Consultant",
    href: "/consultant",
    desc: "Secure video consultations.",
    icon: Video,
    className: "lg:col-span-3 lg:row-span-1 bg-background border border-border",
  },
  {
    title: "Dental",
    href: "/dental",
    desc: "Complete oral health and surgery.",
    icon: Drill,
    className: "lg:col-span-6 lg:row-span-1 bg-secondary",
  },
  {
    title: "Emergency",
    href: "/contact",
    desc: "24/7 Urgent care and ambulance services.",
    icon: PhoneCall,
    className: "lg:col-span-6 bg-destructive/10 border border-destructive/20",
  },
];

export default function ServicesBento() {
  return (
    <section className="col-span-12 py-12 lg:py-24">
      <div className="space-y-3 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Our Services
        </h2>
        <p className="body-text text-sm md:text-lg max-w-xl">
          Comprehensive healthcare solutions designed for your convenience and
          well-being.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2 gap-4">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className={cn(
              "group relative overflow-hidden rounded-3xl p-6 lg:p-8 transition-all hover:shadow-md",
              service.className,
            )}
          >
            <div className="flex h-full flex-col justify-between">
              <div>
                <div
                  className={cn(
                    "inline-flex p-3 rounded-2xl mb-4",
                    service.title === "Appointments"
                      ? "bg-white/10"
                      : "bg-primary/5",
                  )}
                >
                  <service.icon className="size-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p
                  className={cn(
                    "text-sm leading-relaxed",
                    service.title === "Appointments"
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground",
                  )}
                >
                  {service.desc}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
