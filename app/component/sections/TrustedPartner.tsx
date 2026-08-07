"use client";

import { motion } from "motion/react";

import styles from "./TrustedPartner.module.css";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
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
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const TrustedPartner = () => {
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
            <motion.h2 className={styles.heading} variants={itemVariants}>
              Your Trusted Solar Energy Partner
            </motion.h2>

            <motion.p className={styles.description} variants={itemVariants}>
              At GPS Trades and Services, we believe solar energy should be
              accessible, reliable, and affordable. Every project is carefully
              planned and professionally installed to ensure long-term
              performance, maximum energy savings, and complete customer
              satisfaction.
              <br />
              <br />
              Whether you&apos;re powering your home or your business, our
              experienced team delivers customized solar solutions that meet
              your energy needs today and into the future.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartner;
