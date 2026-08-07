"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

import solarBanner from "@/app/assets/banners/home-banner-1.webp";
import styles from "./ServiceSection.module.css";

const services = [
  {
    number: "01.",
    title: "Residential Solar Systems",
    text: "Power your home with clean, renewable energy while significantly reducing monthly electricity bills. Our residential solar systems are designed for safety, efficiency, and long-term performance.",
    imageAlt: "Solar technician inspecting residential solar panels",
  },
  {
    number: "02.",
    title: "Commercial Solar Solutions",
    text: "Lower operational expenses and improve energy efficiency with scalable solar systems tailored for commercial buildings, offices, institutions, and industrial facilities.",
    imageAlt: "Commercial solar installation with expansive panel rows",
  },
  {
    number: "03.",
    title: "Professional Installation",
    text: "Our skilled technicians ensure every installation is completed with precision, adhering to the highest safety and quality standards.",
    imageAlt: "Technician performing professional solar installation",
  },
  {
    number: "04.",
    title: "Maintenance & Support",
    text: "Protect your investment with dependable maintenance services, performance monitoring, inspections, and technical support.",
    imageAlt: "Solar support and maintenance on rooftop panels",
  },
];

const ServiceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const columnTemplate = services
    .map((_, index) =>
      index === activeIndex
        ? "minmax(0, 2.15fr)"
        : "minmax(64px, 0.42fr)",
    )
    .join(" ");

  return (
    <section className={styles.section} aria-labelledby="services-heading">
      <div className="container">
        <div className={styles.shell}>
          <header className={styles.header}>
            <p className={styles.eyebrow}>Our Services</p>
            <h2 id="services-heading" className={styles.heading}>
              Complete Solar Solutions
              <br />
              Under One Roof
            </h2>
          </header>
        </div>
      </div>

      <div className={styles.showcaseBleed}>
        <div
          className={styles.showcase}
          style={{ gridTemplateColumns: columnTemplate }}
        >
          {services.map((service, index) => {
            const isOpen = index === activeIndex;

            return (
              <article
                key={service.number}
                className={`${styles.card} ${isOpen ? styles.cardOpen : styles.cardClosed}`}
              >
                <button
                  type="button"
                  className={styles.trigger}
                  onClick={() => setActiveIndex(index)}
                  aria-expanded={isOpen}
                  aria-label={`Open ${service.title}`}
                >
                  <span className={styles.number}>{service.number}</span>
                  <span className={styles.triggerTitle}>{service.title}</span>
                </button>

                <div className={styles.panel}>
                  <div className={styles.copy}>
                    <p className={styles.text}>{service.text}</p>

                    <Link href="/services" className={styles.cta}>
                      <span>Read More</span>
                      <span className={styles.ctaIcon}>
                        <HiOutlineArrowUpRight />
                      </span>
                    </Link>
                  </div>

                  <div className={styles.media}>
                    <div className={styles.imageWrap}>
                      <Image
                        src={solarBanner}
                        alt={service.imageAlt}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 960px) 100vw, 72vw"
                        className={styles.image}
                      />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
