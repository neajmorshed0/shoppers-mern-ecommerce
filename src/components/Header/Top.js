import Link from 'next/link';
import React, { useState } from 'react';
import {
  FiChevronDown,
  FiHeadphones,
  FiHeart,
  FiKey,
  FiUser,
} from 'react-icons/fi';
import UserMenu from './UserMenu';
import { useSession } from 'next-auth/react';

export default function Top({ country }) {
  // const [loggedIn, setLoggedIn] = useState(true);
  const { data: session } = useSession();
  const [visible, setVisible] = useState(false);
  const handleOpen = () => {
    setVisible(!visible);
  };

  return (
    <div className="shadow-sm">
      <div className="px-4 flex justify-between items-center h-12">
        <Link href="/">Welcome to Shoppers!</Link>
        <ul className="flex items-center gap-4 divide-x cursor-pointer relative">
          <li className="flex items-center justify-center gap-1 text-gray-500 hover:text-gray-900">
            <img src={country.flag} className="w-4 h-4 rounded-full" alt="" />
            <span className="font-medium text-sm">Bangladesh / usd</span>
          </li>
          <li className="hidden md:flex items-center justify-center gap-1 text-gray-500 pl-3 hover:text-gray-900">
            <FiKey className="text-xl text-blue-600" />
            <span className="font-medium text-sm">Buyer protection</span>
          </li>
          <li className="hidden md:flex items-center justify-center gap-1 text-gray-500 pl-3 hover:text-gray-900">
            <FiHeadphones className="text-xl text-blue-600" />
            <span className="font-medium text-sm">Customer Service</span>
          </li>
          <li className="flex items-center justify-center gap-1 text-gray-500 pl-3 hover:text-gray-900">
            <FiHeart className="text-xl text-blue-600" />
            <Link href="/profile/wishlist">
              <span className="font-medium text-sm">Wishlist</span>
            </Link>
          </li>
          <li
            className="flex items-center justify-center gap-1 text-gray-500 pl-3 hover:text-gray-900"
            onClick={handleOpen}
          >
            {session ? (
              <div className="flex items-center justify-center gap-1 text-gray-500 pl-3 hover:text-gray-900">
                {/* <FiUser className="text-xl text-blue-600" /> */}
                <img src={session.user.image} className='w-10 h-10 rounded-full' alt="" />
                <span className="font-medium text-sm">{session.user.name}</span>
                <FiChevronDown />
              </div>
            ) : (
              <div className="flex items-center justify-center gap-1 text-gray-500 pl-3 hover:text-gray-900">
                <FiUser className="text-xl text-blue-600" />
                <span className="font-medium text-sm">Account</span>
              </div>
            )}
            {visible && <UserMenu session={session} />}
          </li>
        </ul>
      </div>
    </div>
  );
}
