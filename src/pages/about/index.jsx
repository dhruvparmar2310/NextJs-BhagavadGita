import React from 'react'
import styles from '../../styles/About.module.css'
import { Ysabeau } from 'next/font/google'
import Head from 'next/head'

const ysabeau = Ysabeau({ subsets: ['latin'], weight: ['200', '300', '400', '500'], style: ['normal', 'italic'] })

function About() {
  return (
    <>
      <Head>
        <title>About Us | Bhagavad Gita</title>
        <meta charset="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='keywords' content='Bhagavad Gita, BhagavadGita, bhagavad gita, BhagavadGita by Dhruv Parmar, Bhagavad Gita by Dhruv Parmar' />
        <meta name="description" content="The Srimad Bhagavad Gita is the most sacred and popular book of Hindus. According to the scriptures, the Gita is the supreme book in all the books. The bhagavad gita book contains 700-verses which comes in the Mahabharata (the Indian epic). Gita means the song in Sanskrit and Srimad Bhagavad means the supreme lord. So the Srimad Bhagavad Gita means  ‘the song of the god’." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section id="about-us" className={`${styles.about_us}`} style={{ height: 'auto', marginTop: '60px' }}>
          <div className="container" data-aos="fade-up">

            <div className={`section_title`} title='About Us | Bhagavad Gita'>
              <h2>About Us</h2>
            </div>

            <div className={`container ${styles.content}`} style={{ textAlign: 'justify', fontSize: '25px', wordSpacing: '3px' }}>
              <div className={`row ${styles.description} ${ysabeau.className}`} id="description" data-aos="fade-left" style={{ marginTop: '0', fontStyle: 'italic' }}>

                <p className={`${ysabeau.className} ${styles.slokh}`} title='कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते संगोऽस्त्वकर्मणि। - Bhagavad Gita [Ch.: 2.47]'>
                  कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। <br/>मा कर्मफलहेतुर्भूर्मा ते संगोऽस्त्वकर्मणि।
                </p>
                <p className='mt-3'>
                  The Bhagavad Gita <i className="ri-single-quotes-l"></i><span>The Beautiful Song by God</span><i className="ri-single-quotes-r"></i>, often referred to as the Gita , is a <span>700-verse</span> Hindu scripture that is part of the epic Mahabharata (<span>chapters 23–40 of book 6 of the Mahabharata called the Bhishma Parva</span>), dated to the second half of the first millennium BCE and is typical of the Hindu synthesis. It is considered to be one of the holy scriptures of Hinduism.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  The Gita is set in a narrative framework of dialogue between <span>Pandava prince Arjuna</span> and his guide and <span>charioteer Krishna</span>. At the start of the dharma yuddha between the Pandavas and the Kauravas, Arjuna is preoccupied by a moral and emotional dilemma and despairs about the violence. Wondering if he should renounce the war, he seeks Krishna&apos;s counsel, whose answers and discourse constitute the Gita. Krishna counsels Arjuna to <i className="ri-double-quotes-l"></i><span>fulfil his Kshatriya (warrior) duty to uphold the dharma</span><i className="ri-double-quotes-r"></i> through Karma. The Krishna–Arjuna dialogues cover a broad range of spiritual topics, touching upon ethical dilemmas and philosophical issues that go far beyond the war that Arjuna faces.
                </p>

                <h3 className={`mt-3 ${ysabeau.className}`}>
                  <span>Author</span>:
                </h3><hr/>
                <p>
                  This book is attributed to the sage Vyasa, whose full name was Krishna Dvaipayana, also called <span>Veda-Vyasa</span>. Another Hindu legend states that Vyasa narrated it when the <span>Lord Ganesha</span> broke one of his tusks and wrote down <span>the Mahabharata</span> along with the Bhagavad Gita.
                </p>

                <h3 className={`mt-3 ${ysabeau.className}`}>
                  <span>Importance of Bhagavad Gita</span>:
                </h3><hr/>
                <p>
                  The importance of the Bhagavad Gita lies in its profound teachings, which provide guidance and wisdom for individuals to lead a meaningful and purposeful life. It presents a comprehensive philosophy of life, which addresses various aspects of <span>human existence</span>, <span>including ethics</span>, <span>spirituality</span>, and <span>morality</span>.
                </p>
                <p>
                  The Bhagavad Gita teaches the importance of <span>detachment</span>, <span>self-realization</span>, and <span>devotion to God</span>, which are essential for attaining inner peace and harmony. It also stresses the importance of performing one&apos;s duties with detachment and without attachment to the fruits of one&apos;s actions.
                </p>
                <p>
                  Furthermore, the Bhagavad Gita has been a source of inspiration for many great leaders and thinkers throughout history, including <span>Mahatma Gandhi</span>, who considered it his spiritual guide. Its teachings continue to influence people across the world, irrespective of their religion or background.
                </p>
              </div>
            </div>

          </div>
      </section>
    </>
  )
}

export default About
