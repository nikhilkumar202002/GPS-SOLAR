export type MenuItem = {
  label: string;
  href: string;
  children?: MenuItem[];
};

const menuList: MenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about-us",
    children: [
      { label: "Company Overview", href: "/about-us/company-overview" },
      { label: "Mission", href: "/about-us/mission" },
      { label: "Vision", href: "/about-us/vision" },
      { label: "Core Values", href: "/about-us/core-values" },
      { label: "Leadership", href: "/about-us/leadership" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Residential Solar", href: "/services/residential-solar" },
      { label: "Commercial Solar", href: "/services/commercial-solar" },
      { label: "Solar Consultation", href: "/services/solar-consultation" },
      { label: "Installation", href: "/services/installation" },
      { label: "Maintenance", href: "/services/maintenance" },
    ],
  },
  { label: "Our Process", href: "/our-process" },
  {
    label: "Projects",
    href: "/projects",
    children: [
      { label: "Residential", href: "/projects/residential" },
      { label: "Commercial", href: "/projects/commercial" },
      { label: "Industrial", href: "/projects/industrial" },
    ],
  },
  {
    label: "Why Solar",
    href: "/why-solar",
    children: [
      { label: "Benefits", href: "/why-solar/benefits" },
      { label: "Government Subsidies", href: "/why-solar/government-subsidies" },
      { label: "ROI", href: "/why-solar/roi" },
      { label: "FAQs", href: "/why-solar/faqs" },
    ],
  },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
  { label: "Get Free Quote", href: "/get-free-quote" },
];

export default menuList;
