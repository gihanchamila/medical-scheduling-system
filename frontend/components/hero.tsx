import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";
import { Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="col-span-12">
      <div className="">
        <div className="space-y-2">
          <Badge variant="secondary" className="font-medium">
            ISO 9001:2015 Certified
          </Badge>
          <h1 className="text-3xl">
            Seamless Scheduling for{" "}
            <span className="text-primary">Modern Clinics.</span>
          </h1>
        </div>

        <p className="max-w-2xl text-base md:text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
          Manage appointments, patient records, and clinic workflows with our
          integrated medical scheduling system designed for efficiency.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button size="lg" className="">
            Book Appointment <Calendar />
          </Button>
          <Button size="lg" variant="outline" className="">
            View Services
          </Button>
        </div>
      </div>
    </section>
  );
}
