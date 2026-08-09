"use client";

import { motion, useReducedMotion } from "motion/react";
import type { IconType } from "react-icons";
import { FaHandshake, FaHeart } from "react-icons/fa";
import {
  MdEnergySavingsLeaf,
  MdVerifiedUser,
  MdWorkspacePremium,
} from "react-icons/md";

import styles from "./CoreValues.module.css";

type ValueItem = {
  title: string;
  description: string;
  icon: IconType;
};

const values: ValueItem[] = [
  {
    title: "Trust",
    description:
      "Building long-lasting relationships through honesty and transparency.",
    icon: FaHandshake,
  },
  {
    title: "Quality",
    description: "Delivering workmanship that exceeds industry standards.",
    icon: MdWorkspacePremium,
  },
  {
    title: "Integrity",
    description: "Doing the right thing in every project we undertake.",
    icon: MdVerifiedUser,
  },
  {
    title: "Sustainability",
    description:
      "Supporting a cleaner and greener future through renewable energy.",
    icon: MdEnergySavingsLeaf,
  },
  {
    title: "Customer Commitment",
    description:
      "Putting our customers' needs at the heart of everything we do.",
    icon: FaHeart,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const CoreValues = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className={styles.section} aria-label="Our Values">
      <div className="container">
        <motion.ul
          className={styles.valuesList}
          variants={containerVariants}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.28 }}
        >
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <motion.li
                key={value.title}
                className={styles.valueItem}
                variants={itemVariants}
              >
                <span className={styles.iconWrap} aria-hidden="true">
                  <Icon className={styles.icon} />
                </span>

                <div className={styles.copy}>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDescription}>{value.description}</p>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
};

export default CoreValues;
