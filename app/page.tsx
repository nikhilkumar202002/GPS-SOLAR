import Hero from "./component/sections/Hero";
import TrustedPartner from "./component/sections/TrustedPartner";
import WhyChooseUs from "./component/sections/WhyChooseUs";
import AboutUs from "./component/sections/AboutUs";
import ServiceSection from "./component/sections/ServiceSection";
import ProcessStep from "./component/sections/ProcessStep";

const Page = () => {
  return (
    <main>
      <Hero />
      <TrustedPartner />
      <AboutUs />
      <ServiceSection />
      <ProcessStep />
      <WhyChooseUs />
    </main>
  );
};

export default Page;
