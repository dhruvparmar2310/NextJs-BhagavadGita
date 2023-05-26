import React, { useState } from 'react'
import styles from '../../styles/Header.module.css'
import Link from 'next/link'
import tilak from '../../../public/images__10_-removebg.png'
import Image from 'next/image'
import { Ysabeau, Lobster } from 'next/font/google'

const ysabeau = Ysabeau({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600'], style: ['normal', 'italic'] })

function Header () {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    console.log('isNavExpanded :>> ', isNavExpanded);
    return (
        <>
            <header id={styles.header} className={`fixed-top shadow bg-white ${styles.header}`}>
                <div className={`container d-flex align-items-center ${styles.home}`}>
                    <div className={
                        isNavExpanded ? `${styles.top_header}` : ``}>
                        <h1 className={`${styles.logo} mr-auto`}>
                            <Link href='/' className={ysabeau.className} style={{ fontWeight: '500' }}><span>Bhagavad</span><Image src={tilak.src} width={50} height={100} alt='main logo' />Gita</Link>
                        </h1>
                        <button className={styles.menu}
                            onClick={() => {
                                setIsNavExpanded(!isNavExpanded);
                            }}
                        >
                            <i className={`ri-menu-line`}></i>
                        </button>
                    </div>
                    <nav className={
                        isNavExpanded ? `${styles.nav_menu} ${styles.expanded} ${ysabeau.className} d-lg-block` : `${styles.nav_menu} d-lg-block`}
                    >
                        <ul>
                            <li className="active">
                                <Link href='/' className={ysabeau.className}>Home</Link>
                            </li>
                            <li className={`${styles.drop_down}`}>
                                <Link href={`#about-us`} className={ysabeau.className}>About <i className="ri-arrow-down-s-line"></i></Link>
                                <ul>
                                    <li>
                                        <Link href={'/about'} className={ysabeau.className}>Book</Link>
                                    </li>
                                    <li>
                                        <Link href={'/about/lord-krishna'} className={ysabeau.className}>Lord Krishna</Link>
                                    </li>
                                    <li>
                                        <Link href={'/about/iskcon'} className={ysabeau.className}>Iskcon</Link>
                                    </li>
                                    <li>
                                        <Link href={'/about/wallpapers'} className={ysabeau.className}>Wallpapers</Link>
                                    </li>
                                    <li>
                                        <Link href={''} className={ysabeau.className}>Quotes</Link>
                                    </li>
                                    <li className={`${styles.drop_down}`}>
                                        <Link href={'/about/adhyay'}>Adhyay <i className="ri-arrow-right-s-line"></i></Link>
                                        <ul>
                                            <li>
                                                <Link href="/about/adhyay/1">Adhyay 1</Link>
                                            </li>
                                            <li>
                                                <Link href="chapter-2.html">Adhyay 2</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href={'/bhajan'} className={ysabeau.className}>Bhajan</Link>
                            </li>
                            <li><Link href={'/contact'} className={ysabeau.className}>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header 
