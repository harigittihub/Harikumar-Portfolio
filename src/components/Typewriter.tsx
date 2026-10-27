"use client";
import React, { useState, useEffect } from "react";

const phrases = [
  "MSc Student Artificial Intelligence in Industrial Application",
  "Building Neural Architectures.",
  "Teaching robots how to see.",
  "Debugging the unpredictable."
];

export function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const currentPhrase = phrases[index];

    if (isDeleting) {
      if (text.length > 0) {
        timer = setTimeout(() => setText(currentPhrase.substring(0, text.length - 1)), 30);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }
    } else {
      if (text.length < currentPhrase.length) {
        timer = setTimeout(() => setText(currentPhrase.substring(0, text.length + 1)), 60);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2500); // Wait 2.5s before deleting
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <span className="inline-block border-r-[3px] border-tertiary pr-1 animate-[pulse_1s_infinite]">
      {text}
    </span>
  );
}
