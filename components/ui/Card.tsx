'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glassmorphism?: boolean;
}

export default function Card({ children, className = '', hover = true, glassmorphism = false }: CardProps) {
  const baseClasses = 'rounded-card p-8 transition-all duration-300';
  const glassClasses = glassmorphism ? 'glassmorphism' : 'bg-white premium-shadow';
  const hoverClasses = hover ? 'hover-lift' : '';
  
  const classes = `${baseClasses} ${glassClasses} ${hoverClasses} ${className}`;

  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}