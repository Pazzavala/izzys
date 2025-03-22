"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface CounterProps {
  end: number; // Target number to count up to
  suffix?: string; // Optional suffix (e.g., "+")
  duration?: number; // Optional duration of the animation
}

export default function Counter({
  end,
  suffix = "",
  duration = 2,
}: Readonly<CounterProps>) {
  const { ref, inView } = useInView({
    triggerOnce: false, // Allow the animation to replay
    threshold: 0.5, // Trigger when 50% of the component is visible
  });

  return (
    <div ref={ref}>
      {inView ? (
        <CountUp
          start={0}
          end={end}
          duration={duration}
          suffix={suffix}
        />
      ) : (
        `0${suffix}`
      )}
    </div>
  );
}
