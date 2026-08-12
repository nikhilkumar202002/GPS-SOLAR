"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { HiOutlineArrowRight } from "react-icons/hi2";

import { homeServiceData } from "@/app/data/serviceData";
import PrimaryButton from "../ui/PrimaryButton";
import styles from "./ServiceSection.module.css";

const sectionEase = [0.22, 1, 0.36, 1] as const;
const exitEase = [0.4, 0, 0.2, 1] as const;

const sectionVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: sectionEase,
    },
  },
};

const panelVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: sectionEase,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.985,
    transition: {
      duration: 0.28,
      ease: exitEase,
    },
  },
};

const ServiceSection = () => {
  const [activeId, setActiveId] = useState(homeServiceData[0].id);

  return (
    <motion.section
      className={styles.section}
      aria-labelledby="services-heading"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
    >
      <div className={styles.shell}>
        <div className={`container ${styles.headerWrap}`}>
          <motion.div className={styles.header} variants={fadeUpVariants}>
            <p className={styles.eyebrow}>Our Services</p>
            <h2 id="services-heading" className={styles.heading}>
              Complete Solar Solutions
              <br />
              Under One Roof
            </h2>
          </motion.div>
        </div>

        <motion.div className={styles.accordion} variants={fadeUpVariants}>
          {homeServiceData.map((service) => {
            const isActive = service.id === activeId;

            return (
              <motion.article
                key={service.id}
                className={`${styles.item} ${
                  isActive ? styles.activeItem : styles.inactiveItem
                }`}
                style={{
                  flexBasis: isActive ? "69%" : "10.333%",
                }}
                layout
                transition={{ duration: 0.55, ease: sectionEase }}
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

                <AnimatePresence initial={false} mode="wait">
                  {isActive ? (
                      <motion.div
                        key={service.id}
                        id={`${service.id}-panel`}
                        role="region"
                        aria-labelledby={`${service.id}-trigger`}
                        className={styles.panel}
                        variants={panelVariants}
                        initial="hidden"
                        animate="show"
                        exit="exit"
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
                            <span
                              className={styles.readMoreIcon}
                              aria-hidden="true"
                            >
                              <HiOutlineArrowRight />
                            </span>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div className={styles.ctaWrap} variants={fadeUpVariants}>
          <PrimaryButton href="/services" className={styles.primaryCta}>
            View All Services
          </PrimaryButton>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServiceSection;
