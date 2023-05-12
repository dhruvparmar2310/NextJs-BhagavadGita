import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { Ysabeau } from 'next/font/google'
import Link from 'next/link'
import styles from '../styles/Bhajan.module.css'
import axios from 'axios'
import Image from 'next/image'

const ysabeau = Ysabeau({ subsets: ['latin'], weight: ['200', '300', '400', '500'], style: ['normal', 'italic'] })

function Bhajan() {
  const [list, setList] = useState([])
  const [musicDetails, setMusicDetails] = useState([])

    const getMusicList = () => {
        const response = axios.get('/api/music')
        .then(data => {
            setList(data?.data)
            console.log('data :>> ', data?.data);
        })
    }

    console.log('musicDetails?.src :>> ', musicDetails?.src);
    useEffect(() => {
      getMusicList()
    }, [])
  return (
    <>
        <Head>
            <title>Bhajan | Bhagavad Gita</title>
            <meta charset="utf-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name='keywords' content='Bhagavad Gita, BhagavadGita, bhagavad gita, BhagavadGita by Dhruv Parmar, Bhagavad Gita by Dhruv Parmar' />
            <meta name="description" content="The Srimad Bhagavad Gita is the most sacred and popular book of Hindus. According to the scriptures, the Gita is the supreme book in all the books. The bhagavad gita book contains 700-verses which comes in the Mahabharata (the Indian epic). Gita means the song in Sanskrit and Srimad Bhagavad means the supreme lord. So the Srimad Bhagavad Gita means  ‘the song of the god’." />
            <link rel="icon" href="/favicon.png" />
        </Head>

        <video src='/assets/video/bg.mp4' autoPlay loop muted className={styles.myVideo} />
        <section id="about-us" className={`${styles.bhajan}`} style={{ height: 'auto' }}>

          <div className="container" data-aos="fade-up">

            <div className={`section_title mt-5`}>
              <h2 style={{ color: 'white', textShadow: '-3px 5px 10px #1e1e1e', letterSpacing: '1px' }}>Bhajan Page</h2>
            </div>

            <div className={`${styles.content} row`}>
              <div className={`col ${styles.musicList}`}>
                <h1 className={`${ysabeau.className}`}>Music List</h1>
                <table className={`table table-responsive table-borderless table-hover mt-3`}>
                  <tbody>
                    {list?.map((item, index) => {
                      return (
                        <React.Fragment key={index}>
                          <tr>
                            <td>{item?.id}</td>
                            <td>{item?.title}</td>
                            <td>
                              <button className={`btn btn-sm btn-dark`} onClick={() => setMusicDetails(item)}>Play</button>
                            </td>
                          </tr>
                        </React.Fragment>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              <div className={`col ${styles.musicPlayer}`}>
                <div className='card' style={{ width: '18rem' }}>

                  <Image 
                    src={musicDetails?.src} 
                    className="card-img-top" 
                    width={100}
                    height={100}
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
                  
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Bhajan
