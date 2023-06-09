import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../../styles/Bhajan.module.css'
import { Ysabeau } from 'next/font/google'

const ysabeau = Ysabeau({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700'], style: ['normal', 'italic'] })

function MusicPlayer ({ musicList, musicDetails }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = React.createRef()

  const handlePlay = () => {
    const audioElement = audioRef.current
    console.log('audioRef.current.duration :>> ', audioRef.current.duration);

    if (isPlaying) {
      audioElement.pause()
    } else {
      audioElement.play()
    }

    setIsPlaying(!isPlaying)
  }

  return (
    <>
      {
        musicDetails.length === 0 ?
          <>
            <div className={`${styles.card}`}>
              <div className={styles.card_img_top}>
                <Image
                  src={musicList[0]?.src}
                  className=""
                  width={200}
                  height={200}
                  alt="..."
                />
              </div>

              <div className={`${styles.card_body} mt-0 pt-0`}>
                <p className={`${ysabeau.className} m-0`}>{musicList[0]?.title}</p>
                <p className={`${ysabeau.className} m-0`}><span className={`${styles.artist}`}>{musicList[0]?.artist}</span></p>
              </div>

              <div className={styles.musicDuration}>
                {/* <input type='range' className='form-range' /> */}
                <div className={styles.range} id="range">
                  <div className={styles.slider} id="slider">
                  </div>
                </div>
                <div className={styles.duration}>
                  <p>0:00</p>
                  <p>10:05</p>
                </div>
              </div>

              <div className={styles.musicController}>
                <div className={`${styles.music_control} text-center`} style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                  <audio ref={audioRef} src={musicDetails?.music} />
                  <span><i className="ri-repeat-line" style={{ fontSize: '20px' }}></i></span>
                </div>
                <div className={`${styles.music_control} text-center`} style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                  <audio ref={audioRef} src={musicDetails?.music} />
                  <span><i className="ri-skip-back-fill" style={{ fontSize: '20px' }}></i></span>
                </div>
                <div className={`${styles.music_control} ${styles.playPause} text-center`}>
                  <audio ref={audioRef} src={musicList[0]?.music} />
                  <span onClick={handlePlay}>{isPlaying ? <i className="ri-pause-circle-fill"></i> : <i className="ri-play-circle-fill"></i>}</span>
                </div>
                <div className={`${styles.music_control} text-center`} style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                  <audio ref={audioRef} src={musicDetails?.music} />
                  <span><i className="ri-skip-forward-fill" style={{ fontSize: '20px' }}></i></span>
                </div>
                <div className={`${styles.music_control} text-center`} style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                  <audio ref={audioRef} src={musicDetails?.music} />
                  <span><i className="ri-menu-line" style={{ fontSize: '20px' }}></i></span>
                </div>
              </div>
              
            </div>
          </>
          :
          <>
            <div className={`${styles.card}`}>
              <div className={styles.card_img_top}>
                <Image
                  src={musicDetails?.src}
                  className=""
                  width={200}
                  height={200}
                  alt="..."
                />
              </div>

              <div className={`${styles.card_body} mt-0 pt-0`}>
                <p className={`${ysabeau.className} m-0`}>{musicDetails?.title}</p>
                <p className={`${ysabeau.className} m-0`}><span className={`${styles.artist}`}>{musicDetails?.artist}</span></p>
              </div>

              <div className={styles.musicDuration}>
                {/* <input type='range' className='form-range' /> */}
                <div className={styles.range} id="range">
                  <div className={styles.slider} id="slider">
                  </div>
                </div>
                <div className={styles.duration}>
                  <p>0:00</p>
                  <p>10:05</p>
                </div>
              </div>

              <div className={styles.musicController}>
                <div className={`${styles.music_control} text-center`} style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                  <audio ref={audioRef} src={musicDetails?.music} />
                  <span><i className="ri-repeat-line" style={{ fontSize: '20px' }}></i></span>
                </div>
                <div className={`${styles.music_control} text-center`} style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                  <audio ref={audioRef} src={musicDetails?.music} />
                  <span><i className="ri-skip-back-fill" style={{ fontSize: '20px' }}></i></span>
                </div>
                <div className={`${styles.music_control} ${styles.playPause} text-center`}>
                  <audio ref={audioRef} src={musicDetails?.music} />
                  <span onClick={handlePlay}>{isPlaying ? <i className="ri-pause-circle-fill"></i> : <i className="ri-play-circle-fill"></i>}</span>
                </div>
                <div className={`${styles.music_control} text-center`} style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                  <audio ref={audioRef} src={musicDetails?.music} />
                  <span><i className="ri-skip-forward-fill" style={{ fontSize: '20px' }}></i></span>
                </div>
                <div className={`${styles.music_control} text-center`} style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                  <audio ref={audioRef} src={musicDetails?.music} />
                  <span><i className="ri-menu-line" style={{ fontSize: '20px' }}></i></span>
                </div>
              </div>
          
            </div>
          </>
      }
    </>
  )
}

export default MusicPlayer 
