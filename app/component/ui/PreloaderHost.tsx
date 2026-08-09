"use client";

import { usePathname } from "next/navigation";

import Preloader from "./Preloader";

const PreloaderHost = () => {
  const pathname = usePathname();

  if (pathname !== "/") {
    return null;
  }

  return <Preloader key={pathname} />;
};

export default PreloaderHost;
