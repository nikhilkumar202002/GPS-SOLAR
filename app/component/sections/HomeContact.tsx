import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

import ContactForm from "../ui/ContactForm";
import styles from "./HomeContact.module.css";

const contactItems = [
  {
    icon: FiMail,
    label: "Email",
    value: "info@gpstradesandservices.com",
    href: "mailto:info@gpstradesandservices.com",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+91 XXXXX XXXXX",
    href: "tel:+91XXXXXXXXXX",
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
                      Your office address line 1
                      <br />
                      City, State, Postal Code
                    </span>
                  </span>
                </span>
              </address>
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
