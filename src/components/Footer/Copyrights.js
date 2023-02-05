import Link from 'next/link';
import React from 'react';
import { FiMapPin } from 'react-icons/fi';
const data = [
  {
    name: 'Privacy Center',
    link: '',
  },
  {
    name: 'Privacy & Cookie Policy',
    link: '',
  },
  {
    name: 'Manage Cookies',
    link: '',
  },
  {
    name: 'Terms & Conditions',
    link: '',
  },
  {
    name: 'Copyright Notice',
    link: '',
  },
];

export default function Copyrights({ country }) {
  return (
    <div className="flex flex-wrap items-center pb-2.5">
      <p className="text-gray-500 text-sm">
        &copy; 2022 Soppers, All Rights Reserved.
      </p>
      <ul className="flex flex-wrap items-center gap-4 divide-x">
        {data.map((link, i) => (
          <li key={i + 1} className="pr-3 pl-2 first-of-type:pl-0">
            <Link className="text-gray-500 text-sm" href={link.link}>
              {link.name}
            </Link>
          </li>
        ))}
        <li className="flex items-center text-sm text-gray-400 pl-3">
          <FiMapPin className=" text-gray-400" />
          <span>{country.name}</span>
        </li>
      </ul>
    </div>
  );
}
