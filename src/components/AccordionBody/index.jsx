import { Ysabeau } from 'next/font/google'
import styles from '../../styles/Adhyay.module.css'

const ysabeau = Ysabeau({ subsets: ['latin'], weight: ['200', '300', '400', '500'], style: ['normal', 'italic'] })

function AccordionBody ({ content }) {
  return (
    <>
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
    </>
  )
}

export default AccordionBody 
