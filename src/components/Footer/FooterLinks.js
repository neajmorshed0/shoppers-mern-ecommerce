import Link from 'next/link';
import React from 'react';

const links = [
  {
    heading: 'Shoppers',
    links: [
      {
        name: 'About Us',
        path: '',
      },
      {
        name: 'Contact Us',
        path: '',
      },
      {
        name: 'Social Rsponsibility',
        path: '',
      },
    ],
  },
  {
    heading: 'Help & Support',
    links: [
      {
        name: 'Shipping Info',
        path: '',
      },
      {
        name: 'Returns',
        path: '',
      },
      {
        name: 'How To Order',
        path: '',
      },
      {
        name: 'How To Track',
        path: '',
      },
      {
        name: 'Size Guide',
        path: '',
      },
    ],
  },
  {
    heading: 'Customer Service',
    links: [
      {
        name: 'Customer Services',
        path: '',
      },
      {
        name: 'Terms and Conditions',
        path: '',
      },
      {
        name: 'Consumers(Transactions)',
        path: '',
      },
      {
        name: 'Take our feedback survey',
        path: '',
      },
    ],
  },
];

export default function FooterLinks() {
  return (
    <nav className="grid grid-cols-3">
      {links.map((link, i) => (
        <ul key={i + 1} className="space-y-2">
          <li className="text-gray-500 text-lg font-semibold">
            {link.heading}
          </li>
          {link.links.map((link, i) => (
            <li key={i + 1}>
              <Link href={link.path} className="text-gray-500 text-base">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </nav>
  );
}
