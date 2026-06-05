"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export const MotionDiv = motion.div;
export const MotionSection = motion.section;

export function FadeIn({
  children,
  className = "",
  delay = 0,
  immediate = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean;
}) {
  return (
    <motion.div
      initial={immediate ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MetricCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 26, stiffness: 70 });
  const rounded = useTransform(springValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${latest}${suffix}`;
      }
    });
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}
