import LocomotiveScroll from 'locomotive-scroll';
import Head from 'next/head';
import React, { useEffect, useRef } from 'react'

const Layout = ({children}: any) => {
  
  return (
    <>
      <Head>
        <title>Muhammad Azka</title>
        <meta name="description" content="Hi, I'm Muhammad Azka" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-full" data-scroll-container>
        {children}
      </div>
    </>
  );
}

export default Layout