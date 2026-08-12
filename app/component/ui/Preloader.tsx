"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import logoMain from "@/app/assets/logo-main.png";

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
    <div className="ui-preloader-overlay" role="status" aria-label="Loading homepage">
      <div className="ui-preloader-content">
        <div className="ui-preloader-logo-wrap">
          <Image
            src={logoMain}
            alt="GPS Solar Solutions"
            width={180}
            height={180}
            priority
            className="ui-preloader-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
