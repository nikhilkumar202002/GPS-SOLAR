"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { motion, type Variants } from "motion/react";

import styles from "./PrimaryButton.module.css";

const MotionLink = motion.create(Link as unknown as any);

type PrimaryButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  children: ReactNode;
  className?: string;
  variants?: Variants;
};

const PrimaryButton = ({
  children,
  className,
  variants,
  ...props
}: PrimaryButtonProps) => {
  const buttonClassName = className ? `${styles.button} ${className}` : styles.button;

  return (
    <MotionLink className={buttonClassName} variants={variants} {...props}>
      {children}
      <span className={styles.icon}>
        <HiArrowRight className={styles.arrowIcon} />
      </span>
    </MotionLink>
  );
};

export default PrimaryButton;
