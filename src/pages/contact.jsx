import React from 'react'
import styles from '../styles/Contact.module.css'
import { Ysabeau } from 'next/font/google'
import Head from 'next/head'

const ysabeau = Ysabeau({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700'], style: ['normal', 'italic'] })

function Contact() {
  return (
    <>
        <Head>
            <title>Contact Us | Bhagavad Gita</title>
            <meta charset="utf-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name='keywords' content='Bhagavad Gita, BhagavadGita, bhagavad gita, BhagavadGita by Dhruv Parmar, Bhagavad Gita by Dhruv Parmar' />
            <meta name="description" content="The Srimad Bhagavad Gita is the most sacred and popular book of Hindus. According to the scriptures, the Gita is the supreme book in all the books. The bhagavad gita book contains 700-verses which comes in the Mahabharata (the Indian epic). Gita means the song in Sanskrit and Srimad Bhagavad means the supreme lord. So the Srimad Bhagavad Gita means  ‘the song of the god’." />
            <link rel="icon" href="/favicon.png" />
        </Head>
        <section id="contact" className={styles.contact}>
            <div className="map-section mt-3">
                <iframe style={{ border: '0', width: '100%', height: '350px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8876483149415!2d72.50454751496792!3d23.027897084950276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848ac8a7faf3%3A0xf226f03a8c6040e9!2sISKCON%20-%20Sri%20Sri%20Radha%20Govindji%20Temple!5e0!3m2!1sen!2sin!4v1683891048499!5m2!1sen!2sin" frameborder="0" allowfullscreen></iframe>
            </div>
            <div className="container mt-5">

                <div className="row justify-content-center" data-aos="fade-up">

                    <div className="col-lg-10">

                        <div className={styles.info_wrap}>
                            <div className="row">
                                <div className={`col-lg-4 ${styles.info}`}>
                                    <i class="ri-map-pin-fill"></i>
                                    <h4 className={ysabeau.className} style={{ fontSize: '25px' }}>Location:</h4>
                                    <p className={ysabeau.className} style={{ fontSize: '16px' }}>ISKCON - Sri Sri Radha Govindji Temple<br />Sarkhej - Gandhinagar Hwy, <br/>near BRTS Bus Stop,<br/>Ahmedabad, Gujarat - 380054</p>
                                </div>

                                <div className={`col-lg-4 ${styles.info} mt-4 mt-lg-0`}>
                                    <i class="ri-mail-fill"></i>
                                    <h4 className={ysabeau.className} style={{ fontSize: '25px' }}>Email:</h4>
                                    <p className={ysabeau.className} style={{ fontSize: '16px' }}><a href="mailto:dhanparmar23@gmail.com" target="_blank">dhanparmar23@gmail.com</a></p>
                                </div>

                                <div className={`col-lg-4 ${styles.info} mt-4 mt-lg-0`}>
                                    <i class="ri-phone-fill"></i>
                                    <h4 className={ysabeau.className} style={{ fontSize: '25px' }}>Call:</h4>
                                    <p className={ysabeau.className} style={{ fontSize: '16px' }}><a href="tel:9586627577"> +91 9586-627-577</a></p>
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

export default Contact
