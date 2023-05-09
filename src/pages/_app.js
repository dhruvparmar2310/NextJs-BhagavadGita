import React, { useEffect } from 'react'
import '@/styles/globals.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from '@/components/Header'
import 'remixicon/fonts/remixicon.css'
import 'aos/dist/aos'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Header />
        <Component {...pageProps} />
      <Footer />
    </>
  )
}
