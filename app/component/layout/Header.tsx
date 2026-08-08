"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logoMain from "@/app/assets/logo-main.png";
import logoWhite from "@/app/assets/logo-white.png";
import menuList, { type MenuItem } from "@/app/data/menuList";
import PrimaryButton from "../ui/PrimaryButton";

const desktopMenuLabels = [
  "Home",
  "Services",
  "Projects",
  "About Us",
  "Why Solar",
];
const desktopMenu = desktopMenuLabels
  .map((label) => menuList.find((item) => item.label === label))
  .filter((item): item is MenuItem => item !== undefined);

type HeaderMode = "top" | "sticky" | "hidden";

const TOP_RESET_THRESHOLD = 36;
const STICKY_ACTIVATION_THRESHOLD = 96;
const SCROLL_DELTA_THRESHOLD = 6;

const Header = () => {
  const [mode, setMode] = useState<HeaderMode>("top");
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      const isNearTop = currentY <= TOP_RESET_THRESHOLD;
      const isScrollingDown = delta > SCROLL_DELTA_THRESHOLD;
      const isScrollingUp = delta < -SCROLL_DELTA_THRESHOLD;

      setMode((currentMode) => {
        if (isNearTop) {
          return "top";
        }

        if (isScrollingUp && currentY > STICKY_ACTIVATION_THRESHOLD) {
          return "sticky";
        }

        if (isScrollingDown) {
          return "hidden";
        }

        if (currentMode === "hidden") {
          return currentY > STICKY_ACTIVATION_THRESHOLD ? "hidden" : "top";
        }

        return currentY > STICKY_ACTIVATION_THRESHOLD ? "sticky" : "top";
      });

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isTopMode = mode === "top";
  const isHiddenMode = mode === "hidden";
  const shellClassName = [
    isTopMode ? "absolute inset-x-0 top-0 z-20 text-white" : "fixed inset-x-0 top-3 z-30",
    "transition-[transform,opacity] duration-300 ease-out",
    isHiddenMode ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100",
  ].join(" ");

  const barClassName = [
    "flex items-center justify-between gap-5",
    isTopMode
      ? "py-[15px]"
      : "rounded-full border border-black/5 bg-white/95 p-[25px] text-[var(--color-charcoal)] shadow-[0_18px_40px_rgba(0,0,0,0.12)] backdrop-blur-md",
  ].join(" ");

  const linkClassName = isTopMode
    ? "block rounded-full bg-white/10 px-4 py-1.5 transition hover:bg-white/20 group-first:bg-[var(--color-gold)] group-first:text-[var(--color-charcoal)]"
    : "block rounded-full bg-black/5 px-4 py-1.5 transition hover:bg-black/10 group-first:bg-[var(--color-gold)] group-first:text-[var(--color-charcoal)]";

  return (
    <header className={shellClassName}>
      <div className="container">
        <div className={barClassName}>
        <Link
          href="/"
          aria-label="GPS Solar Solutions home"
          className="shrink-0"
        >
          <Image
            src={isTopMode ? logoWhite : logoMain}
            alt="GPS Solar Solutions"
            width={120}
            height={120}
            className={
              isTopMode
                ? "h-auto w-[80px] object-contain"
                : "h-auto w-[72px] object-contain"
            }
            priority={isTopMode}
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden flex-1 justify-center lg:flex"
        >
          <ul className="flex items-center gap-1 text-[16px] font-medium">
            {desktopMenu.map((item) => (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={linkClassName}
                >
                  {item.label}
                </Link>

                {item.children && (
                  <ul className="invisible absolute left-0 top-full z-10 mt-2 min-w-52 rounded-xl bg-white p-2 text-slate-700 opacity-0  transition group-hover:visible group-hover:opacity-100">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-lg px-3 py-2 text-[17px] hover:bg-[rgba(var(--color-gold-rgb),0.12)] hover:text-[var(--color-charcoal)]"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-[16px] font-medium">
          <PrimaryButton href="/contact">Contact Us</PrimaryButton>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
