import React from 'react'
import styles from '../../styles/About.module.css'
import { Ysabeau } from 'next/font/google'
import Link from 'next/link'
import Head from 'next/head'
import WallpaperCard from '@/components/WallpaperCard'

const ysabeau = Ysabeau({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600'], style: ['normal', 'italic'] })

function Quotes ({ quotes }) {
    console.log('quotes :>> ', quotes);
  return (
    <>
        <Head>
            <title>Quotes | Bhagavad Gita</title>
            <meta charset="utf-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name='keywords' content='Bhagavad Gita, BhagavadGita, bhagavad gita, BhagavadGita by Dhruv Parmar, Bhagavad Gita by Dhruv Parmar' />
            <meta name="description" content="The Srimad Bhagavad Gita is the most sacred and popular book of Hindus. According to the scriptures, the Gita is the supreme book in all the books. The bhagavad gita book contains 700-verses which comes in the Mahabharata (the Indian epic). Gita means the song in Sanskrit and Srimad Bhagavad means the supreme lord. So the Srimad Bhagavad Gita means  ‘the song of the god’." />
            <link rel="icon" href="/favicon.png" />
        </Head>
        <section id="breadcrumbs" className={`breadcrumbs ${ysabeau.className}`}>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className={ysabeau.className}>Quotes</h2>
                    <ol>
                        <li><Link className={ysabeau.className} href='/'>Home</Link></li>
                        <li><Link className={ysabeau.className} href='/about'>About</Link></li>
                        <li className={ysabeau.className}>Quotes</li>
                    </ol>
                </div>
            </div>
        </section>

        <section id="services" className={`${styles.about_us} ${styles.section_bg}`}>
          <div className="container" data-aos="fade-up">

            <div className={`section_title`}>
              <h2>Quotes</h2>
              <p></p>
            </div>

            {quotes ? <>
                {quotes?.map((quote, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div className={`row ${styles.content} mb-3`}>
                                <div className={`accordion accordion-flush`} id={quote?.id}>
                                    <div className={`accordion-item`}>
                                        <h2 className={`accordion-header ${ysabeau.className}`} id={`flush-heading-${index}`}>
                                            <button className={`accordion-button collapsed ${styles.accordionBtn}`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${index}`} aria-expanded="false" aria-controls={`flush-collapse-${index}`}>
                                                {quote?.title}
                                            </button>
                                        </h2>
                                        <div id={`flush-collapse-${index}`} className={`accordion-collapse collapse `} aria-labelledby={`flush-heading-${index}`} data-bs-parent={`#${quote?.id}`}>
                                            <div className={`accordion-body ${styles.accordionBody} ${ysabeau.className}`}>
                                                <i className="ri-double-quotes-l" style={{ position: 'relative', top: '-10px', fontSize: '12px', color: 'var(--theme)' }}></i>{quote?.content}<i className="ri-double-quotes-r" style={{ position: 'relative', top: '-10px', fontSize: '12px', color: 'var(--theme)' }}></i>
                                                <p>-- {quote?.author}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })}
            </> : <p>Loading...</p>}

          </div>
        </section>
    </>
  )
}

export default Quotes

export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:3000/api/quotes')
    const quotes = await res.json()
    return { props: { quotes } }
}