import React from 'react'
import styles from '../../styles/About.module.css'
import { Ysabeau } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

const ysabeau = Ysabeau({ subsets: ['latin'], weight: ['200', '300', '400', '500'], style: ['normal', 'italic'] })

function Wallpapers() {
  return (
    <>
        <section id="breadcrumbs" className={`breadcrumbs ${ysabeau.className}`}>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className={ysabeau.className}>Wallpapers</h2>
                    <ol>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/about'>About</Link></li>
                        <li>Wallpapers</li>
                    </ol>
                </div>
            </div>
        </section>

        <section id="about-us" className={`${styles.about_us}`} style={{ height: 'auto' }}>
          <div className="container" data-aos="fade-up">

            <div className={`section_title`}>
              <h2>Wallpapers</h2>
            </div>

            <div className={`container ${styles.content}`} style={{ textAlign: 'justify', fontSize: '25px', wordSpacing: '3px' }}>
              <div className={`row ${styles.description} ${ysabeau.className}`} id="description" data-aos="fade-left" style={{ marginTop: '0', fontStyle: 'italic' }}>

                <div className={`col-lg-4`}>
                    <div className={`card ${styles.card}`} style={{ width: '18rem' }}>
                        <Image
                            src={'/assets/wallpaper/1.jpeg'}
                            width={500}
                            height={500}
                            alt=''
                            className='img-fluid'
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                        </div>
                    </div>
                </div>

                <div className={`col-lg-4`}>
                    <div className={`card ${styles.card}`} style={{ width: '18rem' }}>
                        <Image
                            src={'/assets/wallpaper/2.jpeg'}
                            width={500}
                            height={500}
                            alt=''
                            className='img-fluid'
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                        </div>
                    </div>
                </div>

                <div className={`col-lg-4`}>
                    <div className={`card ${styles.card}`} style={{ width: '18rem' }}>
                        <Image
                            src={'/assets/wallpaper/3.jpeg'}
                            width={500}
                            height={500}
                            alt=''
                            className='img-fluid'
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                        </div>
                    </div>
                </div>
                
              </div>
            </div>

            {/* row second */}
            <div className={`container ${styles.content}`} style={{ textAlign: 'justify', fontSize: '25px', wordSpacing: '3px' }}>
              <div className={`row ${styles.description} ${ysabeau.className}`} id="description" data-aos="fade-left" style={{ marginTop: '10px', fontStyle: 'italic' }}>

                <div className={`col-lg-4`}>
                    <div className={`card ${styles.card}`} style={{ width: '18rem' }}>
                        <Image
                            src={'/assets/wallpaper/4.jpeg'}
                            width={500}
                            height={500}
                            alt=''
                            className='img-fluid'
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                        </div>
                    </div>
                </div>

                <div className={`col-lg-4`}>
                    <div className={`card ${styles.card}`} style={{ width: '18rem' }}>
                        <Image
                            src={'/assets/wallpaper/dwarka-temple.jpeg'}
                            width={500}
                            height={500}
                            alt=''
                            className='img-fluid'
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                        </div>
                    </div>
                </div>

                <div className={`col-lg-4`}>
                    <div className={`card ${styles.card}`} style={{ width: '18rem' }}>
                        <Image
                            src={'/assets/wallpaper/3.jpeg'}
                            width={500}
                            height={500}
                            alt=''
                            className='img-fluid'
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                        </div>
                    </div>
                </div>
                
              </div>
            </div>

          </div>
      </section>
    </>
  )
}

export default Wallpapers
