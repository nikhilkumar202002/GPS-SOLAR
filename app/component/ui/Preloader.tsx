"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import logoMain from "@/app/assets/logo-main.png";
import styles from "./Preloader.module.css";

const PRELOADER_DURATION = 3000;

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = originalOverflow;
    }, PRELOADER_DURATION);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.overlay} role="status" aria-label="Loading homepage">
      <div className={styles.content}>
        <div className={styles.logoWrap}>
          <Image
            src={logoMain}
            alt="GPS Solar Solutions"
            width={180}
            height={180}
            priority
            className={styles.logo}
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
