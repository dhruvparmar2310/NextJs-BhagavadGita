import React, { useEffect } from 'react'
import '@/styles/globals.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from '@/components/Header'
import 'remixicon/fonts/remixicon.css'
import 'aos/dist/aos'
import Footer from '@/components/Footer'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, [])

  return (
    <>
      <Header />
        <Component {...pageProps} />
      {router?.route === '/bhajan' || router?.route === '/404' ? <footer style={{ display: 'none'}}></footer> : <Footer />}
    </>
  )
}
