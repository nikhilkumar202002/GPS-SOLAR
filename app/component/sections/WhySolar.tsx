"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { IconType } from "react-icons";
import {
  MdBuild,
  MdEco,
  MdElectricBolt,
  MdSolarPower,
} from "react-icons/md";

import solarBanner from "@/app/assets/service/professional-installation.webp";
import styles from "./WhySolar.module.css";

const sectionEase = [0.22, 1, 0.36, 1] as const;

type BenefitItem = {
  icon: IconType;
  title: string;
  description: string;
};

const benefits: BenefitItem[] = [
  {
    icon: MdElectricBolt,
    title: "Reduce Electricity Bills",
    description:
      "Generate your own electricity and enjoy substantial savings every month.",
  },
  {
    icon: MdBuild,
    title: "Lower Maintenance Costs",
    description:
      "Solar systems require minimal maintenance, helping you save more over the long term.",
  },
  {
    icon: MdEco,
    title: "Clean & Sustainable Energy",
    description:
      "Switch to clean renewable energy and reduce your environmental impact.",
  },
  {
    icon: MdSolarPower,
    title: "Energy Independence",
    description:
      "Generate your own power and reduce your dependence on rising electricity prices.",
  },
];

const staggerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
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
      duration: 0.62,
      ease: sectionEase,
    },
  },
};

const WhySolar = () => {
  return (
    <section className={styles.section} aria-labelledby="why-solar-heading">
      <div className={styles.heroStage}>
        <Image
          src={solarBanner}
          alt="Solar installation team working beside a solar array"
          fill
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.overlay} />

        <div className={styles.heroShell}>
          <div className="container">
            <motion.div
              className={styles.heroCopy}
              variants={staggerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.45 }}
            >
              <motion.p className={styles.eyebrow} variants={fadeUpVariants}>
                Why Go Solar?
              </motion.p>

              <motion.h2
                id="why-solar-heading"
                className={styles.heading}
                variants={fadeUpVariants}
              >
                <span className={styles.highlight}>Invest</span> Once.{" "}
                <span className={styles.highlight}>Save</span> for Years.
              </motion.h2>

              <motion.h3 className={styles.subheading} variants={fadeUpVariants}>
                Reduce Electricity Bills
              </motion.h3>

              <motion.p className={styles.description} variants={fadeUpVariants}>
                Generate your own electricity and enjoy substantial savings every month.
              </motion.p>
            </motion.div>
          </div>
        </div>

      </div>

      <div className="container">
        <div className={styles.cardsShell}>
          <motion.ul
            className={styles.cards}
            role="list"
            variants={staggerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <motion.li
                  key={benefit.title}
                  className={styles.cardItem}
                  variants={fadeUpVariants}
                >
                  <article className={styles.card}>
                    <span className={styles.iconBox} aria-hidden="true">
                      <Icon className={styles.icon} />
                    </span>

                    <h3 className={styles.cardTitle}>{benefit.title}</h3>
                    <p className={styles.cardDescription}>{benefit.description}</p>
                  </article>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default WhySolar;
