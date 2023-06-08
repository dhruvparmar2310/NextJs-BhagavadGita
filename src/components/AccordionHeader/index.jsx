import { Ysabeau } from 'next/font/google'
import styles from '../../styles/Adhyay.module.css'

const ysabeau = Ysabeau({ subsets: ['latin'], weight: ['200', '300', '400', '500'], style: ['normal', 'italic'] })

function AccordionHeader ({ content }) {
  return (
    <>
      <h2 className={`accordion-header ${ysabeau.className}`} id={`flush-heading-${content?.shlokID}`}>
        <button className={`accordion-button collapsed ${styles.accordionBtn}`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${content?.shlokID}`} aria-expanded="false" aria-controls={`flush-collapse-${content?.shlokID}`} style={{ whiteSpace: 'pre-line' }}>
          {content?.shlok}
        </button>
      </h2>
    </>
  )
}

export default AccordionHeader 
