"use client";

import { Basket, MagnifyingGlass } from "@phosphor-icons/react";
import ButtonPrimary from "../Button/ButtonPrimary";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <div className="bg-color-third flex flex-row justify-between items-center p-5">
        <div className="text-2xl font-extrabold text-color-accent">LADONAT</div>
        <div>
          <ul className="flex flex-row gap-4 font-bold">
            <Link href="/">Home</Link>
            <Link href="/how-to-order">How To Order</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/contact">Contact</Link>
          </ul>
        </div>
        <div className="flex flex-row items-center gap-2">
          <MagnifyingGlass size={27} />
          <Basket size={27} />
          <ButtonPrimary text="Sign Up" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
