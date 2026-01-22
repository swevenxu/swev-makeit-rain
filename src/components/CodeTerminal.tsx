"use client";

import { useEffect, useState } from "react";

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

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines((v) => v + 1);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  return (
    <div className="relative w-[450px]">
      {/* Terminal window */}
      <div className="bg-[#0d0d1a] border border-white/10 rounded-lg overflow-hidden shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          <span className="ml-2 text-white/40 text-sm font-mono">sweven.tsx</span>
        </div>

        {/* Code content */}
        <div className="p-6 font-mono text-base leading-relaxed">
          {codeLines.map((line, index) => (
            <div
              key={index}
              className={`${line.color} transition-all duration-300 ${
                index < visibleLines ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              {line.text}
            </div>
          ))}
          
          {/* Blinking cursor */}
          <span className="inline-block w-2 h-4 bg-[#7f7cff] animate-pulse ml-1"></span>
        </div>
      </div>

      {/* Glow effect behind terminal */}
      <div className="absolute -inset-4 bg-[#7f7cff]/10 blur-3xl -z-10 rounded-full"></div>
    </div>
  );
};

export default CodeTerminal;
