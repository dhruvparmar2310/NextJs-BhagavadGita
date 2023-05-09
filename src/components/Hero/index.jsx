import React from 'react'
import styles from '../../styles/Hero.module.css'
import Link from 'next/link'
import { Ysabeau } from 'next/font/google'

const ysabeau = Ysabeau({ subsets: ['latin'], weight: ['200', '300', '400', '500'], style: ['normal', 'italic'] })

function Hero () {
  return (
    <>
        <section id="hero" className={`${styles.hero}`}>
            <div id="heroCarousel" className={`${styles.carousel} ${styles.slide} carousel-fade`} data-ride="carousel">

                <div className={`${styles.carousel_inner}`} role="listbox">
                    <div className={`${styles.carousel_item} active`}>
                        <div className={`${styles.carousel_container}`}>
                            <div className={`${styles.carousel_content} animate__animated animate__fadeInUp ${ysabeau.className}`}>
                                <h2 className={`${ysabeau.className}`}>Welcome to <span>Bhagavad Gita</span></h2>
                                <p className="text-center" style={{fontFamily: 'Baloo Chettan 2'}}>The Song by God</p>
                                <div className="text-center">
                                    <Link href={`#about-us`} className={`${styles.btn_get_started} ${ysabeau.className}`}>Read More</Link>
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

export default Hero 
