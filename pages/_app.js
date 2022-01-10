import React, { useEffect, useState } from 'react';
import { Layout } from '../components';
import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Script 
  strategy='lazyOnload'
  src={`https://www.googletagmanager.com/gtag/js?id=G-T1F7F6QT8G`}
/>
  <Script 
  strategy='lazyOnload'>
    {
      `
     window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-T1F7F6QT8G');
    `
    }
  </Script>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
