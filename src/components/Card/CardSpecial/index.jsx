"use client";

import {
  Barcode,
  Clock,
  DeviceMobile,
  Gift,
  HandCoins,
  House,
} from "@phosphor-icons/react";

const CardSpecial = () => {
  return (
    <div className="grid grid-cols-3 gap-7 text-color-primary mt-10">
      <div>
        <House size={32} weight="fill" />
        <h1 className="font-bold mt-2 text-lg">Home Delivery</h1>
        <p>Free Delivery for min Rp.50.000 purchase</p>
      </div>
      <div>
        <DeviceMobile size={32} weight="fill" />
        <h1 className="font-bold mt-2 text-lg">Easy to order</h1>
        <p>Order our donuts on mobile</p>
      </div>
      <div>
        <Clock size={32} weight="fill" />
        <h1 className="font-bold mt-2 text-lg">Fast service</h1>
        <p>Our CS fast response</p>
      </div>
      <div>
        <HandCoins size={32} weight="fill" />
        <h1 className="font-bold mt-2 text-lg">Best Quality</h1>
        <p>100% fresh hand made</p>
      </div>
      <div>
        <Gift size={32} weight="fill" />
        <h1 className="font-bold mt-2 text-lg">Package gift</h1>
        <p>Sent our donuts to your love ones</p>
      </div>
      <div>
        <Barcode size={32} weight="fill" />
        <h1 className="font-bold mt-2 text-lg">Super offer</h1>
        <p>Discount up to 30% every end month</p>
      </div>
    </div>
  );
};

export default CardSpecial;
