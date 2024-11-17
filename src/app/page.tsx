"use client";
import Hero from "@/components/home/hero";
import ShowcaseSection from "@/components/home/showcase-section";
import WaitlistSection from "@/components/home/waitlist-section";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "center start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const showcaseScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const showcaseOpacity = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <main ref={containerRef} className="p-[2rem]">
      <motion.div style={{ scale: heroScale, opacity: heroOpacity }}>
        <Hero />
      </motion.div>
      <motion.div style={{ scale: showcaseScale, opacity: showcaseOpacity }}>
        <ShowcaseSection />
        <WaitlistSection />
      </motion.div>
    </main>
  );
}
