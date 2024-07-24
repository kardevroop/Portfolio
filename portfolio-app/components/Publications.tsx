"use client";

import React from "react";

import { publications } from "@/data";

const Publications = () => {
  // const listItems = publications.map((item) => (
  //   <div  key={item.id}>
  //   <a href={item.link} target="_blank">
  //   <tr>
  //     <th className="text-purple">[{item.id}]</th>
  //     <td>{item.article}</td>
  //   </tr>
  //   </a>
  //   </div>
  // ));
  return (
    <section id="publications" className="py-10">
      <h1 className="heading">
        A few of my
        <span className="text-purple"> research publications</span>
      </h1>
      <div className="overflow-x-auto">
        <table className="table mt-20">
          <thead></thead>
          <tbody  className="md:text-xl font-bold">
            {publications.map((item, idx) => (
              <tr key={idx}>
                <th className="text-purple">[{item.id}]</th>
                <td><a href={item.link} target="_blank">{item.article}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Publications;