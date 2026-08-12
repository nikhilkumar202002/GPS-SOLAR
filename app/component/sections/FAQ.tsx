"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineChevronDown,
} from "react-icons/hi2";
import styles from "./FAQ.module.css";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "How long does a solar installation usually take?",
    answer:
      "Most residential installations are completed in a few days once the design, approvals, and materials are ready. The timeline can vary depending on roof type, system size, and local approvals.",
  },
  {
    question: "Will solar work during power cuts or at night?",
    answer:
      "Solar panels produce power only when the sun is available. If you want backup during outages or after sunset, we can recommend battery storage or hybrid system options based on your needs.",
  },
  {
    question: "How much money can I save with solar?",
    answer:
      "Savings depend on your monthly usage, roof space, and the size of the system you install. We help calculate the expected bill reduction and payback period before you commit to a project.",
  },
  {
    question: "Do you handle permits and maintenance support?",
    answer:
      "Yes. We guide you through the installation process, coordinate the needed paperwork, and offer after-sales support so your system keeps performing reliably over time.",
  },
  {
    question: "Is financing or a payment plan available?",
    answer:
      "Financing options can be discussed during your consultation. We’ll help you understand the available choices so you can select the setup that fits your budget and energy goals.",
  },
  {
    question: "What kind of warranty do you provide?",
    answer:
      "Warranty coverage depends on the equipment selected, but we work with trusted components and stand behind the quality of our installation and support.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
    },
  },
};

const panelVariants = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  show: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.3 },
      opacity: { duration: 0.2 },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.24 },
      opacity: { duration: 0.15 },
    },
  },
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className={styles.section} aria-labelledby="faq-heading">
      <div className="container">
        <motion.div
          className={styles.shell}
          variants={containerVariants}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div className={styles.copyBlock} variants={fadeUpVariants}>
            <p className={styles.eyebrow}>FAQs</p>
            <h2 id="faq-heading" className={styles.heading}>
              Answers to the questions customers ask most
            </h2>
          </motion.div>

          <motion.div className={styles.accordion} variants={containerVariants}>
            {faqs.map((faq, index) => {
              const isOpen = index === activeIndex;

              return (
                <motion.article
                  key={faq.question}
                  className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
                  variants={itemVariants}
                >
                  <button
                    type="button"
                    className={styles.trigger}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-trigger-${index}`}
                    onClick={() =>
                      setActiveIndex((current) => (current === index ? -1 : index))
                    }
                  >
                    <span className={styles.questionWrap}>
                      <span className={styles.questionIcon} aria-hidden="true">
                        <HiOutlineChatBubbleLeftRight />
                      </span>
                      <span className={styles.question}>{faq.question}</span>
                    </span>

                    <span
                      className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
                      aria-hidden="true"
                    >
                      <HiOutlineChevronDown />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key={faq.question}
                        id={`faq-panel-${index}`}
                        role="region"
                        aria-labelledby={`faq-trigger-${index}`}
                        className={styles.panel}
                        variants={panelVariants}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                      >
                        <div className={styles.answer}>
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
