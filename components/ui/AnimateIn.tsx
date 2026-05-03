'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimateInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'none';
}

export function AnimateIn({ children, delay = 0, className = '', direction = 'up' }: AnimateInProps) {
  const initial =
    direction === 'up' ? { opacity: 0, y: 32 }
    : direction === 'left' ? { opacity: 0, x: -32 }
    : direction === 'right' ? { opacity: 0, x: 32 }
    : { opacity: 0 };

  const animate =
    direction === 'up' ? { opacity: 1, y: 0 }
    : direction === 'left' ? { opacity: 1, x: 0 }
    : direction === 'right' ? { opacity: 1, x: 0 }
    : { opacity: 1 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
