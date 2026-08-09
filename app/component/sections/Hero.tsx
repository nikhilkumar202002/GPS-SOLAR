"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import homeBanner from "@/app/assets/banners/home-banner-1.webp";
import homeBannerTwo from "@/app/assets/banners/home-banner-2.webp";
import homeBannerThree from "@/app/assets/banners/home-banner-3.webp";
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

const heroSlides = [
  {
    src: homeBanner,
    alt: "Solar technician inspecting solar panels",
  },
  {
    src: homeBannerTwo,
    alt: "Solar panels installed on a modern rooftop",
  },
  {
    src: homeBannerThree,
    alt: "Solar installation team working on a rooftop solar array",
  },
];

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion || heroSlides.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(intervalId);
  }, [prefersReducedMotion]);

  return (
    <section className={styles.section}>
      <div className={styles.backgroundStack} aria-hidden="true">
        {heroSlides.map((slide, index) => {
          const isActive = index === activeSlide;
          const isPrevious =
            index === (activeSlide - 1 + heroSlides.length) % heroSlides.length;

          return (
            <motion.div
              key={slide.alt}
              className={styles.backgroundFrame}
              initial={false}
              animate={
                prefersReducedMotion
                  ? { opacity: isActive ? 1 : 0 }
                  : {
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : isPrevious ? 1.08 : 1.12,
                    }
              }
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : {
                      duration: 1.05,
                      ease: [0.22, 1, 0.36, 1],
                    }
              }
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                className={styles.background}
                sizes="100vw"
              />
            </motion.div>
          );
        })}
      </div>

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
