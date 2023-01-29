import Link from 'next/link';
import React from 'react';

export default function Ad() {
  return (
    <Link
      href="/browse"
      className="h-9 text-white bg-green-500 flex items-center justify-center font-medium text-base"
    >
      This is ads
    </Link>
  );
}
