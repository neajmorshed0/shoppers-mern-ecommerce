import Link from 'next/link';
import React from 'react';

export default function UserMenu({ loggedIn }) {
  return (
    <li className="w-60 absolute py-4 top-10 right-0 bg-white shadow-sm z-50 flex flex-col fap-4 ">
      <h4 className="text-center mb-4 text-xl font-semibold text-gray-500">
        Welcome to Shopprs!
      </h4>
      {loggedIn ? (
        <div className="flex flex-col items-center gap-y-1.5 px-4">
          <Link
            href="/"
            className="bg-green-200 text-green-600 w-10 h-10 inline-flex items-center justify-center font-semibold  flex-shrink-0  rounded-full text-sm"
          >
            JV
          </Link>
          <span className="text-gray-500 font-medium">Welcome Back!</span>
          <h3 className="text-gray-400">@username</h3>
          <button className="text-sm underline text-blue-400">Sign Out</button>
        </div>
      ) : (
        <div className="flex gap-3 px-4">
          <button className="bg-blue-500 py-1.5 font-medium px-3 rounded text-white">
            Register
          </button>
          <button className="text-blue-600 font-medium  bg-blue-100 py-1.5 px-3 rounded">
            Login
          </button>
        </div>
      )}
      <ul className="pt-4 flex flex-col text-gray-500">
        <li className="hover:bg-gray-100 hover:tex-gray-500">
          <Link href="/" className="block py-1.5 px-4">
            Account
          </Link>
        </li>
        <li className="hover:bg-gray-100 hover:tex-gray-500">
          <Link href="/" className="block py-1.5 px-4">
            My Orders
          </Link>
        </li>
        <li className="hover:bg-gray-100 hover:tex-gray-500">
          <Link href="/" className="block py-1.5 px-4">
            Message Center
          </Link>
        </li>
        <li className="hover:bg-gray-100 hover:tex-gray-500">
          <Link href="/profile/address" className="block py-1.5 px-4">
            Address
          </Link>
        </li>
        <li className="hover:bg-gray-100 hover:tex-gray-500">
          <Link href="/" className="block py-1.5 px-4">
            Wishlist
          </Link>
        </li>
      </ul>
    </li>
  );
}
