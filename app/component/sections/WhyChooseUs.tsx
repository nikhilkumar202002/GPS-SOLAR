"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  HiOutlineBolt,
  HiOutlineBanknotes,
  HiOutlineShieldCheck,
  HiOutlineSun,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";

import homeBanner from "@/app/assets/banners/home-banner-1.webp";
import PrimaryButton from "../ui/PrimaryButton";
import styles from "./WhyChooseUs.module.css";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.58,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const features = [
  {
    title: "18+ Years of Expertise",
    text: "Industry experience that ensures reliable planning and flawless execution.",
    icon: HiOutlineShieldCheck,
  },
  {
    title: "Custom Solar Solutions",
    text: "Tailored systems designed to match your energy needs and property.",
    icon: HiOutlineSun,
  },
  {
    title: "Quality Installation",
    text: "Professional installation using trusted components for lasting performance.",
    icon: HiOutlineWrenchScrewdriver,
  },
  {
    title: "Complete Support",
    text: "From consultation to after-sales service, we&apos;re with you every step of the way.",
    icon: HiOutlineBolt,
  },
  {
    title: "Cost-Effective Savings",
    text: "Lower your electricity bills with efficient and sustainable solar energy while adding long-term value to your property.",
    icon: HiOutlineBanknotes,
  },
];

const WhyChooseUs = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.panel}>
          <motion.div
            className={styles.inner}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <motion.div className={styles.topRow} variants={itemVariants}>
              <div className={styles.topLeft}>
                <p className={styles.eyebrow}>Why Choose Us</p>
                <h2 className={styles.heading}>
                  Trusted Expertise. Reliable Solar Solutions.
                </h2>
              </div>

              <p className={styles.topDescription}>
                We deliver efficient, high-quality solar systems backed by experienced
                professionals, premium workmanship, and dedicated customer support,
                helping you save more while embracing clean energy.
              </p>
            </motion.div>

            <div className={styles.mainGrid}>
              <motion.div className={styles.content} variants={itemVariants}>
                <div className={styles.featureList}>
                  {features.map((feature) => {
                    const Icon = feature.icon;

                    return (
                      <article key={feature.title} className={styles.featureRow}>
                        <div className={styles.featureHeader}>
                          <span className={styles.featureIcon}>
                            <Icon />
                          </span>
                          <div className={styles.featureCopy}>
                            <h3 className={styles.featureTitle}>{feature.title}</h3>
                            <p className={styles.featureText}>{feature.text}</p>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>

                <div className={styles.actions}>
                  <PrimaryButton href="/contact">
                    Get a Free Quote
                  </PrimaryButton>
                </div>
              </motion.div>

              <motion.div className={styles.visual} variants={itemVariants}>
                <div className={styles.imageCard}>
                  
                  <Image
                    src={homeBanner}
                    alt="Solar technician standing in front of solar panels"
                    fill
                    sizes="(max-width: 980px) 100vw, 52vw"
                    className={styles.image}
                  />
             
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
