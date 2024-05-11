import Companies from "@/components/Companies";
import HowItWorks from "@/components/HowItWorks";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Testimonials from "@/components/Testimonials";
import TestimonialScroll from "@/components/Testimonial-Scroll";
import HeroInfinite from "@/components/HeroInfinite";

const page = () => {
  return (
    <>
      <Hero />;
      <HeroInfinite />;
      <Companies />;
      <Service />
      <Testimonials />
      <TestimonialScroll />
      {/* Portfolio */}
      {/* Blog */}
      {/* Benefits */}
      <HowItWorks/>;
    </>
  );
};
export default page;
