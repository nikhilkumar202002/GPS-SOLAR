"use client";

import Image from "next/image";
import { motion } from "motion/react";

import homeBanner from "@/app/assets/banners/home-banner-1.webp";
import PrimaryButton from "../ui/PrimaryButton";
import styles from "./AboutUs.module.css";

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
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const AboutUs = () => {
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
            <motion.div className={styles.visual} variants={itemVariants}>
              <div className={styles.imageCard}>
                <div className={styles.imageGlow} aria-hidden="true" />
                <Image
                  src={homeBanner}
                  alt="Solar technician holding a tablet near solar panels"
                  fill
                  className={styles.image}
                />
              </div>
            </motion.div>

            <motion.div className={styles.content} variants={itemVariants}>
             
              <h2 className={styles.heading}>
                Building a Sustainable Tomorrow with Solar Energy
              </h2>
              <p className={styles.description}>
                GPS Trades and Services is a trusted solar installation company
                dedicated to delivering efficient, affordable, and environmentally
                responsible solar energy solutions. Our mission is to empower
                homeowners and businesses with renewable energy systems that reduce
                electricity costs while supporting a greener future.
              </p>
              <p className={styles.description}>
                Driven by innovation, technical expertise, and a customer-first
                approach, we focus on delivering quality workmanship, reliable
                service, and long-term value in every project we undertake.
              </p>

              <div className={styles.actions}>
                <PrimaryButton href="/contact">
                  Read More
                </PrimaryButton>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
