import { Ysabeau } from 'next/font/google'
import styles from '../../styles/Adhyay.module.css'
import AccordionHeader from '../AccordionHeader'
import AccordionBody from '../AccordionBody'

const ysabeau = Ysabeau({ subsets: ['latin'], weight: ['200', '300', '400', '500'], style: ['normal', 'italic'] })

function Accordion ({ content }) {
  return (
    <>
      <div className={`${styles.content} mb-3`}>
        <div className={`accordion accordion-flush`} id={content?.shlokID}>
          <div className={`accordion-item`}>
            <AccordionHeader content={content} />
            <div id={`flush-collapse-${content?.shlokID}`} className={`accordion-collapse collapse `} aria-labelledby={`flush-heading-${content?.shlokID}`} data-bs-parent={`#${content?.shlokID}`}>
              <AccordionBody content={content} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Accordion 
