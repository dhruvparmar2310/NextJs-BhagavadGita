import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from '../../../styles/Adhyay.module.css'
import { Lobster } from 'next/font/google'
import main from '../../../../public/assets/adhyay/ch-1.jpg'

const lobster = Lobster({
    subsets: ['latin'],
    weight: '400',
    style: 'normal'
})

function AdhyayID() {
    const [data, setData] = useState([])
    const router = useRouter()
    const {adhyayID} = router.query

  const fetchAdhyay = () => {
    const response = axios.get(`/api/adhyay/${adhyayID}`)
    .then(data => {
      console.log('data >> ', data?.data)
      setData(data?.data)
    })
  } 

  useEffect(() => {
    fetchAdhyay()
    console.log('adhyayID :>> ', adhyayID);
  }, [])
  return (
    <>
        <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <h2>Adhyay - {adhyayID}</h2>
                    <ol>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/about/adhyay'>Adhyay</Link></li>
                        <li>Adhyay - {adhyayID}</li>
                    </ol>
                </div>
            </div>
        </section>

        <section id="about-us" className={`${styles.adhyay}`}>
            <div className="" data-aos="fade-up">

                <div className={`row ${styles.content}`}>
                    <div className="col-lg-4 text-center" data-aos="fade-right">
                        <Image src={main.src} 
                            className="img-fluid"
                            width={500}
                            height={500}
                            quality={100}
                            alt='bhagavad gita'
                        />
                    </div>
                    <div className={`col-lg-8 ${lobster.className}`} data-aos="fade-left">
                      <p>
                        The Bhagavad Gita, or the song of God, was revealed by Lord Shree Krishna to Arjun on the threshold of the epic war of Mahabharata. A decisive battle between two sets of cousins, the Kauravas and the Pandavas, was just about to commence on the battlefield of Kurukshetra. A detailed account of the reasons that led to such a colossal war; is given under Introduction-The Setting of the Bhagavad Gita.
                      </p>
                      <p className="font-italic">
                        The Bhagavad Gita is primarily a conversation between Lord Shree Krishna and Arjun. However, the first chapter begins with a dialogue between King Dhritarashtra and his minister Sanjay. Dhritarashtra being blind, could not leave his palace in Hastinapur but was eager to know the ongoings of the battlefield.
                      </p>
                      <p className="font-italic">
                        Sanjay was a disciple of Sage Ved Vyas, the author of the epic Mahabharata and several other Hindu scriptures. Sage Ved Vyas possessed a mystic ability to see and hear events occurring in distant places. He had bestowed upon Sanjay the miraculous power of distant vision. Therefore, Sanjay could see and hear, what transpired on the battleground of Kurukshetra, and gave a first-hand account to King Dhritarashtra while still being in his palace.
                      </p>
                    </div>
                </div>
            </div>
        </section>

        <section className={styles.faq}>
          <div className={styles.faq_list}>
            <ul>
                {data?.content?.map((item, index) => {
                  return (
                    <React.Fragment key={item?.shlokID}>
                      <li data-aos="fade-up">
                        <Link data-bs-toggle="collapse" className="collapse" href="" role="button" aria-expanded="false" aria-controls="collapseExample">
                          {item?.shlok}<i className={`bx bx-chevron-down ${styles.icon_show}`}></i><i className={`bx bx-chevron-up ${styles.icon_close}`}></i>
                        </Link>
                        <div className="collapse show" data-parent="faq-list" id="collapseExample">
                          <h3 className={lobster.className}>Translation in Hindi :</h3>
                          <p style={{ textAlign: 'justify', fontWeight: '500', wordSpacing: '2px' }}>
                            {item?.translation?.hi?.data}
                          </p>
                          <h3 className={lobster.className}>Translation in English :</h3>
                          <p style={{ textAlign: 'justify', fontWeight: '600', wordSpacing: '2px' }}>
                            {item?.translation?.en?.data}
                          </p>
                        </div>
                      </li>
                    </React.Fragment>
                  )
                })}
            </ul>
          </div>
        </section>
    </>
  )
}

export default AdhyayID
