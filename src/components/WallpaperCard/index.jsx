import React from 'react'
import styles from '../../styles/About.module.css'
import Image from 'next/image'
import { Ysabeau } from 'next/font/google'
import { saveAs } from 'file-saver'

const ysabeau = Ysabeau({ subsets: ['latin'], weight: ['200', '300', '400', '500'], style: ['normal', 'italic'] })

function WallpaperCard({ src, width, height, alt, title }) {
  return (
    <>
        <div className={`${styles.icon_box}`} onClick={() => saveAs(`${src}`, `${title}`)}>
            <div style={{ overflow: 'hidden', boxSizing: 'border-box' }}>
                <Image 
                    src={src} 
                    className="card-img-top" 
                    width={width}
                    height={height}
                    alt={alt}
                    quality={100}
                />
            </div>
            <div className={`${styles.card_body} row`}>
                <h4 className={`col-lg-10 card-title ${ysabeau.className}`}>{title}</h4>
                <p onClick={() => saveAs(`${src}`, `${title}`)} className='col-lg-2'>
                    <i className="ri-heart-fill" style={{ fontSize: '25px', color: 'red', cursor: 'pointer' }}></i>
                </p>
            </div>
        </div> 
    </>
  )
}

export default WallpaperCard
