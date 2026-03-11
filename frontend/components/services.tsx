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
    className:
      "lg:col-span-6 lg:row-span-2 bg-primary text-primary-foreground flex flex-col justify-between",
    stats: "Next Available: Today, 2:00 PM",
    doctors: ["/doc1.jpg", "/doc2.jpg", "/doc3.jpg"],
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
              "group relative overflow-hidden rounded-3xl p-6 lg:p-8 transition-all hover:shadow-lg",
              service.className,
            )}
          >
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="space-y-4">
                <div
                  className={cn(
                    "inline-flex p-3 rounded-2xl",
                    service.title === "Appointments"
                      ? "bg-white/10"
                      : "bg-primary/5",
                  )}
                >
                  <service.icon className="size-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p
                    className={cn(
                      "body-text xs:text-sm lg:text-lg",
                      service.title === "Appointments"
                        ? "text-primary-foreground/80"
                        : "",
                    )}
                  >
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* EXCLUSIVE CONTENT FOR APPOINTMENTS CARD */}
              {service.title === "Appointments" && (
                <div className="mt-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                  {/* Doctor Avatar Stack */}
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="size-10 rounded-full border-2 border-primary bg-zinc-200 overflow-hidden"
                        >
                          <img src={`/api/placeholder/40/40`} alt="Doctor" />
                        </div>
                      ))}
                    </div>
                    <p className="text-xs font-medium text-primary-foreground/90">
                      +12 Doctors Online
                    </p>
                  </div>

                  {/* Live Availability Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl border border-white/10 w-fit">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-bold tracking-wide">
                      AVAILABLE NOW
                    </span>
                  </div>
                </div>
              )}
            </div>

            <ArrowUpRight className="absolute top-8 right-8 size-6 opacity-20 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        ))}
      </div>
    </section>
  );
}
