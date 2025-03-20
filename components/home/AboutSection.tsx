"use client";
import React from "react";
import Counter from "../ui/Counter";
import { metrics } from "@/lib/data";

export default function AboutSection() {
  return (
    <section className='w-full py-20 bg-[#FF8106]/95 flex flex-col items-center justify-center text-white text-center'>
      <div className='container mx-auto px-4 md:px-6 lg:px-8'>
        <h2
          className='
          text-center 
          text-3xl 
          sm:text-4xl 
          font-bold
          text-white
          font-caladea
          mb-12'
        >
          Why Choose Us
        </h2>

        {/* Description */}
        <p className='text-base sm:text-lg font-medium leading-loose mb-12'>
          Izzy&apos;s Landscaping is dedicated to crafting high-quality outdoor
          spaces across Minnesota. From lush gardens to durable hardscapes, we
          bring expert craftsmanship and attention to detail. Whether it’s a
          residential retreat or a commercial project, we take pride in
          designing sustainable landscapes that stand the test of time. Let us
          turn your outdoor dreams into reality!
        </p>

        {/* Metrics Section */}
        <div className='grid grid-cols-3 gap-8'>
          {metrics.map((metric) => (
            <div
              key={metric.metric}
              className='metric-item'
            >
              <h3 className='text-3xl md:text-4xl font-bold'>
                <Counter
                  end={metric.target}
                  suffix='+'
                  duration={metric.duration}
                />
              </h3>
              <p className='text-base md:text-lg font-medium'>
                {metric.metric}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
