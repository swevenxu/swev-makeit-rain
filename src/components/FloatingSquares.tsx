"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

// Code snippets from various languages - essential syntax only
const CODE_SNIPPETS = [
  // JavaScript/TypeScript
  "const", "let", "=> {", "async", "await", "import", "export", "Promise",
  // HTML/JSX
  "<div>", "</div>", "</>", "<html>", "<body>", "<head>",
  // Python
  "def", "self", "import", "__init__", "lambda", "yield", "elif",
  // Java/C#
  "public", "private", "static", "void", "class", "new", "extends",
  // C/C++
  "#include", "int main()", "printf()", "malloc()", "nullptr", "sizeof",
  // SQL
  "SELECT", "FROM", "WHERE", "JOIN", "INSERT", "UPDATE",
  // Ruby
  "def end", "puts", "attr_accessor", "require",
  // Go
  "func", "package", "defer", "go", "chan",
  // Rust
  "fn", "let mut", "impl", "pub", "match", "Option",
  // PHP
  "<?php", "echo", "$this", "namespace",
  // Swift
  "var", "guard", "func", "@State",
  // Kotlin
  "fun", "val", "data class", "suspend",
  // Shell/Bash
  "#!/bin/bash", "echo", "grep", "sudo", "chmod",
  // Common symbols
  "{ }", "[ ]", "( )", "&&", "||", "!=", "==", "=>", "->", "::", "/**/"
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
  blur: number;
  scale: number;
  hasGlow: boolean;
  layer: number; // 0 = back, 1 = mid, 2 = front
}

const FloatingCodeSyntax = () => {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState(0);

  // Generate random code elements on mount - more elements with varying depths
  const elements = useMemo(() => {
    const newElements: FloatingCode[] = [];
    const elementCount = 25; // Increased from 12

    for (let i = 0; i < elementCount; i++) {
      const layer = i % 3; // Distribute across 3 layers
      const layerConfig = {
        0: { blur: 2, scale: 0.7, opacityRange: [0.03, 0.08] }, // Back layer - blurry, small
        1: { blur: 0.5, scale: 1, opacityRange: [0.05, 0.12] }, // Mid layer
        2: { blur: 0, scale: 1.2, opacityRange: [0.08, 0.18] }, // Front layer - sharp, larger
      }[layer]!;

      newElements.push({
        id: i,
        text: CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)],
        top: Math.random() * 100,
        left: Math.random() * 100,
        opacity:
          Math.random() * (layerConfig.opacityRange[1] - layerConfig.opacityRange[0]) +
          layerConfig.opacityRange[0],
        speed: Math.random() * 0.4 + 0.1,
        offset: Math.random() * Math.PI * 2,
        fontSize: Math.floor(Math.random() * 16) + 10,
        rotation: Math.random() * 40 - 20,
        blur: layerConfig.blur,
        scale: layerConfig.scale,
        hasGlow: Math.random() > 0.7, // 30% chance of glow
        layer,
      });
    }
    return newElements;
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation loop with smoother timing
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
      setTime((t) => t + deltaTime * 0.5);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 30%, rgba(127, 124, 255, 0.08) 0%, transparent 50%)",
            "radial-gradient(ellipse at 80% 70%, rgba(127, 124, 255, 0.08) 0%, transparent 50%)",
            "radial-gradient(ellipse at 50% 50%, rgba(127, 124, 255, 0.08) 0%, transparent 50%)",
            "radial-gradient(ellipse at 20% 30%, rgba(127, 124, 255, 0.08) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating code elements sorted by layer for proper z-index */}
      {[...elements]
        .sort((a, b) => a.layer - b.layer)
        .map((el) => {
          // More complex floating motion with multiple sine waves
          const translateX =
            Math.sin(time * el.speed + el.offset) * 35 +
            Math.sin(time * el.speed * 0.5 + el.offset * 2) * 15;
          const translateY =
            Math.cos(time * el.speed * 0.7 + el.offset) * 25 +
            Math.cos(time * el.speed * 0.3 + el.offset * 1.5) * 10;
          const dynamicRotation =
            el.rotation + Math.sin(time * el.speed * 0.2 + el.offset) * 5;
          const dynamicScale =
            el.scale + Math.sin(time * el.speed * 0.15 + el.offset) * 0.05;

          return (
            <motion.span
              key={el.id}
              className="absolute font-mono select-none"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: el.opacity, scale: dynamicScale }}
              transition={{ duration: 1, delay: el.id * 0.05 }}
              style={{
                top: `${el.top}%`,
                left: `${el.left}%`,
                fontSize: `${el.fontSize}px`,
                transform: `translate(${translateX}px, ${translateY}px) rotate(${dynamicRotation}deg)`,
                filter: el.blur > 0 ? `blur(${el.blur}px)` : undefined,
                color: el.hasGlow ? "#7f7cff" : "#7f7cff",
                textShadow: el.hasGlow
                  ? "0 0 10px rgba(127, 124, 255, 0.6), 0 0 20px rgba(127, 124, 255, 0.4), 0 0 30px rgba(127, 124, 255, 0.2)"
                  : undefined,
              }}
            >
              {el.text}
            </motion.span>
          );
        })}

      {/* Floating orbs for extra depth */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            width: 100 + i * 50,
            height: 100 + i * 50,
            background: `radial-gradient(circle, rgba(127, 124, 255, ${0.03 + i * 0.01}) 0%, transparent 70%)`,
            top: `${20 + i * 15}%`,
            left: `${10 + i * 20}%`,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingCodeSyntax;
