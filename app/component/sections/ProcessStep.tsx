"use client";

import { useState } from "react";

import styles from "./ProcessStep.module.css";

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

const ProcessStep = () => {
  const [activeStep, setActiveStep] = useState(2);

  return (
    <section className={styles.section} aria-labelledby="process-heading">
      <div className="container">
        <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Our Process</p>
          <h2 id="process-heading" className={styles.heading}>
            From Consultation to
            <br />
            Clean Energy Made Simple
          </h2>
        </div>

        <ul className={styles.grid} role="list">
          {processSteps.map((step, index) => {
            const isActive = index === activeStep;

            return (
              <li key={step.number} className={styles.gridItem}>
                <button
                  type="button"
                  className={`${styles.card} ${
                    isActive ? styles.cardActive : styles.cardInactive
                  }`}
                  aria-pressed={isActive}
                  onClick={() => setActiveStep(index)}
                >
                  <span className={styles.stepWord} aria-hidden="true">
                    STEP
                  </span>
                  <span className={styles.number}>{step.number}.</span>

                  <div className={styles.copy}>
                    <h3 className={styles.title}>{step.title}</h3>
                    <p className={styles.description}>{step.description}</p>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
        </div>
      </div>
    </section>
  );
};

export default ProcessStep;
