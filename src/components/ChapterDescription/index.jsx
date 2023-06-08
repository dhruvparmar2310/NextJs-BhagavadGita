import Image from 'next/image'
import styles from '../../styles/Adhyay.module.css'
import { Ysabeau } from 'next/font/google'

const ysabeau = Ysabeau({ subsets: ['latin'], weight: ['200', '300', '400', '500'], style: ['normal', 'italic'] })

function ChapterDescription ({ adhyay }) {
  return (
    <>
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
    </>
  )
}

export default ChapterDescription 
