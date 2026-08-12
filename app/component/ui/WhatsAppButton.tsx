import Image from "next/image";

import whatsappIcon from "@/app/assets/whatsapp-icon.png";

const whatsappUrl = "https://wa.me/919876543210?text=Hi%20GPS%20Trades%20and%20Services";

const WhatsAppButton = () => {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer noopener"
      className="ui-whatsapp-button"
      aria-label="Chat with us on WhatsApp"
    >
      <Image
        src={whatsappIcon}
        alt=""
        width={56}
        height={56}
        className="ui-whatsapp-icon"
      />
    </a>
  );
};

export default WhatsAppButton;
