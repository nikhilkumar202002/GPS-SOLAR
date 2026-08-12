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
    <form className="ui-contact-form">
      <div className="ui-contact-form-grid">
        <div className="ui-contact-form-field">
          <label className="ui-contact-form-label" htmlFor="name">
            Name
          </label>
          <input
            className="ui-contact-form-input"
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            autoComplete="name"
            required
          />
        </div>

        <div className="ui-contact-form-field">
          <label className="ui-contact-form-label" htmlFor="email">
            Email
          </label>
          <input
            className="ui-contact-form-input"
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </div>

        <div className="ui-contact-form-field">
          <label className="ui-contact-form-label" htmlFor="phone">
            Phone
          </label>
          <input
            className="ui-contact-form-input"
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            autoComplete="tel"
            required
          />
        </div>

        <div className="ui-contact-form-field">
          <label className="ui-contact-form-label" htmlFor="service">
            Service
          </label>
          <div className="ui-contact-form-select-wrap">
            <select
              className="ui-contact-form-input ui-contact-form-select"
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
            <HiChevronDown className="ui-contact-form-select-icon" aria-hidden="true" />
          </div>
        </div>

        <div className="ui-contact-form-field ui-contact-form-full-width">
          <label className="ui-contact-form-label" htmlFor="message">
            Message
          </label>
          <textarea
            className="ui-contact-form-textarea"
            id="message"
            name="message"
            placeholder="Tell us about your project"
            rows={5}
            required
          />
        </div>
      </div>

      <button
        className="ui-primary-button ui-contact-form-submit"
        type="submit"
      >
        Send Message
        <span className="ui-primary-button-icon">
          <HiArrowRight className="ui-primary-button-arrow" />
        </span>
      </button>
    </form>
  );
};

export default ContactForm;
