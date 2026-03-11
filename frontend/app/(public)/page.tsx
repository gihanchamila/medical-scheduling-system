import Hero from "@/components/hero";
import ReviewSection from "@/components/review-section";
import ServicesBento from "@/components/services";
import WhyChoiceUs from "@/components/why-choose-us";
export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChoiceUs />
      <ServicesBento />
      <ReviewSection />
    </>
  );
}
