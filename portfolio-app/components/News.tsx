"use client";

import React from "react";

import { news } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCardsNews";

const News = () => {
  return (
    <section id="news" className="py-20">
      <h1 className="heading">
        Latest
        <span className="text-purple"> News</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={news}
            direction="right"
            speed="slow"
          />
        </div>
      </div>

    </section>
  );
};

export default News;