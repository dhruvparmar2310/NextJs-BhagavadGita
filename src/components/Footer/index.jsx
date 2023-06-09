import React from 'react'
import styles from '../../styles/Footer.module.css'
import Link from 'next/link'
import { Ysabeau } from 'next/font/google' 
import Head from 'next/head'

const ysabeau = Ysabeau({ subsets: ['latin'], weight: ['200', '300', '400', '500'], style: ['normal', 'italic'] })

function Footer () {
  return (
    <>
        <footer id="footer" className={`${styles.footer} ${ysabeau.className}`}>

            <div className={`${styles.footer_top}`}>
                <div className="container">
                    <div className="row">

                        <div className={`col-lg-3 col-md-6 col-sm-12 ${styles.footer_contact}`} style={{ width: '20rem' }}>
                            <h3 title='Bhagavad Gita As It Is - Dhruv Parmar'>
                                <Link href="/" className={ysabeau.className}>Bhagavad <span>Gita</span></Link>
                            </h3>
                            <h4 className={ysabeau.className} style={{ padding: '0', margin: '0' }}>Get in touch :</h4>
                            <p className={ysabeau.className} style={{ fontSize: '16px' }}>The Song of God<br/><br/>
                                <strong>Phone:<Link href="tel:9586627577"> +91 9586-627-577</Link></strong><br/>
                                <strong>Email:<Link href="mailto:dhanparmar23@gmail.com" title='dhanparmar23@gmail.com'> dhanparmar23@gmail.com</Link></strong><br/>
                            </p>
                        </div>

                        <div className={`col-lg-3 col-md-6 col-sm-4 ${styles.footer_links}`}>
                            <h4 className={ysabeau.className}>Useful Links</h4>
                            <ul className={ysabeau.className}>
                                <li><i className="ri-arrow-right-s-line"></i> <Link href="/">Home</Link></li>
                                <li><i className="ri-arrow-right-s-line"></i> <Link href="/about">About us</Link></li>
                                <li><i className="ri-arrow-right-s-line"></i> <Link href="/bhajan">Bhajan</Link></li>
                                <li><i className="ri-arrow-right-s-line"></i> <Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        <div className={`col-lg-3 col-md-6 col-sm-4 ${styles.footer_links}`}>
                            <h4 className={ysabeau.className}>About Us</h4>
                            <ul className={ysabeau.className}>
                                <li><i className="ri-arrow-right-s-line"></i> <Link href="/about">Bhagavad Gita Book</Link></li>
                                <li><i className="ri-arrow-right-s-line"></i> <Link href="/about/lord-krishna">Lord Krishna</Link></li>
                                <li><i className="ri-arrow-right-s-line"></i> <Link href="/about/iskcon">ISKCON</Link></li>
                            </ul>
                        </div>

                        <div className={`col-lg-3 col-md-6 col-sm-4 ${styles.footer_links}`}>
                            <h4 className={ysabeau.className}>Additional Features</h4>
                            <ul>
                                <li><i className="ri-arrow-right-s-line"></i> <Link href="/about/adhyay">Adhyay</Link></li>
                                <li><i className="ri-arrow-right-s-line"></i> <Link href="/about/wallpapers">Wallpapers</Link></li>
                                <li><i className="ri-arrow-right-s-line"></i> <Link href="/about/quotes">Quotes</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container row" style={{ display: 'flex !important', alignItems: 'center', justifyContent: 'center', alignContent: 'center', padding: '20px', margin: '0 auto' }}>

                <div className="col-lg-6 p-0">
                    <div className={`${styles.copyright}`}>
                        Copyright &copy; <span style={{ fontSize: '18px' }}>2023</span>, <strong style={{ color: 'var(--theme)' }}>Bhagavad <span style={{ color: '#ddd' }}>Gita</span></strong>. All Rights Reserved
                    </div>
                    <div className={styles.credits}>
                        Designed by <Link href="https://dhruvparmar2310.github.io/dhruvparmar/" target="_blank" title='Dhruv Parmar | Bhagavad Gita'>Dhruv Parmar</Link>
                    </div>
                </div>
                <div className={`col-lg-6 p-0 ${styles.social_links}`} style={{ textAlign: 'end' }}>
                    <Link href="https://github.com/dhruvparmar2310" target="_blank" className={styles.github} title='Dhruv Parmar | Github | Bhagavad Gita'><i className="ri-github-fill"></i></Link>
                    <Link href="https://www.facebook.com/dhruv.parmar.73550794" target="_blank" className={styles.facebook} title='Dhruv Parmar | Facebook | Bhagavad Gita'><i className="ri-facebook-fill"></i></Link>
                    <Link href="https://www.instagram.com/dhan.parmar23/" target="_blank" className={styles.instagram} title='Dhruv Parmar | Instagram | Bhagavad Gita'><i className="ri-instagram-line"></i></Link>
                </div>
            </div>
        </footer> 
    </>
  )
}

export default Footer 
