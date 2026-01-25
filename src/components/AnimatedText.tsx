"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: string;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  type?: "words" | "characters" | "lines";
  animation?: "fadeUp" | "fadeIn" | "slideUp" | "typewriter" | "wave" | "glitch";
}

const animations: Record<string, { container: Variants; child: Variants }> = {
  fadeUp: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.03,
          delayChildren: 0,
        },
      },
    },
    child: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
    },
  },
  fadeIn: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.02,
          delayChildren: 0,
        },
      },
    },
    child: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.3,
        },
      },
    },
  },
  slideUp: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.04,
          delayChildren: 0,
        },
      },
    },
    child: {
      hidden: { opacity: 0, y: 40, rotateX: -90 },
      visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
          type: "spring",
          damping: 15,
          stiffness: 100,
        },
      },
    },
  },
  typewriter: {
    container: {
      hidden: { opacity: 1 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
          delayChildren: 0,
        },
      },
    },
    child: {
      hidden: { opacity: 0, display: "none" },
      visible: {
        opacity: 1,
        display: "inline-block",
        transition: {
          duration: 0.01,
        },
      },
    },
  },
  wave: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
          delayChildren: 0,
        },
      },
    },
    child: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          damping: 10,
          stiffness: 200,
        },
      },
    },
  },
  glitch: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.02,
          delayChildren: 0,
        },
      },
    },
    child: {
      hidden: { opacity: 0, x: -10, skewX: 10 },
      visible: {
        opacity: 1,
        x: 0,
        skewX: 0,
        transition: {
          type: "spring",
          damping: 20,
          stiffness: 300,
        },
      },
    },
  },
};

const AnimatedText = ({
  children,
  className = "",
  delay = 0,
  staggerChildren,
  type = "words",
  animation = "fadeUp",
}: AnimatedTextProps) => {
  const selectedAnimation = animations[animation];

  // Apply custom stagger if provided
  const containerVariants: Variants = {
    ...selectedAnimation.container,
    visible: {
      ...selectedAnimation.container.visible,
      transition: {
        ...(selectedAnimation.container.visible as { transition?: object }).transition,
        staggerChildren:
          staggerChildren ??
          ((selectedAnimation.container.visible as { transition?: { staggerChildren?: number } }).transition
            ?.staggerChildren || 0.03),
        delayChildren: delay,
      },
    },
  };

  // Split text based on type
  const splitText = (): ReactNode[] => {
    if (type === "characters") {
      return children.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={selectedAnimation.child}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ));
    }

    if (type === "words") {
      return children.split(" ").map((word, index) => (
        <motion.span key={index} variants={selectedAnimation.child} className="inline-block mr-[0.25em]">
          {word}
        </motion.span>
      ));
    }

    if (type === "lines") {
      return children.split("\n").map((line, index) => (
        <motion.span key={index} variants={selectedAnimation.child} className="block">
          {line}
        </motion.span>
      ));
    }

    return [children];
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {splitText()}
    </motion.span>
  );
};

export default AnimatedText;
