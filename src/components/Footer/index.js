import React from 'react';
import Copyrights from './Copyrights';
import FooterLinks from './FooterLinks';
import FooterSocials from './FooterSocials';
import Newsletter from './Newsletter';
import Payment from './Payment';

export default function Footer({ country }) {
  return (
    <footer className="px-4 m-auto">
      <FooterLinks />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-between gap-5 lg:items-center py-4">
        <FooterSocials />
        <Newsletter />
        <Payment />
        <Copyrights country={country} />
      </div>
    </footer>
  );
}
