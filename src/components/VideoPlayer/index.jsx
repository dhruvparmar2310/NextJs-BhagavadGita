import React from 'react'
import styles from '../../styles/Bhajan.module.css'
import { Ysabeau } from 'next/font/google'

const ysabeau = Ysabeau({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700'], style: ['normal', 'italic'] })

function VideoPlayer ({ videoDetails, videoList }) {
  return (
    <>

      <div className={`${styles.card}`}>
        {
          videoDetails.length === 0 ?
            <iframe width="260" height="300" src={videoList[0]?.src} title={videoList[0]?.title} frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='mt-3'></iframe>
            : <iframe width="260" height="300" src={videoDetails?.src} title={videoDetails?.title} frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='mt-3'></iframe>
        }
        <div className={`${styles.card_body} mt-0 pt-0 pb-4`}>
          <p className={`${ysabeau.className} m-0 text-start`}>{videoDetails.length === 0 ? videoList[0]?.title : videoDetails?.title}</p>
          <p className={`${ysabeau.className} m-0 text-start`}><span className={`${styles.artist}`}>{videoDetails.length === 0 ? videoList[0]?.title : videoDetails?.singer}</span></p>
        </div>
      </div>
    </>
  )
}

export default VideoPlayer
