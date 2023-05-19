import React from 'react'
import styles from '../../styles/About.module.css'
import { Ysabeau } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

const ysabeau = Ysabeau({ subsets: ['latin'], weight: ['200', '300', '400', '500'], style: ['normal', 'italic'] })

function Wallpapers() {
  return (
    <>
        <Head>
            <title>Wallpapers | Bhagavad Gita</title>
            <meta charset="utf-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name='keywords' content='Bhagavad Gita, BhagavadGita, bhagavad gita, BhagavadGita by Dhruv Parmar, Bhagavad Gita by Dhruv Parmar' />
            <meta name="description" content="The Srimad Bhagavad Gita is the most sacred and popular book of Hindus. According to the scriptures, the Gita is the supreme book in all the books. The bhagavad gita book contains 700-verses which comes in the Mahabharata (the Indian epic). Gita means the song in Sanskrit and Srimad Bhagavad means the supreme lord. So the Srimad Bhagavad Gita means  ‘the song of the god’." />
            <link rel="icon" href="/favicon.png" />
        </Head>
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

        <section id="services" className={`${styles.about_us} ${styles.section_bg}`}>
          <div className="container" data-aos="fade-up">

            <div className={`section_title`}>
              <h2>Wallpaper</h2>
              <p></p>
            </div>

            <div className={`row ${styles.content}`}>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100" style={{ justifyContent: 'center' }}>
                <div className={`${styles.icon_box}`} onClick={() => saveAs('/assets/wallpaper/1.jpeg', 'Dark-Wallpaper-Lord-Krishna')}>
                  <div style={{ overflow: 'hidden', boxSizing: 'border-box' }}>
                    <Image 
                      src={'/assets/wallpaper/1.jpeg'} 
                      className="card-img-top" 
                      width={300}
                      height={250}
                      alt='Dark Wallpaper Lord Krishna'
                      quality={100}
                    />
                  </div>
                  <div className={`${styles.card_body} row`}>
                    <h4 className={`col-lg-10 card-title ${ysabeau.className}`}>Dark Wallpaper Lord Krishna</h4>
                    <p onClick={() => saveAs('/assets/wallpaper/1.jpeg', 'Dark-Wallpaper-Lord-Krishna')} className='col-lg-2'>
                      <i className="ri-heart-fill" style={{ fontSize: '25px', color: 'red', cursor: 'pointer' }}></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100" style={{ justifyContent: 'center' }}>
                <div className={`${styles.icon_box}`}>
                  <div style={{ overflow: 'hidden', boxSizing: 'border-box' }}>
                    <Image 
                      src={'/assets/wallpaper/2.jpeg'} 
                      className="card-img-top" 
                      width={300}
                      height={250}
                      alt='Dark Wallpaper Krishna'
                      quality={100}
                    />
                  </div>
                  <div className={`${styles.card_body} row`}>
                    <h4 className={`col-lg-10 card-title ${ysabeau.className}`}>Dark Wallpaper Krishna</h4>
                    <p onClick={() => saveAs('/assets/wallpaper/2.jpeg', 'Dark-Wallpaper-Krishna')} className='col-lg-2'>
                      <i className="ri-heart-fill" style={{ fontSize: '25px', color: 'red', cursor: 'pointer' }}></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100" style={{ justifyContent: 'center' }}>
                <div className={`${styles.icon_box}`}>
                  <div style={{ overflow: 'hidden', boxSizing: 'border-box' }}>
                    <Image 
                      src={'/assets/wallpaper/6.jpg'} 
                      className="card-img-top" 
                      width={300}
                      height={250}
                      alt='Radha Krishna'
                      quality={100}
                    />
                  </div>
                  <div className={`${styles.card_body} row`}>
                    <h4 className={`col-lg-10 card-title ${ysabeau.className}`}>Radha Krishna</h4>
                    <p onClick={() => saveAs('/assets/wallpaper/6.jpg', 'RadhaKrishna')} className='col-lg-2'>
                      <i className="ri-heart-fill" style={{ fontSize: '25px', color: 'red', cursor: 'pointer' }}></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* second row */}
            <div className={`row ${styles.content}`}>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100" style={{ justifyContent: 'center' }}>
                <div className={`${styles.icon_box}`}>
                  <div style={{ overflow: 'hidden', boxSizing: 'border-box' }}>
                    <Image 
                      src={'/assets/wallpaper/cartoon-of-lord-krishna-with-flute-krishna.jpeg'} 
                      className="card-img-top" 
                      width={300}
                      height={250}
                      alt='Cartoon of Lord Krishna'
                      quality={100}
                    />
                  </div>
                  <div className={`${styles.card_body} row`}>
                    <h4 className={`col-lg-10 card-title ${ysabeau.className}`}>Cartoon of Lord Krishna</h4>
                    <p onClick={() => saveAs('/assets/wallpaper/cartoon-of-lord-krishna-with-flute-krishna.jpeg', 'Cartoon of Lord Krishna')} className='col-lg-2'>
                      <i className="ri-heart-fill" style={{ fontSize: '25px', color: 'red', cursor: 'pointer' }}></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100" style={{ justifyContent: 'center' }}>
                <div className={`${styles.icon_box}`}>
                  <div style={{ overflow: 'hidden', boxSizing: 'border-box' }}>
                    <Image 
                      src={'/assets/wallpaper/kanha-and-radha-rani.jpeg'} 
                      className="card-img-top" 
                      width={300}
                      height={250}
                      alt='Kanha and Radha Rani'
                      quality={100}
                    />
                  </div>
                  <div className={`${styles.card_body} row`}>
                    <h4 className={`col-lg-10 card-title ${ysabeau.className}`}>Kanha and Radha Rani</h4>
                    <p onClick={() => saveAs('/assets/wallpaper/kanha-and-radha-rani.jpeg', 'Kanha and Radha Rani')} className='col-lg-2'>
                      <i className="ri-heart-fill" style={{ fontSize: '25px', color: 'red', cursor: 'pointer' }}></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100" style={{ justifyContent: 'center' }}>
                <div className={`${styles.icon_box}`}>
                  <div style={{ overflow: 'hidden', boxSizing: 'border-box' }}>
                    <Image 
                      src={'/assets/wallpaper/HD-wallpaper-little-krishna-cartoon-krishna.jpeg'} 
                      className="card-img-top" 
                      width={300}
                      height={250}
                      alt='Lord Krishna cute wallpaper'
                      quality={100}
                    />
                  </div>
                  <div className={`${styles.card_body} row`}>
                    <h4 className={`col-lg-10 card-title ${ysabeau.className}`}>Lord Krishna cute wallpaper</h4>
                    <p onClick={() => saveAs('/assets/wallpaper/HD-wallpaper-little-krishna-cartoon-krishna.jpeg', 'Lord Krishna cute wallpaper')} className='col-lg-2'>
                      <i className="ri-heart-fill" style={{ fontSize: '25px', color: 'red', cursor: 'pointer' }}></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* third row */}
            <div className={`row ${styles.content}`}>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100" style={{ justifyContent: 'center' }}>
                <div className={`${styles.icon_box}`}>
                  <div style={{ overflow: 'hidden', boxSizing: 'border-box' }}>
                    <Image 
                      src={'/assets/wallpaper/dwarka.jpeg'} 
                      className="card-img-top" 
                      width={300}
                      height={250}
                      alt='Dwarka'
                      quality={100}
                    />
                  </div>
                  <div className={`${styles.card_body} row`}>
                    <h4 className={`col-lg-10 card-title ${ysabeau.className}`}>Shri Dwarkadhish Temple, Dwarka</h4>
                    <p onClick={() => saveAs('/assets/wallpaper/dwarka.jpeg', 'Dwarka')} className='col-lg-2'>
                      <i className="ri-heart-fill" style={{ fontSize: '25px', color: 'red', cursor: 'pointer' }}></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100" style={{ justifyContent: 'center' }}>
                <div className={`${styles.icon_box}`}>
                  <div style={{ overflow: 'hidden', boxSizing: 'border-box' }}>
                    <Image 
                      src={'/assets/wallpaper/vrindavan.jpeg'} 
                      className="card-img-top" 
                      width={300}
                      height={250}
                      alt='Vrindavan Dham'
                      quality={100}
                    />
                  </div>
                  <div className={`${styles.card_body} row`}>
                    <h4 className={`col-lg-10 card-title ${ysabeau.className}`}>Shri Vrindavan Dham, Mathura</h4>
                    <p onClick={() => saveAs('/assets/wallpaper/vrindavan.jpeg', 'Vrindavan Dham')} className='col-lg-2'>
                      <i className="ri-heart-fill" style={{ fontSize: '25px', color: 'red', cursor: 'pointer' }}></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100" style={{ justifyContent: 'center' }}>
                <div className={`${styles.icon_box}`}>
                  <div style={{ overflow: 'hidden', boxSizing: 'border-box' }}>
                    <Image 
                      src={'/assets/wallpaper/Mayapur.jpeg'} 
                      className="card-img-top" 
                      width={300}
                      height={250}
                      alt='Mayapur Dham, West Bengal'
                      quality={100}
                    />
                  </div>
                  <div className={`${styles.card_body} row`}>
                    <h4 className={`col-lg-10 card-title ${ysabeau.className}`}>Shri Mayapur Dham, West Bengal</h4>
                    <p onClick={() => saveAs('/assets/wallpaper/Mayapur.jpeg', 'Mayapur Dham West Bengal')} className='col-lg-2'>
                      <i className="ri-heart-fill" style={{ fontSize: '25px', color: 'red', cursor: 'pointer' }}></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* fourth row */}
            <div className={`row ${styles.content}`}>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100" style={{ justifyContent: 'center' }}>
                <div className={`${styles.icon_box}`}>
                  <div style={{ overflow: 'hidden', boxSizing: 'border-box' }}>
                    <Image 
                      src={'/assets/wallpaper/4.jpeg'} 
                      className="card-img-top" 
                      width={100}
                      height={500}
                      alt='Hare Krishna'
                      quality={100}
                    />
                  </div>
                  <div className={`${styles.card_body} row`}>
                    <h4 className={`col-lg-10 card-title ${ysabeau.className}`}>Hare Krishna</h4>
                    <p onClick={() => saveAs('/assets/wallpaper/4.jpeg', 'Hare Krishna')} className='col-lg-2'>
                      <i className="ri-heart-fill" style={{ fontSize: '25px', color: 'red', cursor: 'pointer' }}></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100" style={{ justifyContent: 'center' }}>
                <div className={`${styles.icon_box}`}>
                  <div style={{ overflow: 'hidden', boxSizing: 'border-box' }}>
                    <Image 
                      src={'/assets/wallpaper/BeCMbG.webp'} 
                      className="card-img-top" 
                      width={100}
                      height={500}
                      alt='Shri Krishna Dark Wallpaper'
                      quality={100}
                    />
                  </div>
                  <div className={`${styles.card_body} row`}>
                    <h4 className={`col-lg-10 card-title ${ysabeau.className}`}>Shri Krishna Dark Wallpaper</h4>
                    <p onClick={() => saveAs('/assets/wallpaper/BeCMbG.webp', 'Shri Krishna Dark Wallpaper')} className='col-lg-2'>
                      <i className="ri-heart-fill" style={{ fontSize: '25px', color: 'red', cursor: 'pointer' }}></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100" style={{ justifyContent: 'center' }}>
                <div className={`${styles.icon_box}`}>
                  <div style={{ overflow: 'hidden', boxSizing: 'border-box' }}>
                    <Image 
                      src={'/assets/wallpaper/dark-wallpaper-of-kanha.jpeg'} 
                      className="card-img-top" 
                      width={100}
                      height={500}
                      alt='Krishna Wallpaper'
                      quality={100}
                    />
                  </div>
                  <div className={`${styles.card_body} row`}>
                    <h4 className={`col-lg-10 card-title ${ysabeau.className}`}>Krishna Wallpaper</h4>
                    <p onClick={() => saveAs('/assets/wallpaper/dark-wallpaper-of-kanha.jpeg', 'Krishna Wallpaper')} className='col-lg-2'>
                      <i className="ri-heart-fill" style={{ fontSize: '25px', color: 'red', cursor: 'pointer' }}></i>
                    </p>
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
