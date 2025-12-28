"use client";

import { motion } from "motion/react";

type Props = {
  children: React.ReactNode;
  delay?: number;
};

export function Reveal({ children, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  );
}
