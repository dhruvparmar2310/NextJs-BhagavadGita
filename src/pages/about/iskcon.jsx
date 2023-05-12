import React from 'react'
import { Ysabeau } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/About.module.css'
import { CarouselItem, Carousel } from 'react-bootstrap'

const ysabeau = Ysabeau({ subsets: ['latin'], weight: ['200', '300', '400', '500'], style: ['normal', 'italic'] })

function Iskcon() {
  return (
    <>
        <section id="breadcrumbs" className={`breadcrumbs ${ysabeau.className}`}>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className={ysabeau.className}>Iskcon</h2>
                    <ol>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/about'>About</Link></li>
                        <li>Iskcon</li>
                    </ol>
                </div>
            </div>
        </section>
        
        <section id="about-us" className={`${styles.about_us}`} style={{ height: 'auto' }}>
          <div className="container" data-aos="fade-up">

            <div className={`section_title`}>
              <h2>Iskcon</h2>
              <Image 
                src={'/assets/iskcon/logo.png'} 
                width={100} 
                height={100} 
                alt='Iskcon Logo'
              />
            </div>

            <div className={`mt-3 ${styles.iskcon} ${styles.description} ${ysabeau.className}`}>

                <Carousel fade variant="dark">
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src="/assets/iskcon/logo.jpeg"
                            alt="Iskcon Logo"
                            width={100}
                            height={600}
                            quality={100}
                            style={{ opacity: '1', }}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src="/assets/iskcon/shrilla-prabhupaad.jpeg"
                            alt="Shrila Prabhupada"
                            width={100}
                            height={600}
                            quality={100}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src="/assets/iskcon/vrindavan.jpeg"
                            alt="Vrindavan Temple"
                            width={100}
                            height={600}
                            quality={100}
                        />

                        <Carousel.Caption>
                            <h3 className={ysabeau.className}>ISKCON Vrindavan Temple</h3>
                            <p className='text-end'>Shri Shri Krishna Balaram Mandir, Vrindavan</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src="/assets/iskcon/Mayapur.jpeg"
                            alt="Mayapur Dham"
                            width={100}
                            height={600}
                            quality={100}
                            style={{ opacity: '1', filter: 'grayscale(30%)' }}
                        />

                        <Carousel.Caption style={{ position: 'absolute', top: '70px', textAlign: 'left' }}>
                            <h3 className={ysabeau.className}>Mayapura Dham</h3>
                            <p>World Largest ISKCON Mandir, West Bengal</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src="/assets/iskcon/lord-krishna.jpeg"
                            alt="Mayapur Dham"
                            width={100}
                            height={600}
                            quality={100}
                            style={{ opacity: '1' }}
                        />
                    </Carousel.Item>
                </Carousel>

                <p className='mt-5'>
                    The <span>International Society for Krishna Consciousness</span> (ISKCON), otherwise known as the <span>Hare Krishna</span> movement, includes more than <span>five hundred</span> major centers, temples and rural communities, nearly one hundred affilated <span>vegetarian restaurants</span>, thousands of <span>namahattas</span> or <span>local meeting groups</span>, a wide variety of <span>community projects</span>, and millions of <span>congregational members</span> worldwide. Although less than fifty years on the global stage, ISKCON has expanded widely since its founding by His Divine Grace <span>A. C. Bhaktivedanta Swami Prabhupāda</span> in <span>New York City</span> in 1966.
                </p>
                <p>
                    ISKCON belongs to the <span>Gaudiya-Vaishnava sampradāya</span>, a monotheistic tradition within the Vedic or Hindu culture. Philosophically it is based on the Sanskrit texts <span>Bhagavad-gītā</span> and the <span>Bhagavat Purana</span>, or <span>Srimad Bhagavatam</span>. These are the historic texts of the devotional bhakti yoga tradition, which teaches that the ultimate goal for all living beings is to reawaken their love for God, or Lord Krishna, the <i className="ri-double-quotes-l" style={{ fontSize: '12px', position: 'relative', top: '-10px' }}></i><span>all-attractive one</span><i className="ri-double-quotes-r" style={{ fontSize: '12px', position: 'relative', top: '-10px' }}></i>.
                </p>
                <p>
                    God is known across the world by many names including <span>Allah</span>, <span>Jehovah</span>, <span>Yahweh</span>, <span>Rama</span>, <span>Jesus Christ</span>, etc. ISKCON devotees chant God’s names in the form of the maha-mantra, or the great prayer for deliverance:
                </p>
                <p className='text-center'>
                    <span style={{ color: 'red' }}>
                        Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare |<br/>
                        Hare Rama Hare Rama, Rama Rama, Hare Hare ||
                    </span>
                </p>
                <p>
                    Many leading academics have highlighted ISKCON’s authenticity. <span>Diana Eck</span>, Professor of Comparative Religion and Indian Studies at <span>Harvard University</span>, describes the movement as <i className="ri-double-quotes-l" style={{ fontSize: '12px', position: 'relative', top: '-10px' }}></i><span>a tradition that commands a respected place in the religious life of humankind</span><i className="ri-double-quotes-r" style={{ fontSize: '12px', position: 'relative', top: '-10px', left: '5px' }}></i>. In the 1980s, <span>Dr. A. L. Basham</span>, one of the world’s authorities on Indian history and culture, wrote of ISKCON that, <i className="ri-double-quotes-l" style={{ fontSize: '12px', position: 'relative', top: '-10px' }}></i><span>It arose out of next to nothing in less than twenty years and has become known all over the West. This, I feel, is a sign of the times and an important fact in the history of the Western world</span><i className="ri-double-quotes-r" style={{ fontSize: '12px', position: 'relative', top: '-10px', left: '5px' }}></i>.
                </p>
                <p>
                    ISKCON’s founder, <span>Srila Prabhupada</span>, has drawn appreciation from scholars and religious leaders alike for his remarkable achievement in presenting <span>India’s Vaishnava</span> spiritual culture in a relevant manner to contemporary Western and worldwide audiences.
                </p>
                <p>
                    Members of ISKCON practice <span>bhakti-yoga</span> in their homes and also worship in temples. They also promote bhakti-yoga, or <span>Krishna Consciousness</span>, through <span>festivals</span>, the <span>performing arts</span>, <span>yoga seminars</span>, <span>public chanting</span>, and the <span>distribution of the society’s literatures</span>. ISKCON members have also opened hospitals, schools, colleges, eco-villages, free food distribution projects, and other institutions as a practical application of the path of devotional yoga.
                </p>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            What is ISKCON?
                        </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the firsaccordion body.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Accordion Item #2
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second  accordion body.imagine this being filled with some actual content.
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

export default Iskcon
