"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

import homeBanner from "@/app/assets/banners/home-banner-1.webp";
import PrimaryButton from "../ui/PrimaryButton";
import styles from "./Hero.module.css";

const MotionLink = motion(Link);

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Hero = () => {
  return (
    <section className={styles.section}>
      <Image
        src={homeBanner}
        alt="Solar technician inspecting solar panels"
        fill
        priority
        className={styles.background}
        sizes="100vw"
      />

      <div className={`container ${styles.shell}`}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h1 className={styles.heading} variants={itemVariants}>
            Smart Solar Solutions for a Brighter Tomorrow
          </motion.h1>
          <motion.p className={styles.description} variants={itemVariants}>
            GPS Trades and Services delivers reliable solar solutions for homes and businesses, helping you reduce electricity costs with quality installation and sustainable energy.
          </motion.p>

          <div className={styles.actions}>
            <PrimaryButton
              href="/get-free-quote"
              className={styles.primaryButtonOverride}
              variants={itemVariants}
            >
              Get a Free Quote
            </PrimaryButton>
            <MotionLink
              href="/contact"
              className={styles.secondaryButton}
              variants={itemVariants}
            >
              Book a Site Inspection
            </MotionLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
