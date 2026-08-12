"use client";

import type { ComponentPropsWithoutRef, ComponentType, ReactNode } from "react";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { motion, type Variants } from "motion/react";

const MotionLink = motion.create(Link) as unknown as ComponentType<
  ComponentPropsWithoutRef<typeof Link> & {
    children: ReactNode;
    className?: string;
    variants?: Variants;
  }
>;

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
  const buttonClassName = className
    ? `ui-primary-button ${className}`
    : "ui-primary-button";

  return (
    <MotionLink className={buttonClassName} variants={variants} {...props}>
      {children}
      <span className="ui-primary-button-icon">
        <HiArrowRight className="ui-primary-button-arrow" />
      </span>
    </MotionLink>
  );
};

export default PrimaryButton;
