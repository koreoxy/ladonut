"use client";

import ButtonPrimary from "@/components/Button/ButtonPrimary";
import ButtonSecondary from "@/components/Button/ButtonSecondary";
import CardSpecial from "@/components/Card/CardSpecial";
import CardOut from "@/components/CardOut";
import Image from "next/image";

const page = () => {
  return (
    <div className="">
      {/* HERO SECTION */}
      <div className="container max-w-7xl mt-10 mx-auto">
        <section className="flex gap-2">
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
                  bersih, dan donut kami dibuat dengan tangan dengan penuh
                  cinta.
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
        </section>
      </div>

      {/* SECTION KEUNTUNGAN ATAU SPECIAL*/}
      <div className="bg-color-dark mt-10 h-screen w-full">
        <section className="container max-w-7xl mx-auto">
          <div className="flex gap-5">
            <div className="pt-10 flex flex-col gap-5">
              <Image
                src="/img/donat.jpeg"
                alt="donut 1"
                width={150}
                height={150}
                className="rounded-md shadow-lg shadow-color-secondary"
              />

              <Image
                src="/img/donut2.jpeg"
                alt="donut 2"
                width={150}
                height={150}
                className="rounded-md shadow-lg shadow-color-secondary"
              />
            </div>

            <div className="pt-10">
              <h1 className="text-color-primary font-extrabold text-3xl">
                Apa yang special dari Ladonat ?
              </h1>

              <CardSpecial />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
