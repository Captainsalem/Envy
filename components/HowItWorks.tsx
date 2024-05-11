import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { Badge } from "./ui/badge";

const HowItWorks = () => {
  const content = [
  
    {
      title: "Step 1 - Initial Consultation",
      description: "We'll start by scheduling a meeting to discuss your project requirements, goals, and vision.",
      content: <div className="text-secondary-100 pt-16 pb-8 pl-8 pr-8">During this meeting, we'll gather all necessary information to understand your needs and expectations.</div>
    },
    {
      title: "Step 2 - Proposal Submission",
      description: "Based on the initial consultation, we'll prepare a detailed proposal outlining the project scope, timeline, and cost.",
      content: <div className="text-secondary-100 pt-16 pb-8 pl-8 pr-8">You'll receive a comprehensive proposal that includes our approach, technologies we'll use, and a breakdown of the project phases.</div>
    },
    {
      title: "Step 3 - Agreement and Kickoff",
      description: "Once you approve the proposal, we'll sign a contract and set a kickoff meeting to officially start the project.",
      content: <div className="text-secondary-100 pt-16 pb-8 pl-8 pr-8">We'll finalize all necessary paperwork and begin the project with a detailed kickoff meeting to align on goals and expectations.</div>
    },
    {
      title: "Step 4 - Development",
      description: "Our team will start working on your project, keeping you updated on progress and milestones along the way.",
      content: <div className="text-secondary-100 pt-16 pb-8 pl-8 pr-8">You'll have access to our development environment to track progress and provide feedback throughout the development phase.</div>
    },
    {
      title: "Step 5 - Testing and Revisions",
      description: "We'll conduct thorough testing to ensure everything functions as expected. Any necessary revisions will be made at this stage.",
      content: <div className="text-secondary-100 pt-16 pb-8 pl-8 pr-8">You'll have the opportunity to review the project, suggest changes, and we'll make revisions accordingly to ensure your satisfaction.</div>
    },
    {
      title: "Step 6 - Deployment and Delivery",
      description: "Once everything is approved, we'll deploy the project to your desired environment and ensure a smooth delivery.",
      content: <div className="text-secondary-100 pt-16 pb-8 pl-8 pr-8">We'll handle all aspects of deployment and delivery, ensuring your project is live and ready to use.</div>
    },
    {
      title: "Step 7 - Post-launch Support",
      description: "Even after the project is live, we'll provide ongoing support and maintenance to address any issues and ensure optimal performance.",
      content: <div className="text-secondary-100 pt-16 pb-8 pl-8 pr-8">Our team will be available for any support or maintenance needs post-launch, ensuring your project remains in top condition.</div>
    },
    // placeholder to allow reveal to index 7
    {
      title: "",
      description: "",
      content: <div></div>
    },
    {
      title: "",
      description: "",
      content: <div></div>
    },
    {
      title: "",
      description: "",
      content: <div></div>
    }
  ];

  return (
    <div>
      {/* Utilize the StickyScroll component */}
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center text-secondary-100">
        <h2 className="max-w-[85%] text-xl leading-normal text-secondary-200 sm:text-2xl md:text-4xl">
          How it Works
        </h2>
        <p className="max-w-[70%] text-secondary-400">
          Here's how we approach your project.
        </p>
      </div>
      <StickyScroll content={content} />
    </div>
  );

};

export default HowItWorks;
