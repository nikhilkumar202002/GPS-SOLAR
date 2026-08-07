 "use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

import solarBanner from "@/app/assets/banners/home-banner-1.webp";
import styles from "./ServiceSection.module.css";

const services = [
  {
    number: "01.",
    title: "Residential Solar Systems",
    text: "Power your home with clean, renewable energy while significantly reducing monthly electricity bills. Our residential solar systems are designed for safety, efficiency, and long-term performance.",
  },
  {
    number: "02.",
    title: "Commercial Solar Solutions",
    text: "Lower operational expenses and improve energy efficiency with scalable solar systems tailored for commercial buildings, offices, institutions, and industrial facilities.",
  },
  {
    number: "03.",
    title: "Professional Installation",
    text: "Our skilled technicians ensure every installation is completed with precision, adhering to the highest safety and quality standards.",
  },
  {
    number: "04.",
    title: "Maintenance & Support",
    text: "Protect your investment with dependable maintenance services, performance monitoring, inspections, and technical support.",
  },
];

const ServiceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const primary = services[activeIndex];
  const sideServices = services.filter((_, index) => index !== activeIndex);

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
        <div className={styles.showcase}>
          <article className={styles.primary}>
            <div className={styles.primaryIntro}>
              <span className={styles.primaryNumber}>{primary.number}</span>
              <div className={styles.primaryCopy}>
                <h3 className={styles.primaryTitle}>{primary.title}</h3>
                <p className={styles.primaryText}>{primary.text}</p>
              </div>
            </div>

            <div className={styles.media}>
              <div className={styles.imageWrap}>
                <Image
                  src={solarBanner}
                  alt="Solar technician inspecting solar panels"
                  fill
                  priority
                  sizes="(max-width: 960px) 100vw, 72vw"
                  className={styles.image}
                />
              </div>

              <Link href="/services" className={styles.cta}>
                <span>Read More</span>
                <span className={styles.ctaIcon}>
                  <HiOutlineArrowUpRight />
                </span>
              </Link>
            </div>
          </article>

          <aside className={styles.sidePanels} aria-label="Additional services">
            {sideServices.map((service) => (
              <button
                key={service.number}
                type="button"
                className={styles.sidePanel}
                onClick={() => {
                  const nextIndex = services.findIndex(
                    (item) => item.number === service.number,
                  );
                  setActiveIndex(nextIndex);
                }}
                aria-label={`Show ${service.title}`}
              >
                <span className={styles.sideNumber}>{service.number}</span>
                <span className={styles.sideLabel}>{service.title}</span>
              </button>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
