import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Bhajan.module.css'
import axios from 'axios'
import VideoPlayer from '@/components/VideoPlayer'
import MusicList from '@/components/MusicList'
import VideoList from '@/components/VideoList'
import MusicPlayer from '@/components/MusicPlayer'

function Bhajan() {
  const [id, setID] = useState()
  const [musicList, setMusicList] = useState([])
  const [videoList, setVideoList] = useState([]) 
  const [musicDetails, setMusicDetails] = useState([])
  const [videoDetails, setVideoDetails] = useState([])

    const getMusic = () => {
      const response = axios.get('/api/bhajan/music')
      .then(data => {
        setMusicList(data?.data)
      })
      return response
    }

    const getVideo = () => {
      const response = axios.get('/api/bhajan/video')
      .then(data => {
        setVideoList(data?.data)
      })
      return response
    }

    useEffect(() => {
      getMusic()
      getVideo()
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
        <section id="about-us" className={`${styles.bhajan}`} >

          <div className="container" data-aos="fade-up">

            <div className={`section_title mt-5 pb-0`}>
              <h2 style={{ color: 'white', textShadow: '-3px 5px 10px #1e1e1e', letterSpacing: '1px' }}>Bhajan Page</h2>
            </div>

            <div className={`${styles.content} row`} style={{ height: '5%', margin: '10px auto' }}>
              <div className={`col col-sm-12`}>
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <Link className="nav-link" href="#" id='music' onClick={(e) => setID(e.target.id)}>Music</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#" id='video' onClick={(e) => setID(e.target.id)}>Video</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className={`${styles.content}`}  style={{ height: 'auto', margin: '10px auto' }}>
              <div className={`${styles.musicList}`}>
                {
                  id === 'video' ?  
                  <VideoList videoList={videoList} setVideoDetails={setVideoDetails} />
                  :  <MusicList musicList={musicList} setMusicDetails={setMusicDetails} /> 
                }  
              </div>

              <div className={`${styles.player}`}>
                {
                  id === 'video' ? 
                  <div className={styles.videoPlayer}>
                    <VideoPlayer videoDetails={videoDetails} videoList={videoList} />
                  </div>
                   : 
                  <MusicPlayer musicDetails={musicDetails} musicList={musicList} />
                }   
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Bhajan
