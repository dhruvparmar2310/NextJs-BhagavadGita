import { Ysabeau } from 'next/font/google'
import Head from 'next/head'
import React from 'react'
import styles from '../styles/PageNotFound.module.css'
import Image from 'next/image'

const ysabeau = Ysabeau({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600'], style: ['normal', 'italic'] })

function PageNotFound () {
  return (
    <>
      <Head>
        <title>PageNotFound | Bhagavad Gita</title>
        <meta charset="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='keywords' content='Bhagavad Gita, BhagavadGita, bhagavad gita, BhagavadGita by Dhruv Parmar, Bhagavad Gita by Dhruv Parmar' />
        <meta name="description" content="The Srimad Bhagavad Gita is the most sacred and popular book of Hindus. According to the scriptures, the Gita is the supreme book in all the books. The bhagavad gita book contains 700-verses which comes in the Mahabharata (the Indian epic). Gita means the song in Sanskrit and Srimad Bhagavad means the supreme lord. So the Srimad Bhagavad Gita means  ‘the song of the god’." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Image 
        src={'/assets/banner/pageNotFound.jpeg'}
        width={100}
        height={100}
        className={styles.myBg}
      />
      <section id="pageNotFound" className={`${styles.pageNotFound}`} style={{ height: 'auto' }}>
          <div className="container mt-5" data-aos="fade-up" style={{ height: '80vh' }}>

            <div className={`${styles.content}`} style={{ height: 'auto', margin: '10rem auto' }}>
              <h1 className={ysabeau.className}>404 Page</h1>
              <p className={ysabeau.className}>Hey Narayan! lagta hai aapka Page nahi mila</p>
              <p className={`${ysabeau.className} ${styles.quotes}`}>
                <i className="ri-double-quotes-l" style={{ position: 'relative', top: '-10px', fontSize: '12px', color: 'black' }}></i>Hare Krishna Hare Krishna, Krishna Krishna Hare Hare<i className="ri-double-quotes-r" style={{ position: 'relative', top: '-10px', fontSize: '12px', color: 'black' }}></i>
              </p>
            </div>

          </div>
        </section>
    </>
  )
}

export default PageNotFound
