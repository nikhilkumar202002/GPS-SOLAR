"use client";

import { useState } from "react";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi2";

import styles from "./ServiceSection.module.css";

type ServiceItem = {
  id: string;
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const services: ServiceItem[] = [
  {
    id: "residential-solar-systems",
    number: "01.",
    title: "Residential Solar Systems",
    description:
      "Power your home with clean, renewable energy while significantly reducing monthly electricity bills. Our residential solar systems are designed for safety, efficiency, and long-term performance.",
    imageSrc: "/images/solar-residential.jpg",
    imageAlt: "Residential solar panels in warm sunlight",
  },
  {
    id: "commercial-solar-solutions",
    number: "02.",
    title: "Commercial Solar Solutions",
    description:
      "Lower operational expenses and improve energy efficiency with scalable solar systems tailored for commercial buildings, offices, institutions, and industrial facilities.",
    imageSrc: "/images/solar-residential.jpg",
    imageAlt: "Commercial solar installation with modern rooftop panels",
  },
  {
    id: "professional-installation",
    number: "03.",
    title: "Professional Installation",
    description:
      "Our skilled technicians ensure every installation is completed with precision, adhering to the highest safety and quality standards.",
    imageSrc: "/images/solar-residential.jpg",
    imageAlt: "Solar installation team working on rooftop panels",
  },
  {
    id: "maintenance-support",
    number: "04.",
    title: "Maintenance & Support",
    description:
      "Protect your investment with dependable maintenance services, performance monitoring, inspections, and technical support.",
    imageSrc: "/images/solar-residential.jpg",
    imageAlt: "Technician inspecting and maintaining a solar array",
  },
];

const ServiceSection = () => {
  const [activeId, setActiveId] = useState(services[0].id);
  const [loadedImageId, setLoadedImageId] = useState<string | null>(null);

  return (
    <section className={styles.section} aria-labelledby="services-heading">
      <div className={styles.shell}>
        <div className={`container ${styles.headerWrap}`}>
          <div className={styles.header}>
            <p className={styles.eyebrow}>Our Services</p>
            <h2 id="services-heading" className={styles.heading}>
              Complete Solar Solutions Under One Roof
            </h2>
          </div>
        </div>

        <div className={styles.accordion}>
          {services.map((service) => {
            const isActive = service.id === activeId;

            return (
              <article
                key={service.id}
                className={`${styles.item} ${
                  isActive ? styles.activeItem : styles.inactiveItem
                }`}
                style={{
                  flexBasis: isActive ? "69%" : "10.333%",
                }}
              >
                <button
                  id={`${service.id}-trigger`}
                  type="button"
                  className={`${styles.trigger} ${
                    isActive ? styles.activeTrigger : styles.inactiveTrigger
                  }`}
                  aria-expanded={isActive}
                  aria-controls={`${service.id}-panel`}
                  onClick={() => setActiveId(service.id)}
                >
                  <span className={styles.number}>{service.number}</span>
                  <span className={styles.title}>{service.title}</span>
                  {!isActive ? (
                    <span className={styles.tabHint} aria-hidden="true" />
                  ) : null}
                </button>

                {isActive ? (
                  <div
                    id={`${service.id}-panel`}
                    role="region"
                    aria-labelledby={`${service.id}-trigger`}
                    className={styles.panel}
                  >
                    <div className={styles.content}>
                      <p className={styles.description}>{service.description}</p>
                    </div>

                    <div className={styles.media}>
                      <div
                        className={styles.placeholderBackdrop}
                        aria-hidden="true"
                      >
                        <span className={styles.sunGlow} />
                        <span className={styles.panelLineOne} />
                        <span className={styles.panelLineTwo} />
                        <span className={styles.panelLineThree} />
                        <span className={styles.panelLineFour} />
                      </div>

                      <Image
                        key={service.id}
                        src={service.imageSrc}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 960px"
                        className={`${styles.image} ${
                          loadedImageId === service.id
                            ? styles.imageLoaded
                            : styles.imageLoading
                        }`}
                        onLoad={() => setLoadedImageId(service.id)}
                        onError={() => setLoadedImageId(null)}
                      />

                      <div className={styles.readMoreWrap}>
                        <a href="/contact" className={styles.readMore}>
                          <span className={styles.readMoreText}>Read More</span>
                          <span className={styles.readMoreIcon} aria-hidden="true">
                            <HiOutlineArrowRight />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
