import Head from 'next/head'
import Image from 'next/image'
import { Ysabeau } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import bookCover from '../../public/book_cover.jpg'
import Link from 'next/link'
import { saveAs } from 'file-saver'

const ysabeau = Ysabeau({ subsets: ['latin'], weight: ['200', '300', '400', '500'], style: ['normal', 'italic'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Bhagavad Gita</title>
        <meta charset="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='keywords' content='Bhagavad Gita, BhagavadGita, bhagavad gita, BhagavadGita by Dhruv Parmar, Bhagavad Gita by Dhruv Parmar' />
        <meta name="description" content="The Srimad Bhagavad Gita is the most sacred and popular book of Hindus. According to the scriptures, the Gita is the supreme book in all the books. The bhagavad gita book contains 700-verses which comes in the Mahabharata (the Indian epic). Gita means the song in Sanskrit and Srimad Bhagavad means the supreme lord. So the Srimad Bhagavad Gita means  ‘the song of the god’." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero />

      <main>
        <section id="about-us" className={`${styles.about_us}`} style={{ height: 'auto', }}>
          <div className="container" data-aos="fade-up">

            <div className={`section_title`}>
              <h2>About Us</h2>
            </div>

            <div className={`row ${styles.content}`}>
              <div className="col-lg col-md col-sm col-xs" data-aos="fade-right">
                <div className={`${styles.book_page}`}>
                    <div className={`${styles.page_img}`}>
                        <Image src={`${bookCover.src}`} 
                          width={500}
                          height={500}
                          quality={100}
                          alt='book cover'
                        />
                    </div>
                    <div className={`${styles.book_text} ${ysabeau.className}`}>
                        <h1 className={ysabeau.className}><span>Bhagavad</span> Gita</h1>
                        <p>
                            The Bhagavad Gita (“Song of God” or “Song of the Lord”) is among the most important religious texts of Hinduism and easily the best known. It has been quoted by writers, poets, scientists, theologians, and philosophers – among others – for centuries and is often the introductory text to Hinduism for a Western audience.
                        </p>
                    </div>
                </div>
              </div>

            </div>
            <br/><br/><br/>
            <div className="container" style={{ textAlign: 'justify', fontSize: '25px', wordSpacing: '3px' }}>
                <div className={`row ${styles.description} ${ysabeau.className}`} id="description" data-aos="fade-left">
                <p className="font-italic mt-3">
                  <span>Bhagavad Gita</span>, also known as the Gita - <i className="ri-single-quotes-l" style={{ position: 'relative', top: '-10px', fontSize: '13px' }}></i><span>The Song of God</span><i className="ri-single-quotes-r" style={{ position: 'relative', top: '-10px', fontSize: '13px' }}></i> is a practical guide to ones life that guides one to re-organise their life, achieve inner peace and approach the Supreme (<span>the Ultimate Reality</span>). It is a 700-verse text in Sanskrit which comprises chapters 23 through 40 in the Bhishma-Parva section of the <span>Mahabharata</span>.
                </p>
                <ul style={{ textAlign: 'justify', fontSize: '16px', wordSpacing: '3px' }}>
                  <li className={`${styles.slokh}`}>
                    <i className="ri-check-double-line"></i> जो हुआ, अच्छे के लिए हुआ। जो हो रहा है, अच्छे के लिए हो रहा है। जो होगा, अच्छे के लिए ही होगा।
                  </li>
                  <li className={`${styles.slokh}`}>
                    <i className="ri-check-double-line"></i> तुम बस अपना कर्म करो फल की चिंता मत करो।
                  </li>
                  <li className={`${styles.slokh}`}>
                    <i className="ri-check-double-line"></i> तुम खाली हाथ आए हो और खाली हाथ चले जाओगे।
                  </li>
                </ul>
                <p className="font-italic mt-3" style={{ textAlign: 'justify' }}>
                  The Bhagavad Gita is a dialogue between <span>Arjuna</span>, a supernaturally gifted warrior and his guide and charioteer <span>Lord Krishna</span> on the battlefield of Kurukshetra. As both armies stand ready for the battle, the mighty warrior Arjuna, on observing the warriors on both sides becomes overwhelmed with grief and compassion due to the fear of losing his relatives and friends and the consequent sins attributed to killing his own relatives. So, he surrenders to Lord Krishna, seeking a solution. Thus, follows the wisdom of the Bhagavad Gita. Over 18 chapters, the Bhagavad Gita packs an <span>intense analysis of life, emotions and ambitions, discussion of various types of yoga, including Jnana, Bhakti, Karma and Raja, the difference between Self and the material body as well as the revelation of the Ultimate Purpose of Life</span>.
                </p>
              </div>
            </div>

          </div>
        </section>

        <section id="services" className={`${styles.services} ${styles.section_bg}`}>
          <div className="container" data-aos="fade-up">

            <div className="section_title">
              <h2>Wallpaper</h2>
              <p></p>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100" style={{ justifyContent: 'center' }}>
                <div className={`card ${styles.icon_box}`}>
                    <Image 
                      src={'/assets/wallpaper/1.jpeg'} 
                      className="card-img-top" 
                      width={300}
                      height={250}
                      alt='Dark Wallpaper Lord Krishna'
                    />
                    <div className={`${styles.card_body} row`}>
                      <h4 className={`col-lg-10 card-title ${ysabeau.className}`}>Dark Wallpaper Lord Krishna</h4>
                      <p onClick={() => saveAs('/assets/wallpaper/1.jpeg', 'Dark-Wallpaper-Lord-Krishna')} className='col-lg-2'>
                        <i className="ri-heart-fill" style={{ fontSize: '25px', color: 'red', cursor: 'pointer' }}></i>
                      </p>
                    </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100" style={{ justifyContent: 'center' }}>
                <div className={`card ${styles.icon_box}`}>
                  <Image 
                    src={'/assets/wallpaper/2.jpeg'} 
                    className="card-img-top" 
                    width={500}
                    height={250}
                    alt='Dark Wallpaper Krishna'
                  />
                  <div className={`${styles.card_body} row`}>
                    <h4 className={`col-lg-10 card-title ${ysabeau.className}`}>Dark Wallpaper Krishna</h4>
                    <p onClick={() => saveAs('/assets/wallpaper/2.jpeg', 'Dark-Wallpaper-Krishna')} className='col-lg-2'>
                      <i className="ri-heart-fill" style={{ fontSize: '25px', color: 'red', cursor: 'pointer' }}></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100" style={{ justifyContent: 'center' }}>
                <div className={`card ${styles.icon_box}`}>
                  <Image 
                    src={'/assets/wallpaper/6.jpg'} 
                    className="card-img-top" 
                    width={300}
                    height={250}
                    alt='Radha Krishna'
                  />
                  <div className={`${styles.card_body} row`}>
                    <h4 className={`col-lg-10 card-title ${ysabeau.className}`}>Radha Krishna</h4>
                    <p onClick={() => saveAs('/assets/wallpaper/6.jpg', 'RadhaKrishna')} className='col-lg-2'>
                      <i className="ri-heart-fill" style={{ fontSize: '25px', color: 'red', cursor: 'pointer' }}></i>
                    </p>
                  </div>
                </div>
              </div>

              <span className='mt-5' style={{ width: '20%', margin: '0 auto', textAlign: 'center' }}>
                <Link href={'/about/wallpapers'}>View All</Link>
              </span>
            </div>

          </div>
        </section>
      </main>
    </>
  )
}
