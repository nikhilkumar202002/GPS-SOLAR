export const contactPhones = [
  {
    label: "Phone",
    display: "9048 47 48 49",
    href: "tel:+919048474849",
  },
  {
    label: "Phone",
    display: "9074 55 70 80",
    href: "tel:+919074557080",
  },
] as const;

export const contactEmail = {
  label: "Email",
  display: "gpstradingindia@gmail.com",
  href: "mailto:gpstradingindia@gmail.com",
} as const;

export const whatsappPhoneNumber = "919048474849";

export const createWhatsAppEnquiryUrl = (serviceName: string) => {
  const message = `Hi GPS Solar Solutions, I would like to enquire about ${serviceName}.`;
  return `https://wa.me/${whatsappPhoneNumber}?text=${encodeURIComponent(message)}`;
};

export const contactAddressLines = [
  "65/368, First Floor, Fortune Tower",
  "Judges Avenue Road, Kaloor,",
  "Kochi, Kerala 682 017",
] as const;
