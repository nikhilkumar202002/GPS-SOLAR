"use client";

import styles from "./ProcessStep.module.css";
import { motion } from "motion/react";

type ProcessItem = {
  number: string;
  title: string;
  description: string;
};

const processSteps: ProcessItem[] = [
  {
    number: "01",
    title: "Consultation & Site Survey",
    description:
      "We understand your energy needs and assess your property for the right solar solution.",
  },
  {
    number: "02",
    title: "Design & Proposal",
    description:
      "Our team designs a customized system and provides a clear, transparent proposal.",
  },
  {
    number: "03",
    title: "Professional Installation",
    description:
      "Our experts install and configure your solar system with precision and safety.",
  },
  {
    number: "04",
    title: "Testing & Ongoing Support",
    description:
      "We test the system for optimal performance and continue to support you after installation.",
  },
];

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
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
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

const ProcessStep = () => {
  return (
    <motion.section
      className={styles.section}
      aria-labelledby="process-heading"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
    >
      <div className="container">
        <div className={styles.inner}>
          <motion.div className={styles.header} variants={itemVariants}>
            <p className={styles.eyebrow}>Our Process</p>
            <h2 id="process-heading" className={styles.heading}>
              From Consultation to
              <br />
              Clean Energy Made Simple
            </h2>
          </motion.div>

          <motion.ul className={styles.grid} role="list" variants={containerVariants}>
            {processSteps.map((step) => (
              <motion.li key={step.number} className={styles.gridItem} variants={itemVariants}>
                <button type="button" className={styles.card}>
                  <span className={styles.stepWord} aria-hidden="true">
                    STEP
                  </span>
                  <span className={styles.number}>{step.number}.</span>

                  <div className={styles.copy}>
                    <h3 className={styles.title}>{step.title}</h3>
                    <p className={styles.description}>{step.description}</p>
                  </div>
                </button>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.section>
  );
};

export default ProcessStep;
