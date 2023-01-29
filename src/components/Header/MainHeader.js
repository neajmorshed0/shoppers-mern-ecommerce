import Link from 'next/link';
import React from 'react';
import { FiSearch, FiShoppingCart, FiShoppingBag } from 'react-icons/fi';

import { useSelector } from 'react-redux';

export default function MainHeader() {
  const { cart } = useSelector((state) => ({ ...state }));
  return (
    <div className="m-auto shadow-sm">
      <div className="flex items-center px-4 justify-between py-5 ">
        <div>
          <Link
            href="/"
            className="font-semibold inline-flex items-center gap-2 text-lg text-blue-500"
          >
            <FiShoppingBag className="text-xl" />
            <span>Shoppers</span>
          </Link>
        </div>
        <form className="flex relative max-w-md w-full items-center justify-center">
          <input
            type="text"
            className="border w-full border-gray-300 py-2 rounded-lg px-5"
            placeholder="Search...."
          />
          <button>
            <FiSearch className="text-lg text-gray-600 absolute right-3 top-3" />
          </button>
        </form>
        <div>
          <Link href="/" className="relative">
            <FiShoppingCart className="text-xl text-gray-600" />
            <span className="absolute bg-blue-500 -top-2 -right-2  rounded-full w-4 h-4 inline-flex items-center justify-center text-xs fotn-medium text-white">
              {cart.length}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
