import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

import {
  contactAddressLines,
  contactEmail,
  contactPhones,
} from "@/app/data/contactInfo";
import ContactForm from "../ui/ContactForm";
import { homeContactStyles as styles } from "./SectionStyles";

const contactItems = [
  {
    icon: FiPhone,
    label: contactPhones[0].label,
    value: contactPhones[0].display,
    href: contactPhones[0].href,
  },
  {
    icon: FiPhone,
    label: contactPhones[1].label,
    value: contactPhones[1].display,
    href: contactPhones[1].href,
  },
];

const HomeContact = () => {
  return (
    <section className={styles.section} aria-labelledby="home-contact-heading">
      <div className="container">
        <div className={styles.shell}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>Contact Us</p>
            <h2 id="home-contact-heading" className={styles.heading}>
              Ready to start your solar project?
            </h2>
            <p className={styles.description}>
              Share your requirements and our team will help you plan the right
              solar solution for your home or business.
            </p>

            <div className={styles.contactList}>
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <a key={label} className={styles.contactItem} href={href}>
                  <span className={styles.iconWrap} aria-hidden="true">
                    <Icon className={styles.icon} />
                  </span>
                  <span className={styles.contactCopy}>
                    <span className={styles.contactLabel}>{label}</span>
                    <span className={styles.contactValue}>{value}</span>
                  </span>
                </a>
              ))}

              <address className={styles.address}>
                <span className={styles.contactItem}>
                  <span className={styles.iconWrap} aria-hidden="true">
                    <FiMapPin className={styles.icon} />
                  </span>
                  <span className={styles.contactCopy}>
                    <span className={styles.contactLabel}>Address</span>
                    <span className={styles.contactValue}>
                      {contactAddressLines.map((line, index) => (
                        <span key={line}>
                          {line}
                          {index < contactAddressLines.length - 1 ? <br /> : null}
                        </span>
                      ))}
                    </span>
                  </span>
                </span>
              </address>

              <a className={styles.contactItem} href={contactEmail.href}>
                <span className={styles.iconWrap} aria-hidden="true">
                  <FiMail className={styles.icon} />
                </span>
                <span className={styles.contactCopy}>
                  <span className={styles.contactLabel}>{contactEmail.label}</span>
                  <span className={styles.contactValue}>
                    {contactEmail.display}
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div className={styles.formWrap}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
