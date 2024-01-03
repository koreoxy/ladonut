"use client";

import { PlusCircle } from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";

const CardList = () => {
  const data = [
    {
      name: "Donut susu",
      price: "Rp 3.000 / 1 piece",
      img: "/img/donat.jpeg",
    },
    {
      name: "Donut susu 2",
      price: "Rp 3.000 / 1 piece",
      img: "/img/donut2.jpeg",
    },
    {
      name: "Donut susu 3",
      price: "Rp 3.000 / 1 piece",
      img: "/img/donut3.jpg",
    },
    {
      name: "Donut susu 3",
      price: "Rp 3.000 / 1 piece",
      img: "/img/donut4.jpg",
    },
  ];
  return (
    // <div className="flex gap-5 mb-10 justify-center text-center">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4">
      {data.map((item, i) => (
        <div
          className="bg-color-third rounded-md shadow-lg p-5 flex flex-col items-center"
          key={i}
        >
          <Image
            src={item.img}
            alt="donut 2"
            width={350}
            height={350}
            className="rounded-md shadow-[5px_5px_0px_0px_rgba(248,181,184)] w-full max-h-64 object-cover"
          />
          <h1 className="text-center font-bold mt-5">{item.name}</h1>
          <h3 className="text-color-accent font-bold">{item.price}</h3>
          <button className="bg-color-secondary p-1 rounded-md flex flex-row items-center w-full justify-between">
            <span className="text-xs font-bold text-color-primary">
              Pesan sekarang
            </span>
            <PlusCircle size={25} className="text-color-primary" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default CardList;
