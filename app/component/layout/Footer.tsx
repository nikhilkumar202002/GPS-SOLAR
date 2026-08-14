"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { FiChevronRight, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

import footerLogo from "@/app/assets/footer-logo.png";
import { homeServiceData } from "@/app/data/serviceData";
import {
  contactAddressLines,
  contactEmail,
  contactPhones,
} from "@/app/data/contactInfo";
import menuList from "@/app/data/menuList";
import styles from "./Footer.module.css";

const footerEase = [0.22, 1, 0.36, 1] as const;

const quickLinks = menuList;

const services = homeServiceData.map((service) => ({
  label: service.title,
  href: `/#${service.id}`,
}));

const footerItemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: footerEase,
    },
  },
};

const Footer = () => {
  const prefersReducedMotion = useReducedMotion();
  const motionEnabled = !prefersReducedMotion;

  return (
    <motion.footer
      className={styles.footer}
      aria-labelledby="footer-heading"
      initial={motionEnabled ? "hidden" : false}
      whileInView={motionEnabled ? "show" : undefined}
      viewport={motionEnabled ? { once: true, amount: 0.14 } : undefined}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: 0.05,
          },
        },
      }}
    >
      <div className={`container ${styles.shell}`}>
        <motion.section
          className={styles.linksGrid}
          variants={footerItemVariants}
        >
          <div className={styles.brandColumn}>
            <Image
              src={footerLogo}
              alt=""
              width={156}
              height={62}
              className={styles.brandMark}
            />
            <div className={styles.brandBlock}>
              <h2 id="footer-heading" className={styles.heading}>
                Powering a Cleaner,
                <br />
                Brighter Future
              </h2>
              <p className={styles.description}>
               GPS Trades and Services provides reliable solar solutions for homes and businesses, from installation to ongoing support.
              </p>
            </div>
          </div>
          <nav className={styles.navColumn} aria-label="Quick Links">
            <h3 className={styles.columnTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.link}>
                    <FiChevronRight
                      aria-hidden="true"
                      className={styles.linkIcon}
                    />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.navColumn} aria-label="Our Services">
            <h3 className={styles.columnTitle}>Our Services</h3>
            <ul className={styles.linkList}>
              {services.map((service) => (
                <li key={service.label}>
                  <Link href={service.href} className={styles.link}>
                    <FiChevronRight
                      aria-hidden="true"
                      className={styles.linkIcon}
                    />
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.contactColumn}>
            <h3 className={styles.columnTitle}>Contact Us</h3>
            <address className={styles.address}>
              <p className={styles.contactRow}>
                <FiMapPin aria-hidden="true" className={styles.inlineIcon} />
                <span className={styles.label}>Address:</span>
                <span className={styles.value}>
                  {contactAddressLines.map((line, index) => (
                    <span key={line}>
                      {line}
                      {index < contactAddressLines.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </span>
              </p>

              {contactPhones.map((phone) => (
                <a key={phone.display} href={phone.href} className={styles.contactLink}>
                  <FiPhone aria-hidden="true" className={styles.inlineIcon} />
                  <span className={styles.label}>{phone.label}:</span>
                  <span className={styles.value}>{phone.display}</span>
                </a>
              ))}

              <a
                href={contactEmail.href}
                className={styles.contactLink}
              >
                <FiMail aria-hidden="true" className={styles.inlineIcon} />
                <span className={styles.label}>{contactEmail.label}:</span>
                <span className={styles.emailValue}>
                  {contactEmail.display}
                </span>
              </a>
            </address>
          </div>
        </motion.section>

        <div className={styles.divider} aria-hidden="true" />

        <motion.section
          className={styles.bottomBar}
          variants={footerItemVariants}
        >
          <p className={styles.copyright}>
            © 2026 GPS Trades and Services. All Rights Reserved.
          </p>

          <div className={styles.bottomLinks} aria-label="Legal links">
            <Link href="/privacy-policy" className={styles.bottomLink}>
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className={styles.bottomLink}>
              Terms &amp; Conditions
            </Link>
          </div>

          <p className={styles.tagline}>
            Clean Energy. Trusted Expertise. Better Tomorrow.
          </p>
        </motion.section>
      </div>
    </motion.footer>
  );
};

export default Footer;
