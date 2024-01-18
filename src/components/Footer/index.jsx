"use client";

import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-20 bg-color-dark text-color-primary">
      <div className="flex flex-col items-center p-10">
        <div className="font-bold text-2xl">Ladonat</div>
        <div className="flex gap-2">
          <Link href="">
            <InstagramLogo size={25} />
          </Link>
          <Link href="">
            <WhatsappLogo size={25} />
          </Link>
        </div>
        <div className="text-color-secondary">&copy; 2024 Ladonat</div>
      </div>
    </div>
  );
};

export default Footer;
