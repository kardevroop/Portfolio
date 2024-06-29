"use client";

import React from 'react'
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/HeroHighlight";

export function Bio() {
  return (
    <section id="about">
    <HeroHighlight>
      <motion.h1
        initial={{
            opacity: 0,
            y: 20,
        }}
        animate={{
            opacity: 1,
            y: [20, -5, 0],
        }}
        transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-lg md:text-xl lg:text-2xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >

        &quot;I am a <Highlight className="text-black dark:text-white">PhD researcher</Highlight> focusing on 
        <Highlight className="text-black dark:text-white">Reinforcement Learning and Multi-Armed Bandits.</Highlight> 
        My ongoing PhD research explores advanced algorithms and neural forecasting models to improve 
        <Highlight className="text-black dark:text-white">the quality of the decisions</Highlight>
        taken by Multi-Armed Bandits and make them robust against <Highlight className="text-black dark:text-white">data integrity issues.</Highlight> 
        I am committed to advancing AI and machine learning by integrating practical engineering skills with 
        <Highlight className="text-black dark:text-white">cutting-edge</Highlight> academic research to <br></br> 
        <Highlight className="text-black dark:text-white"> address complex challenges and drive innovation.</Highlight>&quot;

        </motion.h1>
    </HeroHighlight>
    </section>
  );
}

export default Bio