"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const codeLines = [
  { text: "const developer = {", color: "text-[#7f7cff]" },
  { text: '  name: "Sweven",', color: "text-white/80" },
  { text: '  role: "Full-Stack Dev",', color: "text-white/80" },
  { text: "  skills: [", color: "text-white/80" },
  { text: '    "React",', color: "text-green-400" },
  { text: '    "Next.js",', color: "text-green-400" },
  { text: '    "TypeScript"', color: "text-green-400" },
  { text: "  ],", color: "text-white/80" },
  { text: "  available: true", color: "text-yellow-400" },
  { text: "};", color: "text-[#7f7cff]" },
];

const CodeTerminal = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines((v) => v + 1);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  // Cursor blink effect with variation
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full lg:w-[450px]">
      {/* Terminal window */}
      <motion.div
        className="bg-[#0d0d1a] border border-white/10 rounded-lg overflow-hidden shadow-2xl"
        whileHover={{
          borderColor: "rgba(127, 124, 255, 0.3)",
          boxShadow: "0 25px 50px -12px rgba(127, 124, 255, 0.15)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
          <motion.div
            className="w-3 h-3 rounded-full bg-red-500/80"
            whileHover={{ scale: 1.2, backgroundColor: "rgb(239, 68, 68)" }}
          />
          <motion.div
            className="w-3 h-3 rounded-full bg-yellow-500/80"
            whileHover={{ scale: 1.2, backgroundColor: "rgb(234, 179, 8)" }}
          />
          <motion.div
            className="w-3 h-3 rounded-full bg-green-500/80"
            whileHover={{ scale: 1.2, backgroundColor: "rgb(34, 197, 94)" }}
          />
          <span className="ml-2 text-white/40 text-sm font-mono">sweven.tsx</span>
        </div>

        {/* Code content */}
        <div className="p-6 font-mono text-base leading-relaxed">
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              className={line.color}
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: index < visibleLines ? 1 : 0,
                x: index < visibleLines ? 0 : -10,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              {/* Line number */}
              <span className="text-white/20 mr-4 select-none text-sm">
                {String(index + 1).padStart(2, "0")}
              </span>
              {line.text}
            </motion.div>
          ))}

          {/* Blinking cursor */}
          <motion.span
            className="inline-block w-2 h-5 bg-[#7f7cff] ml-8 align-middle"
            animate={{
              opacity: cursorVisible ? 1 : 0,
              scaleY: cursorVisible ? 1 : 0.8,
            }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </motion.div>

      {/* Glow effect behind terminal */}
      <motion.div
        className="absolute -inset-4 bg-[#7f7cff]/10 blur-3xl -z-10 rounded-full"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary glow */}
      <motion.div
        className="absolute -inset-8 bg-[#7f7cff]/5 blur-[60px] -z-20 rounded-full"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
};

export default CodeTerminal;
