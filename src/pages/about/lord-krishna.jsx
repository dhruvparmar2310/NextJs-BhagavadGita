import React from 'react'
import { Ysabeau } from 'next/font/google'
import Link from 'next/link'
import styles from '../../styles/About.module.css'
import Image from 'next/image'

const ysabeau = Ysabeau({ subsets: ['latin'], weight: ['200', '300', '400', '500'], style: ['normal', 'italic'] })

function LordKrishna() {
  return (
    <>
        <section id="breadcrumbs" className={`breadcrumbs ${ysabeau.className}`}>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className={ysabeau.className}>Lord Krishna</h2>
                    <ol>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/about'>About</Link></li>
                        <li>Lord Krishna</li>
                    </ol>
                </div>
            </div>
        </section>

        <section id="about-us" className={`${styles.about_us}`} style={{ height: 'auto', }}>
          <div className="container" data-aos="fade-up">

            <div className={`section_title`}>
              <h2>Lord Krishna</h2>
            </div>

            <div className={`container ${styles.content}`} style={{ textAlign: 'justify', fontSize: '25px', wordSpacing: '3px' }}>
                <div className='text-center mb-3'>
                    <Image 
                        src='/assets/wallpaper/4.jpeg'
                        className="img-fluid" 
                        width={300}
                        height={300}
                        quality={100}
                        alt='Lord Krishna'
                    />
                </div>
              <div className={`row ${styles.description} ${ysabeau.className}`} id="description" data-aos="fade-left" style={{ marginTop: '0', fontStyle: 'italic' }}>
                <p className='mt-3'>
                    <span>Lord Krishna</span> is a major deity in <span>Hinduism</span>. The name comes from a Sanskrit word (<span style={{ fontSize: '18px' }}>कृष्ण</span>, <span style={{ fontSize: '18px' }}>kṛṣṇa</span>). He is worshipped as the <span>8th avatar</span> of <span>Lord Vishnu</span> and also as the Supreme god in his own right. He is the god of <span>protection</span>, <span>compassion</span>, <span>tenderness</span>, and <span>love</span>; and is one of the most popular and widely revered among Indian divinities. Krishna&apos;s birthday is celebrated every year by Hindus on <span>Krishna Janmashtami</span> according to the lunisolar Hindu calendar, which falls in <span>late August or early September</span> of the Gregorian calendar.
                </p>

                <h3 className={`mt-3 ${ysabeau.className}`}>
                  <span>Birth Place</span>:
                </h3><hr/>
                <p>
                    The birth of Lord Krishna is also an interesting story, Lord Krishna was born in <span>Mathura Jail cell</span> to <span>Shri Devaki</span> and her husband, <span>Shri Vasudeva</span>, of the Yadava (<span>Yaduvanshi</span>) clan. Devaki&apos;s brother is a tyrant named <span>Kans</span>. At Devaki&apos;s wedding, according to Puranic legends, King Kans is told by fortune tellers that a child of Devaki would kill him. Kans killed all of Devaki&apos;s children. But when Lord Krishna was born, Vasudeva secretly carries the infant Krishna away across the Yamuna (<span>river of India</span>) in a heavy rain with protection of Shesnag (<span>known as Lord Balarama&apos;s avatar</span>), and exchanges him with <span>Shri Yashoda&apos;s</span> daughter. When Kans tries to kill the newborn, the exchanged baby appears as the Hindu <span>Goddess Yogamaya</span>, warning him that his death has arrived in his kingdom, and then disappears, according to the legends in the Puranas. Krishna grows up with <span>Shri Nanda</span> and his wife, Yashoda, near modern-day of Mathura. Two of Krishna&apos;s siblings also survive, namely <span>Balarama</span> (also known as Daav. i.e.: Brother) and <span>Subhadra</span>. The day of the birth of Krishna is celebrated as <span>Shri Krishna Janmashtami</span>.
                </p>

                <h3 className={`mt-3 ${ysabeau.className}`}>
                  <span>King of Dwarka</span>:
                </h3><hr/>
                <div className='text-center mb-5'>
                    <Image 
                        src='/assets/wallpaper/dwarka-temple.jpeg'
                        className="img-fluid" 
                        width={900}
                        height={500}
                        quality={100}
                        alt='Lord Krishna'
                    />
                </div>
                <p>
                    Yes, Lord Krishna is known as the <span style={{ textTransform: 'uppercase' }}>King of Dwarka</span>. The history of Dwarka can be traced back to ancient times. According to Hindu mythology, Dwarka was a city established by Lord Krishna after he left Mathura to avoid the attacks of his uncle, King Kans.
                </p>
                <p>
                    Legend has it that Lord Krishna built the city of Dwarka on the banks of the <span>Gomti River</span> and made it his capital. The city was said to be a <span>beautiful and prosperous one</span>, with grand palaces, temples, and gardens. It was also said to be protected by a massive wall that surrounded the city. Lord Krishna lived in the place near Dwarka named as <span>Bet Dwarka</span> with his family and ruled over the city as its king. He was said to be a just and fair ruler, beloved by his people.
                </p>
                <p>
                    However, after Lord Krishna&apos;s death, the city of Dwarka is said to have been swallowed by the sea. According to legend, this was the result of a curse placed on the city by the sage Durvasa. Today, the submerged ruins of Dwarka can still be seen off the coast of Gujarat. 
                </p>
                <p>
                    In modern times, Dwarka has been rebuilt as a city and is considered one of the <span>7th</span> most ancient cities in India. It is a popular pilgrimage site for Hindus, who visit the city to pay their respects to Lord Krishna and the other deities who are worshipped there. The city is also known for its <span>temples</span>, including the <span>Dwarkadhish Temple</span>, also known as <span>Jaggat Mandir of Dwarka</span> which is dedicated to <span>Lord Krishna</span>.
                </p>
                <iframe style={{ marginTop: '20px', marginBottom: '20px' }} width="300" height="560" src="https://www.youtube-nocookie.com/embed/p8BAOvuBDJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <h3 className={`mt-3 ${ysabeau.className}`}>
                  <span>Avatars of Lord Krishna</span>:
                </h3><hr/>
                <p>
                    <ol>
                        <li>
                            Matsya Avatar: 
                            <p>
                                This is a half-fish and half-human form. As per the Matsya Purana, Matsya warns Manu, who is the leader of human beings, about the great flood and helps him to rescue all the motile living beings, the Vedas, and the seeds of all plants.
                            </p>
                        </li>
                        <li>
                            Kurma Avatar: 
                            <p>
                                Kurma is a half tortoise and half-man form. When the Milky Ocean was churned for Amrit, it was he who balanced Mount Mandara on his shell. He also supported the weight of the cosmos on his back.
                            </p>
                        </li>
                        <li>
                            Varaha Avatar: 
                            <p>
                                Varaha is a half-man and half-boar form. In this form, Vishnu killed the demon Hiranyaksha to save Bhudevi, who personified the earth and used his tusks to bring her back from the depths of the ocean.
                            </p>
                        </li>
                        <li>
                            Narasimha Avatar: 
                            <p>
                                Narasimha is a half lion and half-human form. His descent ended the reign of the demon king, Hiranyakashipu, and restored peace, order, and righteousness on earth.
                            </p>
                        </li>
                        <li>
                            Vamana Avatar: 
                            <p>
                                The dwarf Brahmin, Vamana, was the 5th avatar of Vishnu. He took this avatar to check the immense power of the demon king, Mahabali. He accomplishes his aim by playing a trick on him during a yajna ceremony. He also sent him down to Patal or the underworld.
                            </p>
                        </li>
                        <li>
                            Parashurama Avatar: 
                            <p>
                                This avatar is a Brahmin Kshatriya. He is portrayed as a sage holding an ax in his hand. He came to end the tyranny of the arrogant Kshatriyas, who were drunk on power and harassed others.
                            </p>
                        </li>
                        <li>
                            Rama Avatar: 
                            <p>
                                The hero of the epic, Ramayana, this avatar is also a major deity of Hindus. He took birth to kill the demon king Ravana, who kidnapped his wife Sita and took her to his kingdom, Lanka.
                            </p>
                        </li>
                        <li>
                            Krishna Avatar: 
                            <p>
                                Krishna is also a major deity in Hinduism. He took birth to end the reign of his tyrant uncle, Kamsa, who was his mother&apos;s brother. In the epic, Mahabharata, he was the ally and advisor of the Pandava princes. He was Arjuna&apos;s charioteer during the Kurukshetra war.
                            </p>
                        </li>
                        <li>
                            Buddha Avatar: 
                            <p>
                                He was born as the prince, Siddhartha Gautam, but left his palace and family to seek enlightenment. Later, he came to be known as Gautama Buddha. He was the founder of Buddhism and taught people to avoid misery by following the Eightfold Path.
                            </p>
                        </li>
                        <li>
                            Kalki Avatar: 
                            <p>
                                The 10th avatar of Vishnu, Kalki, is yet to be born. It is said that he will destroy the demon Kali who is responsible for all the evil in this age, and begin a new Satyayuga or Kalkiyuga. Kali is a personification of all negative emotions and elements. Kalki is portrayed as a warrior who rides a white horse and holds a shining sword.
                            </p>
                        </li>
                    </ol>
                </p>
              </div>
            </div>

          </div>
        </section>
    </>
  )
}

export default LordKrishna
