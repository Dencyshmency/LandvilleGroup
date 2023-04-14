import Head from 'next/head';
import React, { useState } from 'react';

import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Services from '../components/Services';
import Partner from '../components/Partner';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import BurgerMenu from '../components/BurgerMenu';

export default function Home() {
  const [isShowMenu, setIsShowMenu] = useState({
    burgerMenu: false,
    contactMenu: false,
  });

  return (
    <>
      <Head>
        <title>Landville </title>
        <meta name="description" content="Landville " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={`container ${
          isShowMenu.burgerMenu === true || isShowMenu.contactMenu === true ? 'blur' : ''
        }`}
      >
        {' '}
        <Header isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
        <Welcome />
        <Services />
        <Partner isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
        <Footer />
      </div>
      <ContactUs isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
      <BurgerMenu isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
    </>
  );
}
