"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

import logoMain from "@/app/assets/logo-main.png";
import logoWhite from "@/app/assets/logo-white.png";
import menuList, { type MenuItem } from "@/app/data/menuList";
import PrimaryButton from "../ui/PrimaryButton";

const headerEase = [0.22, 1, 0.36, 1] as const;

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
const DESKTOP_MENU_BREAKPOINT = 1024;

const Header = () => {
  const [mode, setMode] = useState<HeaderMode>("top");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= DESKTOP_MENU_BREAKPOINT) {
        setIsMobileMenuOpen(false);
        setExpandedMobileItem(null);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        setExpandedMobileItem(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

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
      : "rounded-full border border-black/5 bg-white/95 p-[12px] text-[var(--color-charcoal)] shadow-[0_18px_40px_rgba(0,0,0,0.12)] backdrop-blur-md",
  ].join(" ");

  const linkClassName = isTopMode
    ? "block rounded-full bg-white/10 px-4 py-1.5 transition hover:bg-white/20 group-first:bg-[var(--color-gold)] group-first:text-[var(--color-charcoal)]"
    : "block rounded-full bg-black/5 px-4 py-1.5 transition hover:bg-black/10 group-first:bg-[var(--color-gold)] group-first:text-[var(--color-charcoal)]";

  const mobileButtonClassName = isTopMode
    ? "inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70 lg:hidden"
    : "inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/5 text-[var(--color-charcoal)] transition hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)] lg:hidden";

  const mobilePanelClassName = [
    "absolute left-0 right-0 top-full z-40 mt-3 lg:hidden",
    "rounded-[28px] border border-black/5 bg-white/95 p-4 text-[var(--color-charcoal)] shadow-[0_18px_40px_rgba(0,0,0,0.12)] backdrop-blur-md",
  ].join(" ");

  const mobileMenuItemBaseClassName =
    "flex items-center justify-between gap-3 rounded-2xl px-4 py-3 transition";

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setExpandedMobileItem(null);
  };

  return (
    <header className={shellClassName}>
      <div className="container">
        <div className="relative">
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
                    ? "h-auto w-[74px] object-contain"
                    : "h-auto w-[60px] object-contain"
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
                    <Link href={item.href} className={linkClassName}>
                      {item.label}
                    </Link>

                    {item.children && (
                      <ul className="invisible absolute left-0 top-full z-10 mt-2 min-w-52 rounded-xl bg-white p-2 text-slate-700 opacity-0 transition group-hover:visible group-hover:opacity-100">
                        {item.children?.map((child) => (
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

            <div className="hidden text-[16px] font-medium lg:block">
              <PrimaryButton href="/contact">Contact Us</PrimaryButton>
            </div>

            <button
              type="button"
              className={mobileButtonClassName}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => {
                setIsMobileMenuOpen((current) => !current);
                setExpandedMobileItem(null);
              }}
            >
              {isMobileMenuOpen ? (
                <FiX className="h-5 w-5" aria-hidden="true" />
              ) : (
                <FiMenu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>

          {isMobileMenuOpen && (
            <motion.div
              id="mobile-navigation"
              className={mobilePanelClassName}
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.25, ease: headerEase }}
            >
              <nav aria-label="Mobile navigation">
                <ul className="space-y-2">
                  {desktopMenu.map((item) => {
                    const hasChildren = Boolean(item.children?.length);
                    const isExpanded = expandedMobileItem === item.label;

                    return (
                      <li key={item.label} className="rounded-2xl bg-black/[0.02]">
                        <div className={mobileMenuItemBaseClassName}>
                          <Link
                            href={item.href}
                            className="min-w-0 flex-1 py-0.5 text-[16px] font-medium text-[var(--color-charcoal)]"
                            onClick={closeMobileMenu}
                          >
                            {item.label}
                          </Link>

                          {hasChildren && (
                            <button
                              type="button"
                              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--color-charcoal)] shadow-sm transition hover:bg-[rgba(var(--color-gold-rgb),0.12)]"
                              aria-label={
                                isExpanded
                                  ? `Collapse ${item.label} submenu`
                                  : `Expand ${item.label} submenu`
                              }
                              aria-expanded={isExpanded}
                              onClick={() =>
                                setExpandedMobileItem((current) =>
                                  current === item.label ? null : item.label,
                                )
                              }
                            >
                              <FiChevronDown
                                className={[
                                  "h-4 w-4 transition-transform duration-200",
                                  isExpanded ? "rotate-180" : "rotate-0",
                                ].join(" ")}
                                aria-hidden="true"
                              />
                            </button>
                          )}
                        </div>

                        {hasChildren && isExpanded && (
                          <ul className="space-y-1 border-t border-black/5 px-4 py-3">
                            {item.children?.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  className="block rounded-xl px-3 py-2 text-[15px] text-[rgba(35,31,32,0.72)] transition hover:bg-[rgba(var(--color-gold-rgb),0.1)] hover:text-[var(--color-charcoal)]"
                                  onClick={closeMobileMenu}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-4">
                  <PrimaryButton href="/contact" className="w-full justify-center">
                    Contact Us
                  </PrimaryButton>
                </div>
              </nav>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
