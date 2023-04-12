import Head from 'next/head';

import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Services from '../components/Services';
import Partner from '../components/Partner';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Welcome />
      <div className="container dsa">
        <Services />
      </div>
      <Partner />
      <Footer />
    </>
  );
}
