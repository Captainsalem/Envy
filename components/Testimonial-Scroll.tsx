import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonialCardInfo } from "@/constants";

const Testimonials = () => {
  // Use testimonialCardInfo constant as the data source for testimonials
  const testimonialsData = testimonialCardInfo.map((testimonial) => ({
    quote: testimonial.description,
    name: testimonial.person.name,
    title: testimonial.person.position,
    avatar: testimonial.person.avatar, // Include the avatar property
  }));

  return (
    <div>
      <h2>Testimonials</h2>
      {/* Pass the modified testimonial data to the InfiniteMovingCards component */}
      <InfiniteMovingCards items={testimonialsData} />
    </div>
  );
};

export default Testimonials;
