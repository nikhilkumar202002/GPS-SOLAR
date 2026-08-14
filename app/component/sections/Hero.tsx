"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import homeBanner from "@/app/assets/banners/hero-banner-1.webp";
import homeBannerTwo from "@/app/assets/banners/hero-banner-2.webp";
import PrimaryButton from "../ui/PrimaryButton";
import { heroStyles as styles } from "./SectionStyles";

const MotionLink = motion.create(Link);

const heroEase = [0.22, 1, 0.36, 1] as const;

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
      ease: heroEase,
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
];

const PRELOADER_DONE_EVENT = "gps:preloader-finished";

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);

  useEffect(() => {
    const markReady = () => setIsPreloaderDone(true);

    if (document.body.dataset.preloaderReady === "true") {
      window.setTimeout(markReady, 0);
      return;
    }

    window.addEventListener(PRELOADER_DONE_EVENT, markReady);

    return () => {
      window.removeEventListener(PRELOADER_DONE_EVENT, markReady);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !isPreloaderDone || heroSlides.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(intervalId);
  }, [prefersReducedMotion, isPreloaderDone]);

  return (
    <section id="home" className={styles.section}>
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
                prefersReducedMotion || !isPreloaderDone
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
                      ease: heroEase,
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
          key={isPreloaderDone ? "hero-ready" : "hero-waiting"}
          className={styles.content}
          variants={containerVariants}
          initial={isPreloaderDone ? "hidden" : false}
          animate={isPreloaderDone ? "show" : undefined}
        >
          <motion.h1 className={styles.heading} variants={itemVariants}>
            Smart Solar Solutions for a Brighter Tomorrow
          </motion.h1>
          <motion.p className={styles.description} variants={itemVariants}>
            GPS Trades and Services delivers reliable solar solutions for homes and businesses, helping you reduce electricity costs with quality installation and sustainable energy.
          </motion.p>

          <div className={styles.actions}>
            <PrimaryButton
              href="/#contact"
              className={styles.primaryButtonOverride}
              variants={itemVariants}
            >
              Get a Free Quote
            </PrimaryButton>
            <MotionLink
              href="/#services"
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
