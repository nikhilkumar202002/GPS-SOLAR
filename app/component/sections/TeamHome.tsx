"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import gowriPortrait from "@/app/assets/teams/Gowri.webp";
import premPortrait from "@/app/assets/teams/prem-kumar.webp";
import PrimaryButton from "../ui/PrimaryButton";
import { teamHomeStyles as styles } from "./SectionStyles";

const sectionEase = [0.22, 1, 0.36, 1] as const;

type Leader = {
  name: string;
  role: string;
  description: string;
  image: typeof gowriPortrait;
  alt: string;
};

const leaders: Leader[] = [
  {
    name: "Gowri P. S.",
    role: "Proprietor",
    description:
      "Providing strategic leadership and guiding the company's vision for sustainable growth, customer satisfaction, and excellence in solar energy solutions.",
    image: gowriPortrait,
    alt: "Portrait of Gowri P. S., Proprietor at GPS Trades and Services",
  },
  {
    name: "J. P. Prem Kumar",
    role: "General Manager",
    description:
      "With over 18 years of hands-on industry experience, he oversees project planning, installation, quality assurance, and daily operations, ensuring every project meets the highest standards.",
    image: premPortrait,
    alt: "Portrait of J. P. Prem Kumar, General Manager at GPS Trades and Services",
  },
];

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
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.62,
      ease: sectionEase,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (delayIndex: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.68,
      delay: delayIndex * 0.1,
      ease: sectionEase,
    },
  }),
};

const TeamHome = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className={styles.section} aria-labelledby="leadership-heading">
      <div className="container">
        <div className={styles.inner}>
          <motion.div
            className={styles.copy}
            variants={sectionVariants}
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView={prefersReducedMotion ? undefined : "show"}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              id="leadership-heading"
              className={styles.heading}
              variants={fadeUpVariants}
            >
              <span className={styles.headingLine}>Leadership That</span>
              <span className={styles.headingLine}>
                <span className={styles.accent}>Drives</span> Excellence
              </span>
            </motion.h2>

            <motion.div variants={fadeUpVariants} className={styles.actions}>
              <PrimaryButton href="/contact">Get a Quote</PrimaryButton>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.cards}
            variants={sectionVariants}
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView={prefersReducedMotion ? undefined : "show"}
            viewport={{ once: true, amount: 0.22 }}
          >
            {leaders.map((leader, index) => (
              <motion.article
                key={leader.name}
                className={styles.card}
                custom={index}
                variants={cardVariants}
                aria-label={`${leader.name}, ${leader.role}. ${leader.description}`}
              >
                <div className={styles.cardMedia}>
                  <Image
                    src={leader.image}
                    alt={leader.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1199px) 40vw, 350px"
                    className={styles.cardImage}
                  />
                  <div className={styles.cardOverlay} aria-hidden="true" />

                  <div className={styles.cardMeta}>
                    <h3 className={styles.cardName}>{leader.name}</h3>
                    <p className={styles.cardRole}>{leader.role}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamHome;
