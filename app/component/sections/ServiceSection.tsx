"use client";

import { useState } from "react";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { homeServiceData } from "@/app/data/serviceData";
import styles from "./ServiceSection.module.css";

const ServiceSection = () => {
  const [activeId, setActiveId] = useState(homeServiceData[0].id);

  return (
    <section className={styles.section} aria-labelledby="services-heading">
      <div className={styles.shell}>
        <div className={`container ${styles.headerWrap}`}>
          <div className={styles.header}>
            <p className={styles.eyebrow}>Our Services</p>
            <h2 id="services-heading" className={styles.heading}>
              Complete Solar Solutions
              <br />
              Under One Roof
            </h2>
          </div>
        </div>

        <div className={styles.accordion}>
          {homeServiceData.map((service) => {
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
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 960px"
                        className={styles.image}
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
