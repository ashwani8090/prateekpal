import React, { useEffect, useRef, useState } from "react";

/**
 * Reveal Component
 * Animates children into view when scrolled to.
 * Supported directions: "left" (left-to-right), "right" (right-to-left), "top" (top-to-bottom), "bottom" (bottom-to-top)
 */
export const Reveal = ({
  children,
  direction = "bottom",
  delay = 0,
  duration = 750,
  className = "",
  threshold = 0.15,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once revealed, unobserve to retain visibility
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const currentElem = domRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, [threshold]);

  // Initial transform classes before scroll reveal
  const getInitialTransform = () => {
    switch (direction) {
      case "left":
        return "-translate-x-16"; // Moves from left to right
      case "right":
        return "translate-x-16"; // Moves from right to left
      case "top":
        return "-translate-y-14"; // Moves from top to bottom
      case "bottom":
      default:
        return "translate-y-14"; // Moves from bottom to top
    }
  };

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${getInitialTransform()}`
      } ${className}`}
    >
      {children}
    </div>
  );
};
