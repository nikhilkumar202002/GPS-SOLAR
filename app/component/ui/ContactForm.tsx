import styles from "./ContactForm.module.css";
import primaryButtonStyles from "./PrimaryButton.module.css";
import { HiArrowRight, HiChevronDown } from "react-icons/hi2";

const serviceOptions = [
  "Select a service",
  "Solar Panel Installation",
  "Solar Maintenance",
  "Battery Storage",
  "Inverter Solutions",
  "Commercial Solar",
  "Other",
];

const ContactForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input
            className={styles.input}
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            autoComplete="name"
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.input}
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="phone">
            Phone
          </label>
          <input
            className={styles.input}
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            autoComplete="tel"
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="service">
            Service
          </label>
          <div className={styles.selectWrap}>
            <select
              className={`${styles.input} ${styles.select}`}
              id="service"
              name="service"
              required
              defaultValue=""
            >
              {serviceOptions.map((service) => (
                <option
                  key={service}
                  value={service === "Select a service" ? "" : service}
                >
                  {service}
                </option>
              ))}
            </select>
            <HiChevronDown className={styles.selectIcon} aria-hidden="true" />
          </div>
        </div>

        <div className={`${styles.field} ${styles.fullWidth}`}>
          <label className={styles.label} htmlFor="message">
            Message
          </label>
          <textarea
            className={styles.textarea}
            id="message"
            name="message"
            placeholder="Tell us about your project"
            rows={5}
            required
          />
        </div>
      </div>

      <button
        className={`${primaryButtonStyles.button} ${styles.submitButton}`}
        type="submit"
      >
        Send Message
        <span className={primaryButtonStyles.icon}>
          <HiArrowRight className={primaryButtonStyles.arrowIcon} />
        </span>
      </button>
    </form>
  );
};

export default ContactForm;
