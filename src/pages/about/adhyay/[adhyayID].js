import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from '../../../styles/Adhyay.module.css'
import { Ysabeau } from 'next/font/google'
import main from '../../../../public/assets/adhyay/ch-1.jpg'
import { Accordion, Card } from 'react-bootstrap'
import Head from 'next/head'

const ysabeau = Ysabeau({ subsets: ['latin'], weight: ['200', '300', '400', '500'], style: ['normal', 'italic'] })

function AdhyayID ({ adhyay }) {
    const [data, setData] = useState([])
    const [id, setId] = useState('')
    const router = useRouter()
    const {adhyayID} = router.query

  // const fetchAdhyay = () => {
  //   const response = axios.get(`/api/adhyay/${adhyayID}`)
  //   .then(data => {
  //     console.log('data >> ', data?.data)
  //     setData(data?.data)
  //   })
  // } 

  // useEffect(() => {
  //   fetchAdhyay()
  //   console.log('adhyayID :>> ', adhyayID);
  // }, [])
  console.log('adhyay :>> ', adhyay);
  return (
    <>
        <Head>
            <title>Adhyay - {adhyayID} | Bhagavad Gita</title>
            <meta charset="utf-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name='keywords' content='Bhagavad Gita, BhagavadGita, bhagavad gita, BhagavadGita by Dhruv Parmar, Bhagavad Gita by Dhruv Parmar' />
            <meta name="description" content="The Srimad Bhagavad Gita is the most sacred and popular book of Hindus. According to the scriptures, the Gita is the supreme book in all the books. The bhagavad gita book contains 700-verses which comes in the Mahabharata (the Indian epic). Gita means the song in Sanskrit and Srimad Bhagavad means the supreme lord. So the Srimad Bhagavad Gita means  ‘the song of the god’." />
            <link rel="icon" href="/favicon.png" />
        </Head>
        <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <h2>Adhyay - {adhyayID}</h2>
                    <ol>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/about/adhyay'>Adhyay</Link></li>
                        <li>Adhyay - {adhyayID}</li>
                    </ol>
                </div>
            </div>
        </section>

        <section id="about-us" className={`${styles.adhyay}`}>
            <div className="container" data-aos="fade-up">

                <div className={`row ${styles.content}`}>
                    <div className="col-lg-4 text-center" data-aos="fade-right">
                        <Image src={main.src} 
                            className="img-fluid"
                            width={500}
                            height={500}
                            quality={100}
                            alt='bhagavad gita'
                        />
                    </div>
                    <div className={`col-lg-8 ${ysabeau.className}`} data-aos="fade-left">
                      <p>
                        The Bhagavad Gita, or the song of God, was revealed by Lord Shree Krishna to Arjun on the threshold of the epic war of Mahabharata. A decisive battle between two sets of cousins, the Kauravas and the Pandavas, was just about to commence on the battlefield of Kurukshetra. A detailed account of the reasons that led to such a colossal war; is given under Introduction-The Setting of the Bhagavad Gita.
                      </p>
                      <p className="font-italic">
                        The Bhagavad Gita is primarily a conversation between Lord Shree Krishna and Arjun. However, the first chapter begins with a dialogue between King Dhritarashtra and his minister Sanjay. Dhritarashtra being blind, could not leave his palace in Hastinapur but was eager to know the ongoings of the battlefield.
                      </p>
                      <p className="font-italic">
                        Sanjay was a disciple of Sage Ved Vyas, the author of the epic Mahabharata and several other Hindu scriptures. Sage Ved Vyas possessed a mystic ability to see and hear events occurring in distant places. He had bestowed upon Sanjay the miraculous power of distant vision. Therefore, Sanjay could see and hear, what transpired on the battleground of Kurukshetra, and gave a first-hand account to King Dhritarashtra while still being in his palace.
                      </p>
                    </div>
                </div>
            </div>
        </section>

        <section id="about-us" className={`${styles.faq}`}>
          <div className="container" data-aos="fade-up">

            <div className={``}>
              {/* {data?.content?.map((item) => {
                return (
                  <React.Fragment key={item?.shlokID}>
                    <Accordion defaultActiveKey={data?.content[0]} flush>
                      <Accordion.Item eventKey={item?.shlokID}>
                        <Accordion.Header>
                          {item?.shlok}
                        </Accordion.Header>
                        <Accordion.Body style={{ border: '1px solid black !important' }} className={styles.accordion_body}>
                          <span>{item?.translation?.hi?.data}</span>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </React.Fragment>
                )
              })} */}
            </div>
          
          </div>

        </section>
    </>
  )
}

export default AdhyayID

export const getStaticPaths = async () => {
  const paths = []

  for (let i = 1; i <= 18; i++) {
    paths.push({
      params: {
        adhyay: 'adhyay',
        adhyayID: i.toString(),
      },
    })
  }
  return {
    // paths: [
    //   {
    //     params: {
    //       adhyay: 'some-value',
    //       adhyayID: '1',
    //     },
    //   }, // See the "paths" section below
    // ],
    paths: paths,
    fallback: true, // false or "blocking"
  }
}
 
export const getStaticProps = async ({ params }) => {
  const adhyayID = parseInt(params.adhyayID)
  if (adhyayID >= 1 && adhyayID <= 18) {
    const res = await fetch(`/api/adhyay/${params.adhyayID}`)
    const adhyay = await res.json()
    return { props: { adhyay } }
  } else {
    return { notFound: true }
  }
}
