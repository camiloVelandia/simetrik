import React, { useState } from "react";

import Head from "next/head";
import GloblalStyles from "../globalStyles";



export default function App({ Component, pageProps }) {
 
  

  return (
    <>
      <GloblalStyles />
      <Head>
        <title>Simetrik Challenge</title>
        <meta property="og:title" content="Simetrik" key="title" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
