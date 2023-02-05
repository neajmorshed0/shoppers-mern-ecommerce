import React from 'react';

export default function Payment() {
  return (
    <div>
      <h3 className="text-lg font-semibold uppercase">We accept</h3>
      <div className="flex flex-wrap gap-x-2.5">
        <img src="images/visa.webp" className="max-w-full" alt="" />
        <img src="images/mastercard.webp" className="max-w-full" alt="" />
        <img src="images/paypal.webp" className="max-w-full" alt="" />
      </div>
    </div>
  );
}
