import React from "react";
import TechnologySection from "./TechnologySection";
import ConsultancySection from "./ConsultancySection";
import ContactSection from "./ContactSection";
import CustomContainer from "../Shared/Container";
import ServiceSection from "./ServiceSection";

const HomePage = () => {
  return (
    <div className="py-32">
      <CustomContainer>
        <TechnologySection />
        <ServiceSection />
        <ConsultancySection />
        <ContactSection />
      </CustomContainer>
    </div>
  );
};

export default HomePage;
