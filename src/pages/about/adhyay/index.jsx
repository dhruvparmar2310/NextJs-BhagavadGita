import Image from 'next/image'
import Link from 'next/link'
import main from '../../../../public/Bhagavad-Gita.jpg'
import { Ysabeau } from 'next/font/google'
import styles from '../../../styles/Adhyay.module.css'
import { withRouter } from 'next/router'
import Head from 'next/head'
import React from 'react'

const ysabeau = Ysabeau({ subsets: ['latin'], weight: ['200', '300', '400', '500'], style: ['normal', 'italic'] })

function Adhyay ({ adhyay, router }) {
  return (
    <>
      <Head>
        <title>Adhyay | Bhagavad Gita</title>
        <meta charset="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='keywords' content='Bhagavad Gita, BhagavadGita, bhagavad gita, BhagavadGita by Dhruv Parmar, Bhagavad Gita by Dhruv Parmar' />
        <meta name="description" content="The Srimad Bhagavad Gita is the most sacred and popular book of Hindus. According to the scriptures, the Gita is the supreme book in all the books. The bhagavad gita book contains 700-verses which comes in the Mahabharata (the Indian epic). Gita means the song in Sanskrit and Srimad Bhagavad means the supreme lord. So the Srimad Bhagavad Gita means  ‘the song of the god’." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className={ysabeau.className}>Adhyay</h2>
            <ol>
              <li><Link className={ysabeau.className} href='/'>Home</Link></li>
              <li className={ysabeau.className}>Adhyay</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="about-us" className={`${styles.adhyay}`}>
        <div className="container" data-aos="fade-up">

          <div className={`row ${styles.content}`}>
            <div className="col-lg-5" data-aos="fade-right">
              <Image src={main.src}
                className="img-fluid"
                width={500}
                height={500}
                quality={100}
                alt='bhagavad gita'
              />
            </div>
            <div className={`col-lg-7 pt-4 pt-lg-0 ${ysabeau.className}`} data-aos="fade-left">
              <p>
                Lord Krishna spoke Bhagavad-gita to his friend and disciple, Arjuna. This conversation took place on the battlefield of Kurukshetra. Arjuna was representing mankind and asked all the questions we would ask about spiritual life.
              </p>
              <p className="font-italic">
                The Bhagavad-gita is such an important scripture that it can help us to get out of the cycle of birth and death. Anyone who recites Bhagavad-gita with devotion will go to the spiritual world at the time of death. If one reads Bhagavad-gita sincerely the reaction of one’s past deeds will not act upon one.
              </p>
              <p className="font-italic">
                Gita Jayanthi – the day on which lord Krishna spoke to Arjuna is on November 30. Devotees can observe this auspicious day by reading the Bhagavad-gita.
              </p>
            </div>
          </div>

          <table className={`table table-responsive mt-5`}>
            <thead>
              <tr>
                <th>Sr.</th>
                <th>Adhyay</th>
                <th>Read</th>
              </tr>
            </thead>
            <tbody>
              {adhyay && adhyay?.map((items, index) => {
                return (
                  <React.Fragment key={index}>
                    <tr>
                      <td className={ysabeau.className}>{items?.id}</td>
                      <td className={ysabeau.className}>{items?.title}</td>
                      <td>
                        <button className={`btn btn-sm btn-outline-dark ${ysabeau.className}`} onClick={() => router.push(`/about/adhyay/${index + 1}`)}>Read</button>
                      </td>
                    </tr>
                  </React.Fragment>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default withRouter(Adhyay)

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.DEPLOY}/api/adhyay`)
  const adhyay = await res.json()
  return { props: { adhyay } }
}