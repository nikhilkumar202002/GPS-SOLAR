export type MenuItem = {
  label: string;
  href: string;
};

const menuList: MenuItem[] = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about-us" },
  { label: "Services", href: "/#services" },
  { label: "Our Process", href: "/#our-process" },
  { label: "Why Choose Us", href: "/#why-choose-us" },
  { label: "Why Solar", href: "/#why-solar" },
  { label: "FAQ", href: "/#faq" },
];

export default menuList;
