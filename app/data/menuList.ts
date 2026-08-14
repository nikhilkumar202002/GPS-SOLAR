export type MenuItem = {
  label: string;
  href: string;
};

const menuList: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Our Process", href: "/our-process" },
  { label: "Projects", href: "/projects" },
  { label: "Why Solar", href: "/why-solar" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
  { label: "Get Free Quote", href: "/get-free-quote" },
];

export default menuList;
