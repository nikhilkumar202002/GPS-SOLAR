import type { StaticImageData } from "next/image";

import commercialSolarSolutions from "@/app/assets/service/commercial-solar-service.webp";
import maintenanceSupport from "@/app/assets/service/professional-installation-service-2.webp";
import professionalInstallation from "@/app/assets/service/professional-installation-service.webp";
import residentialSolarSystems from "@/app/assets/service/residential-solar-service.webp";

export type HomeServiceItem = {
  id: string;
  number: string;
  title: string;
  description: string;
  imageSrc: StaticImageData;
  imageAlt: string;
};

export const homeServiceData: HomeServiceItem[] = [
  {
    id: "residential-solar-systems",
    number: "01.",
    title: "Residential Solar Systems",
    description:
      "Power your home with clean, renewable energy while significantly reducing monthly electricity bills. Our residential solar systems are designed for safety, efficiency, and long-term performance.",
    imageSrc: residentialSolarSystems,
    imageAlt: "Residential solar panels in warm sunlight",
  },
  {
    id: "commercial-solar-solutions",
    number: "02.",
    title: "Commercial Solar Solutions",
    description:
      "Lower operational expenses and improve energy efficiency with scalable solar systems tailored for commercial buildings, offices, institutions, and industrial facilities.",
    imageSrc: commercialSolarSolutions,
    imageAlt: "Commercial solar installation with modern rooftop panels",
  },
  {
    id: "professional-installation",
    number: "03.",
    title: "Professional Installation",
    description:
      "Our skilled technicians ensure every installation is completed with precision, adhering to the highest safety and quality standards.",
    imageSrc: professionalInstallation,
    imageAlt: "Solar installation team working on rooftop panels",
  },
  {
    id: "maintenance-support",
    number: "04.",
    title: "Maintenance & Support",
    description:
      "Protect your investment with dependable maintenance services, performance monitoring, inspections, and technical support.",
    imageSrc: maintenanceSupport,
    imageAlt: "Technician inspecting and maintaining a solar array",
  },
];
