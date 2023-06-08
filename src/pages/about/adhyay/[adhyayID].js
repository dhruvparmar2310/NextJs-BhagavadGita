import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from '../../../styles/Adhyay.module.css'
import { Ysabeau } from 'next/font/google'
import main from '../../../../public/assets/adhyay/ch-1.jpg'
import { Accordion, Card } from 'react-bootstrap'
import Head from 'next/head'
import Pagination from '@/components/Pagination'

const ysabeau = Ysabeau({ subsets: ['latin'], weight: ['200', '300', '400', '500'], style: ['normal', 'italic'] })

function AdhyayID ({ adhyay }) {
    // const [data, setData] = useState([])
    // const [id, setId] = useState('')
    const router = useRouter()
    const {adhyayID} = router.query
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 10

    const paginate = (items, pageNumber, pageSize) => {
      const startIndex = (pageNumber - 1) * pageSize
      return items?.content?.slice(startIndex, startIndex + pageSize);
    }
    const paginatedAdhyay = paginate(adhyay, currentPage, pageSize)
    console.log('paginatedAdhyay :>> ', paginatedAdhyay);

    const onPageChange = (page) => {
      setCurrentPage(page);
    }

  // const fetchAdhyay = () => {
  //   const response = axios.get(`/api/adhyay/${adhyayID}`)
  //   .then(data => {
  //     console.log('data >> ', data?.data)
  //     setData(data?.data)
  //   })
  //   return response
  // } 

  // useEffect(() => {
  //   fetchAdhyay()
  //   console.log('adhyayID :>> ', adhyayID);
  // }, [])
  // console.log('data :>> ', data)
  console.log('adhyay :>> ', adhyay);

  
  return (
    <>
        <Head>
            <title>Adhyay - {adhyayID} | Bhagavad Gita</title>
            <meta charset="utf-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name='keywords' content='Bhagavad Gita, BhagavadGita, bhagavad gita, BhagavadGita by Dhruv Parmar, Bhagavad Gita by Dhruv Parmar' />
            <meta name="description" content="The Srimad Bhagavad Gita is the most sacred and popular book of Hindus. According to the scriptures, the Gita is the supreme book in all the books. The bhagavad gita book contains 700-verses which comes in the Mahabharata (the Indian epic). Gita means the song in Sanskrit and Srimad Bhagavad means the supreme lord. So the Srimad Bhagavad Gita means  ‘the song of the god’." />
            <link rel="icon" href="/favicon.png" />
        </Head>
        <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className={ysabeau.className}>{adhyay?.title}</h2>
                    <ol>
                        <li><Link  className={ysabeau.className} href='/'>Home</Link></li>
                        <li><Link  className={ysabeau.className} href='/about/adhyay'>Adhyay</Link></li>
                        <li className={ysabeau.className}>Adhyay - {adhyayID}</li>
                    </ol>
                </div>
            </div>
        </section>

        <section id="about-us" className={`${styles.adhyay}`}>
            <div className="container" data-aos="fade-up">

                <div className={`row ${styles.content}`}>
                    <div className="col-lg-4 text-center" data-aos="fade-right">
                        <Image 
                          src={adhyay?.image}
                          // src={data?.image}
                          className="img-fluid"
                          width={500}
                          height={500}
                          quality={100}
                          alt={adhyay?.title}
                          // alt={data?.title}
                        />
                    </div>
                    <div className={`col-lg-8 ${ysabeau.className}`} data-aos="fade-left">
                      <p>{adhyay?.description}</p>
                      {/* <p>{data?.description}</p> */}
                    </div>
                </div>
            </div>
        </section>

        <section id="about-us" className={`${styles.faq}`}>
          <div className="container" data-aos="fade-up">

              {paginatedAdhyay ? paginatedAdhyay.map((content, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className={`${styles.content} mb-3`}>
                      <div className={`accordion accordion-flush`} id={content?.shlokID}>
                        <div className={`accordion-item`}>
                          <h2 className={`accordion-header ${ysabeau.className}`} id={`flush-heading-${content?.shlokID}`}>
                            <button className={`accordion-button collapsed ${styles.accordionBtn}`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${content?.shlokID}`} aria-expanded="false" aria-controls={`flush-collapse-${content?.shlokID}`} style={{ whiteSpace: 'pre-line' }}>
                                {content?.shlok}
                            </button>
                          </h2>
                          <div id={`flush-collapse-${content?.shlokID}`} className={`accordion-collapse collapse `} aria-labelledby={`flush-heading-${content?.shlokID}`} data-bs-parent={`#${content?.shlokID}`}>
                            <div className={`accordion-body ${styles.accordionBody} ${ysabeau.className}`}>
                              <h4 className={ysabeau.className}>Translation in Hindi:</h4><hr style={{ position: 'relative', top: '-10px', marginBottom: '3px' }} />
                              <p style={{ fontSize: '16px', fontWeight: '400' }}>
                                <i className="ri-double-quotes-l" style={{ position: 'relative', top: '-10px', fontSize: '12px', color: 'var(--theme)' }}></i>
                                  {content?.translation?.hi?.data}
                                <i className="ri-double-quotes-r" style={{ position: 'relative', top: '-10px', fontSize: '12px', color: 'var(--theme)' }}></i>
                              </p>

                              <h4 className={`${ysabeau.className} mt-4`}>Translation in English:</h4><hr style={{ position: 'relative', top: '-10px', marginBottom: '3px' }} />
                              <p className={ysabeau.className} style={{ whiteSpace: 'pre-line' }}>
                                <i className="ri-double-quotes-l" style={{ position: 'relative', top: '-10px', fontSize: '12px', color: 'var(--theme)' }}></i>
                                  {content?.translation?.en?.data}
                                <i className="ri-double-quotes-r" style={{ position: 'relative', top: '-10px', fontSize: '12px', color: 'var(--theme)' }}></i>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                )
              }) : <>
                <div class="d-flex justify-content-center" style={{ width: '100%', padding: '50px', flexDirection: 'column' }}>
                    <div className='text-center'>
                        <div className="spinner-grow" role="status" style={{ color: 'var(--theme)', }}>
                        </div>
                    </div>
                    <span className={`sr-only ${ysabeau.className} mt-2`} style={{ textAlign: 'center', fontWeight: '600', fontSize: '20px' }}>
                        Loading <span  className="spinner-grow spinner-grow-sm" role="status" style={{ color: 'var(--theme)', height: '5px', width: '5px'}}></span> <span  className="spinner-grow spinner-grow-sm" role="status" style={{ color: 'var(--theme)', height: '5px', width: '5px'}}></span> <span  className="spinner-grow spinner-grow-sm" role="status" style={{ color: 'var(--theme)', height: '5px', width: '5px'}}></span>
                    </span>
                </div>
              </>}
            <Pagination
              items={adhyay?.content?.length} // 100
              currentPage={currentPage} // 1
              pageSize={pageSize} // 10
              onPageChange={onPageChange}
            />
          </div>

        </section>
    </>
  )
}

export default AdhyayID

export const getStaticPaths = async () => {
  const paths = []

  for (let i = 1; i <= 18; i++) {
    paths.push({
      params: {
        // adhyay: 'adhyay',
        adhyayID: i.toString(),
      },
    })
  }
  return {
    // paths: [
    //   {
    //     params: {
    //       adhyay: 'some-value',
    //       adhyayID: '1',
    //     },
    //   }, // See the "paths" section below
    // ],
    paths: paths,
    fallback: true, // false or "blocking"
  }
}
 
export const getStaticProps = async ({ params }) => {
  const adhyayID = parseInt(params.adhyayID)
  if (adhyayID >= 1 && adhyayID <= 18) {
    const res = await fetch(`${process.env.LOCALHOST}/api/adhyay/${adhyayID}`)
    const adhyay = await res.json()
    return { props: { adhyay } }
  } else {
    return { notFound: true }
  }
}
