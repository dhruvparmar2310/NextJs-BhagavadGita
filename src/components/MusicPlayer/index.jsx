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
            <Image
              src={musicList[0]?.src}
              className="card-img-top"
              width={100}
              height={300}
              alt="..." 
            />

            <div className='row'>
              <div className={`col-lg-4 ${styles.music_control} text-center`} style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                <audio ref={audioRef} src={musicDetails?.music} />
                <span><i className="ri-skip-back-fill" style={{ fontSize: '25px' }}></i></span>
              </div>
              <div className={`col-lg-4 ${styles.music_control} text-center`}>
                <audio ref={audioRef} src={musicList[0]?.music} />
                <span onClick={handlePlay}>{isPlaying ? <i class="ri-pause-circle-line"></i> : <i class="ri-play-circle-line"></i>}</span>
              </div>
              <div className={`col-lg-4 ${styles.music_control} text-center`} style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                <audio ref={audioRef} src={musicDetails?.music} />
                <span><i className="ri-skip-forward-fill" style={{ fontSize: '25px' }}></i></span>
              </div>
            </div>
            <div className={`${styles.card_body} pt-0`}>
              <table className='table table-responsive table-borderless'>
                <tbody>
                  <tr>
                    <td>
                      <p className={`${ysabeau.className} m-0`}>Title</p>
                    </td>
                    <td>:</td>
                    <td>
                      <p className='m-0'>{musicList[0]?.title}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className={`${ysabeau.className} m-0`}>Artist</p>
                    </td>
                    <td>:</td>
                    <td>
                      <p className='m-0'>{musicList[0]?.artist}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
        :
        <>
          <div className={`${styles.card}`}>
            <Image
                src={musicDetails?.src} 
                className="card-img-top" 
                width={100}
                height={300}
                alt="..."
            />
            <div className='row'>
              <div className={`col-lg-4 ${styles.music_control} text-center`} style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                <audio ref={audioRef} src={musicDetails?.music} />
                <span><i className="ri-skip-back-fill" style={{ fontSize: '25px' }}></i></span>
              </div>
              <div className={`col-lg-4 ${styles.music_control} text-center`}>
                <audio ref={audioRef} src={musicDetails?.music} />
                <span onClick={() => handlePlay()}>{isPlaying ? <i className="ri-pause-circle-line"></i> : <i className="ri-play-circle-line"></i>}</span>
              </div>
              <div className={`col-lg-4 ${styles.music_control} text-center`} style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                <audio ref={audioRef} src={musicDetails?.music} />
                <span><i className="ri-skip-forward-fill" style={{ fontSize: '25px' }}></i></span>
              </div>
            </div>
            <div className={`${styles.card_body} pt-0`}>
              <table className='table table-responsive table-borderless'>
                <tbody>
                  <tr>
                    <td>
                      <p className={`${ysabeau.className} m-0`}>Title</p>  
                    </td>
                    <td>:</td>
                    <td>
                      <p className='m-0'>{musicDetails?.title}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className={`${ysabeau.className} m-0`}>Artist</p>  
                    </td>
                    <td>:</td>
                    <td>
                      <p className='m-0'>{musicDetails?.artist}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> 
        </> 
      }  
    </>
  )
}

export default MusicPlayer 
