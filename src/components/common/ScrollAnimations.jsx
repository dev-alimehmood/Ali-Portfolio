import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reveal from bottom to top when scrolled into view
 */
export const RevealBottom = ({
  children,
  delay = 0,
  duration = 0.7,
  distance = 50,
  once = true,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1.0]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Reveal from right to left when scrolled into view
 */
export const RevealRight = ({
  children,
  delay = 0,
  duration = 0.7,
  distance = 60,
  once = true,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: distance }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1.0]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Parent container for staggered children elements
 */
export const StaggerContainer = ({
  children,
  staggerChildren = 0.12,
  delayChildren = 0,
  once = true,
  className = ''
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-50px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Stagger item coming from bottom
 */
export const StaggerItemBottom = ({
  children,
  distance = 40,
  duration = 0.6,
  className = ''
}) => {
  const itemVariants = {
    hidden: { opacity: 0, y: distance },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.215, 0.61, 0.355, 1.0]
      }
    }
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

/**
 * Stagger item coming from right
 */
export const StaggerItemRight = ({
  children,
  distance = 50,
  duration = 0.6,
  className = ''
}) => {
  const itemVariants = {
    hidden: { opacity: 0, x: distance },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration,
        ease: [0.215, 0.61, 0.355, 1.0]
      }
    }
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

/**
 * Reveal with scale & fade animation
 */
export const RevealScale = ({
  children,
  delay = 0,
  duration = 0.6,
  initialScale = 0.85,
  once = true,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: initialScale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1.0]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Reveal from left to right when scrolled into view
 */
export const RevealLeft = ({
  children,
  delay = 0,
  duration = 0.7,
  distance = 60,
  once = true,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -distance }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1.0]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Word by Word Reveal Animation
 */
export const TextWordReveal = ({
  text = '',
  className = '',
  delay = 0,
  stagger = 0.04
}) => {
  const words = text.split(' ');
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay
      }
    }
  };
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { ease: 'easeOut', duration: 0.4 }
    }
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      className={`inline-block ${className}`}
    >
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          variants={wordVariants}
          className="inline-block mr-[0.28em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};
