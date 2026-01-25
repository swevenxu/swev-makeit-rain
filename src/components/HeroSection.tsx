"use client";

import { motion, Variants } from "framer-motion";
import CodeTerminal from "./CodeTerminal";
import AnimatedText from "./AnimatedText";

const HeroSection = () => {
  // Staggered animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 200,
      },
    },
  };

  const terminalVariants: Variants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 80,
        delay: 0.5,
      },
    },
  };

  return (
    <section
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-8 sm:px-16 lg:px-32 pt-24 pb-12 relative overflow-hidden gap-16"
      style={{
        backgroundImage:
          "linear-gradient(rgba(127, 124, 255, 0.05), rgba(79, 77, 232, 0.05), transparent)",
      }}
    >

      {/* Hero Content */}
      <motion.div
        className="max-w-xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Small intro text */}
        <motion.p
          className="text-white/60 text-lg mb-0"
          style={{ fontFamily: "'Expose', sans-serif" }}
          variants={itemVariants}
        >
          Hey, I'm
        </motion.p>

        {/* Main headline with character animation */}
        <motion.h1
          className="text-5xl sm:text-7xl lg:text-8xl leading-tight mb-0"
          variants={itemVariants}
        >
          <AnimatedText
            animation="wave"
            type="characters"
            delay={0.3}
            staggerChildren={0.03}
          >
            SWEVEN
          </AnimatedText>
        </motion.h1>

        {/* Tagline with word animation */}
        <motion.div variants={itemVariants}>
          <span className="swevline text-2xl sm:text-3xl text-white/80 mb-1 inline-block">
            I turn{" "}
            <motion.span
              className="text-[#7f7cff] inline-block"
              animate={{
                textShadow: [
                  "0 0 0px rgba(127, 124, 255, 0)",
                  "0 0 20px rgba(127, 124, 255, 0.5)",
                  "0 0 0px rgba(127, 124, 255, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              ideas
            </motion.span>{" "}
            into pixels & code
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-white/60 text-lg max-w-xl mb-6"
          style={{ fontFamily: "'Expose', sans-serif" }}
          variants={itemVariants}
        >
          Freelance developer crafting websites and web apps that look good and
          actually work.
        </motion.p>

        {/* CTA Buttons with stagger */}
        <motion.div
          className="flex flex-wrap gap-4"
          style={{ fontFamily: "'Expose', sans-serif" }}
          variants={containerVariants}
        >
          <motion.a
            href="#about"
            className="flex items-center justify-center px-6 py-3 bg-[#7f7cff] text-white rounded transition-all duration-300 relative overflow-hidden group"
            variants={buttonVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(127, 124, 255, 0.5)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Learn More</span>
            <motion.div
              className="absolute inset-0 bg-[#6e6cd6]"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          <motion.a
            href="#contact"
            className="flex items-center justify-center px-6 py-3 bg-transparent text-white border border-white/10 rounded transition-all duration-300"
            variants={buttonVariants}
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(127, 124, 255, 0.5)",
              boxShadow: "0 0 20px rgba(127, 124, 255, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="https://github.com/swevenxu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-3 bg-transparent text-white border border-white/10 rounded transition-all duration-300"
            variants={buttonVariants}
            whileHover={{
              scale: 1.1,
              rotate: 5,
              borderColor: "rgba(127, 124, 255, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-3 bg-transparent text-white border border-white/10 rounded transition-all duration-300"
            variants={buttonVariants}
            whileHover={{
              scale: 1.1,
              rotate: -5,
              borderColor: "rgba(127, 124, 255, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Code Terminal on the right */}
      <motion.div
        className="w-full lg:w-auto mt-8 lg:mt-0"
        variants={terminalVariants}
        initial="hidden"
        animate="visible"
      >
        <CodeTerminal />
      </motion.div>
    </section>
  );
};

export default HeroSection;
