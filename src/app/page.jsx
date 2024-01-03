"use client";

import ButtonPrimary from "@/components/Button/ButtonPrimary";
import ButtonSecondary from "@/components/Button/ButtonSecondary";
import CardSpecial from "@/components/Card/CardSpecial";
import CardOut from "@/components/Card/CardOut";
import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";
import Image from "next/image";
import CardList from "@/components/Card/CardList";

const page = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <div className="container max-w-7xl mt-10 mx-auto">
        <section className="flex gap-2 p-10">
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
          <div className="bg-color-secondary rounded-xl max-w-sm h-[650px]">
            <CardOut />
          </div>
        </section>
      </div>

      {/* SECTION KEUNTUNGAN ATAU SPECIAL*/}
      <div className="bg-color-dark mt-10 h-auto w-full">
        <section className="container max-w-7xl mx-auto">
          <div className="flex gap-5">
            <div className="pt-40 flex flex-col gap-5 relative">
              <Image
                src="/img/donat.jpeg"
                alt="donut 1"
                width={250}
                height={250}
                className="rounded-md shadow-[5px_5px_rgba(198,34,31,_0.4),_10px_10px_rgba(198,34,31,_0.3),_15px_15px_rgba(198,34,31,_0.2),_20px_20px_rgba(198,34,31,_0.1),_25px_25px_rgba(198,34,31,_0.05)]"
              />

              <Image
                src="/img/donut2.jpeg"
                alt="donut 2"
                width={150}
                height={150}
                className="relative top-[-60] bottom-80 left-32 rounded-md shadow-[5px_5px_0px_0px_rgba(198,34,31)]"
              />
            </div>

            <div className="py-20 px-20">
              <h1 className="text-color-primary font-extrabold text-5xl">
                Apa yang special dari Ladonat ?
              </h1>

              <CardSpecial />
            </div>
          </div>
        </section>
      </div>

      {/* LESS TALK MORE EAT */}
      <div className="container max-w-7xl mt-10 mx-auto">
        <section>
          <div className="text-center font-bold text-xl">
            <h1>Less Talk More Eat</h1>
          </div>
          <div className="text-center">
            <p>
              We believe that everyone deserve to be happy and have something
              sweet in their lives.
            </p>
          </div>
          <div className="flex justify-end">
            <button>
              <ArrowCircleLeft size={32} />
            </button>
            <button>
              <ArrowCircleRight size={32} />
            </button>
          </div>
          <div>
            <CardList />
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
