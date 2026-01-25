"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface MouseGlowProps {
  size?: number;
  color?: string;
  opacity?: number;
  blur?: number;
}

const MouseGlow = ({
  size = 400,
  color = "127, 124, 255",
  opacity = 0.15,
  blur = 100,
}: MouseGlowProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for the glow
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - size / 2);
      mouseY.set(e.clientY - size / 2);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, size, isVisible]);

  return (
    <motion.div
      className="fixed pointer-events-none z-0"
      style={{
        x: smoothX,
        y: smoothY,
        width: size,
        height: size,
      }}
      animate={{
        opacity: isVisible ? opacity : 0,
        scale: isVisible ? 1 : 0.8,
      }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(${color}, ${opacity}) 0%, rgba(${color}, 0.05) 40%, transparent 70%)`,
          filter: `blur(${blur}px)`,
        }}
      />
    </motion.div>
  );
};

export default MouseGlow;
