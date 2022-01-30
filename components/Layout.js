import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import HeadImage from '../logo.jpg';
const Layout = ({children, title= "Crypto Tracker"}) => {
  return (
      <div className='layout'>
          <Head>
              <title>{ title }</title>
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <header className='header'>
              <Link href="/" passHref>
                 <a>
                     <Image src={HeadImage} />
                     <Image src={HeadImage} />
                 </a>
              </Link>
          </header>
         <main>
             {children}
         </main>
      </div>
  )
};

export default Layout;
