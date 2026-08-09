import Hero from "./component/sections/Hero";
import TrustedPartner from "./component/sections/TrustedPartner";
import CoreValues from "./component/sections/CoreValues";
import WhyChooseUs from "./component/sections/WhyChooseUs";
import AboutUs from "./component/sections/AboutUs";
import TeamHome from "./component/sections/TeamHome";
import ServiceSection from "./component/sections/ServiceSection";
import ProcessStep from "./component/sections/ProcessStep";
import WhySolar from "./component/sections/WhySolar";

const Page = () => {
  return (
    <main>
      <Hero />
      <TrustedPartner />
      <AboutUs />
      <ServiceSection />
      <ProcessStep />
      <WhyChooseUs />
      <WhySolar />
      <TeamHome />
      <CoreValues />



    </main>
  );
};

export default Page;
