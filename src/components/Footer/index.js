import React from 'react';
import FooterLinks from './FooterLinks';
import FooterSocials from './FooterSocials';
import Newsletter from './Newsletter';

export default function Footer() {
  return (
    <footer className="px-4 m-auto">
      <FooterLinks />
      <div className="flex justify-between gap-5 items-center py-4">
        <FooterSocials />
        <Newsletter />
      </div>
    </footer>
  );
}
