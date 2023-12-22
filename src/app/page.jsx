"use client";

import ButtonPrimary from "@/components/Button/ButtonPrimary";
import ButtonSecondary from "@/components/Button/ButtonSecondary";
import CardOut from "@/components/CardOut";

const page = () => {
  return (
    <div className="container max-w-7xl mx-auto mt-10">
      <div className="flex gap-2">
        <div className="w-full">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-extrabold">
              Welcome to <b className="text-color-accent">Ladonat</b>
            </h1>
            <h2 className="text-6xl font-extrabold mt-4">
              Donuts <b className="text-color-secondary">Lumer</b>
            </h2>
            <h3 className="text-5xl font-extrabold mt-4">
              Sekali gigitan bikin nagih
            </h3>
            <div className="max-w-md">
              <p className="mt-5 text-xl">
                kami membuat semua produk kami dengan 100% bahan makanan yang
                bersih, dan donut kami dibuat dengan tangan dengan penuh cinta.
              </p>
            </div>
            <div className="mt-4 flex gap-4">
              <ButtonPrimary text="Let's Order" />
              <ButtonSecondary text="See more" />
            </div>
          </div>
        </div>

        {/* IMAGE MENU */}
        <div className="bg-color-secondary rounded-xl max-w-sm">
          <CardOut />
        </div>
      </div>
    </div>
  );
};

export default page;
