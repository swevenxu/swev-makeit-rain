"use client";

import { useEffect, useState } from "react";

// Code snippets to float around
const CODE_SNIPPETS = [
  "<div>",
  "</div>",
  "const",
  "=> {",
  "( )",
  "{ }",
  "[ ]",
  "function()",
  "return",
  "import",
  "export",
  "async",
  "await",
  "</>",
  "npm",
  "git",
  "useState",
  "props",
];

interface FloatingCode {
  id: number;
  text: string;
  top: number;
  left: number;
  opacity: number;
  speed: number;
  offset: number;
  fontSize: number;
  rotation: number;
}

const FloatingCodeSyntax = () => {
  const [elements, setElements] = useState<FloatingCode[]>([]);
  const [time, setTime] = useState(0);

  // Generate random code elements on mount
  useEffect(() => {
    const newElements: FloatingCode[] = [];
    for (let i = 0; i < 12; i++) {
      newElements.push({
        id: i,
        text: CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)],
        top: Math.random() * 100,
        left: Math.random() * 100,
        opacity: Math.random() * 0.15 + 0.05,  // 0.05-0.2 (very subtle)
        speed: Math.random() * 0.3 + 0.1,
        offset: Math.random() * Math.PI * 2,
        fontSize: Math.floor(Math.random() * 14) + 12, // 12-26px
        rotation: Math.random() * 30 - 15, // -15 to 15 degrees
      });
    }
    setElements(newElements);
  }, []);

  // Animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => t + 0.015);
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]">
      {elements.map((el) => {
        // Gentle floating motion - both X and Y
        const translateX = Math.sin(time * el.speed + el.offset) * 30;
        const translateY = Math.cos(time * el.speed * 0.7 + el.offset) * 20;
        
        return (
          <span
            key={el.id}
            className="absolute font-mono text-[#7f7cff] select-none"
            style={{
              top: `${el.top}%`,
              left: `${el.left}%`,
              opacity: el.opacity,
              fontSize: `${el.fontSize}px`,
              transform: `translate(${translateX}px, ${translateY}px) rotate(${el.rotation}deg)`,
              transition: "transform 0.1s linear",
            }}
          >
            {el.text}
          </span>
        );
      })}
    </div>
  );
};

export default FloatingCodeSyntax;
