"use client";

import { Basket, MagnifyingGlass } from "@phosphor-icons/react";
import ButtonPrimary from "../Button/ButtonPrimary";

const Navbar = () => {
  return (
    <header>
      <div className="bg-color-third flex flex-row justify-between items-center p-5">
        <div className="text-2xl font-extrabold text-color-accent">LADONAT</div>
        <div>
          <ul className="flex flex-row gap-4 font-bold">
            <li>Home</li>
            <li>How To Order</li>
            <li>Menu</li>
            <li>Contact</li>
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
