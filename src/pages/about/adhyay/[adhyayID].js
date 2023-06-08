import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styles from '../../../styles/Adhyay.module.css'
import { Ysabeau } from 'next/font/google'
import Head from 'next/head'
import Pagination from '@/components/Pagination'
import Loading from '@/components/Loading'
import Accordion from '@/components/Accordion'
import ChapterDescription from '@/components/ChapterDescription'

const ysabeau = Ysabeau({ subsets: ['latin'], weight: ['200', '300', '400', '500'], style: ['normal', 'italic'] })

function AdhyayID ({ adhyay }) {
    const router = useRouter()
    const {adhyayID} = router.query
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 10

    const paginate = (items, pageNumber, pageSize) => {
      const startIndex = (pageNumber - 1) * pageSize
      return items?.content?.slice(startIndex, startIndex + pageSize);
    }

    const paginatedAdhyay = paginate(adhyay, currentPage, pageSize)

    const onPageChange = (page) => {
      setCurrentPage(page);
    }

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
        <ChapterDescription adhyay={adhyay} />
      </section>

      <section id="about-us" className={`${styles.faq}`}>
        <div className="container" data-aos="fade-up">
          {paginatedAdhyay ? paginatedAdhyay.map((content, index) => {
            return (
              <React.Fragment key={index}>
                <Accordion content={content} />
              </React.Fragment>
            )
          }) : <>
            <Loading />
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
    const res = await fetch(`${process.env.LOCALHOST}/api/adhyay/${adhyayID}` || `${process.env.DEPLOY}/api/adhyay/${adhyayID}`)
    const adhyay = await res.json()
    return { props: { adhyay } }
  } else {
    return { notFound: true }
  }
}
