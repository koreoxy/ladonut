"use client";

import { PlusCircle } from "@phosphor-icons/react";
import Image from "next/image";

const CardOut = () => {
  return (
    <div className="flex flex-wrap gap-8  rounded-md text-center relative top-0 right-20">
      <div className="mt-[-30px]">
        <Image
          src="/img/donat.jpeg"
          alt="donut 1"
          width={150}
          height={150}
          className="rounded-md relative top-10 left-3 shadow-md"
        />
        <div className="bg-color-third p-5 rounded-md shadow-xl">
          <h1 className="text-lg font-bold pt-5">Donut Susu</h1>
          <h2 className="text-sm text-color-dark">Top Recommended</h2>
          <h3 className="text-color-accent font-bold">Rp 3.000 / 1 piece</h3>
          <button className="bg-color-secondary p-1 rounded-md flex flex-row items-center w-full justify-between">
            <span className="text-xs font-bold text-color-primary">
              Pesan sekarang
            </span>
            <PlusCircle size={25} className="text-color-primary" />
          </button>
        </div>
      </div>

      <div className="mt-[-30px]">
        <Image
          src="/img/donut2.jpeg"
          alt="donut 2"
          width={150}
          height={150}
          className="rounded-md relative top-10 left-3 shadow-md"
        />
        <div className="bg-color-third p-5 rounded-md shadow-xl">
          <h1 className="text-lg font-bold pt-5">Donut Susu</h1>
          <h2 className="text-sm text-color-dark">Top Recommended</h2>
          <h3 className="text-color-accent font-bold">Rp 3.000 / 1 piece</h3>
          <button className="bg-color-secondary p-1 rounded-md flex flex-row items-center w-full justify-between">
            <span className="text-xs font-bold text-color-primary">
              Pesan sekarang
            </span>
            <PlusCircle size={25} className="text-color-primary" />
          </button>
        </div>
      </div>

      <div className="mt-[-30px]">
        <Image
          src="/img/donut3.jpg"
          alt="donut 3"
          width={150}
          height={150}
          className="rounded-md relative top-10 left-3 shadow-md"
        />
        <div className="bg-color-third p-5 rounded-md shadow-xl">
          <h1 className="text-lg font-bold pt-5">Donut Susu</h1>
          <h2 className="text-sm text-color-dark">Top Recommended</h2>
          <h3 className="text-color-accent font-bold">Rp 3.000 / 1 piece</h3>
          <button className="bg-color-secondary p-1 rounded-md flex flex-row items-center w-full justify-between">
            <span className="text-xs font-bold text-color-primary">
              Pesan sekarang
            </span>
            <PlusCircle size={25} className="text-color-primary" />
          </button>
        </div>
      </div>

      <div className="mt-[-30px]">
        <Image
          src="/img/donut4.jpg"
          alt="donut 4"
          width={150}
          height={150}
          className="rounded-md relative top-10 left-3 shadow-md"
        />
        <div className="bg-color-third p-5 rounded-md shadow-xl">
          <h1 className="text-lg font-bold pt-5">Donut Susu</h1>
          <h2 className="text-sm text-color-dark">Top Recommended</h2>
          <h3 className="text-color-accent font-bold">Rp 3.000 / 1 piece</h3>
          <button className="bg-color-secondary p-1 rounded-md flex flex-row items-center w-full justify-between">
            <span className="text-xs font-bold text-color-primary">
              Pesan sekarang
            </span>
            <PlusCircle size={25} className="text-color-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardOut;
