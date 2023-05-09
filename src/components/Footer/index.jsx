import React from 'react'
import styles from '../../styles/Footer.module.css'
import Link from 'next/link'

function Footer () {
  return (
    <>
        <footer id="footer" className={`${styles.footer}`}>

            <div className={`${styles.footer_top}`}>
                <div className="container">
                    <div className="row">

                        <div className={`col-lg-6 col-md-6 ${styles.footer_contact}`}>
                            <h3>
                                <Link href="/">Bhagavad <span>Gita</span></Link>
                            </h3>
                                <h4>Get in touch :</h4>
                            <p>The Song of God<br/><br/>
                                <strong>Phone:<Link href="tel:9586627577"> +91 9586-627-577</Link></strong><br/>
                                <strong>Email:<Link href="mailto:dpparmar808@gmail.com"> dpparmar808@gmail.com</Link></strong><br/>
                            </p>
                        </div>

                        <div className={`col-lg-3 col-md-6 ${styles.footer_links}`}>
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <Link href="index.html">Home</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link href="#about-us">About us</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link href="services.html">Bhajan</Link></li>
                            </ul>
                        </div>

                        <div className={`col-lg-3 col-md-6 ${styles.footer_links}`}>
                            <h4>Reading</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <Link href="about.html">Adhyay</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link href="chapter-1.html">Adhyay 1</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link href="chapter-2.html">Adhyay 2</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container d-md-flex py-4">

                <div className="mr-md-auto text-center text-md-left">
                    <div className={`$styles.copyright}`}>
                        &copy; Copyright <strong style={{ color: '#fe5b00' }}>Bhagavad <span style={{ color: '#ddd' }}>Gita</span></strong>. All Rights Reserved
                    </div>
                    <div className={styles.credits}>
                        Designed by <Link href="https://dhruvparmar2310.github.io/dhruvparmar/" target="_blank">Dhruv Parmar</Link>
                    </div>
                </div>
                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                    <Link href="https://www.facebook.com/dhruv.parmar.73550794" target="_blank" className="facebook"><i className="bx bxl-facebook"></i></Link>
                    <Link href="https://www.instagram.com/dhr4290/" target="_blank" className="instagram"><i className="bx bxl-instagram"></i></Link>
                </div>
            </div>
        </footer> 
    </>
  )
}

export default Footer 
