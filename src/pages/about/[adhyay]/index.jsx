import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import main from '../../../../public/Bhagavad-Gita.jpg'
import { Ysabeau } from 'next/font/google'
import styles from '../../../styles/Adhyay.module.css'
import axios from 'axios'
import { withRouter } from 'next/router'

const ysabeau = Ysabeau({ subsets: ['latin'], weight: ['200', '300', '400', '500'], style: ['normal', 'italic'] })

function Adhyay({ router }) {
    const [list, setList] = useState([])

    const getAdhyayList = () => {
        const response = axios.get('/api/adhyay')
        .then(data => {
            setList(data?.data)
            console.log('data :>> ', data?.data);
        })
    }

    useEffect(() => {
        getAdhyayList()
    }, [])
  return (
    <>
        <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <h2>Adhyay</h2>
                    <ol>
                        <li><Link href='/'>Home</Link></li>
                        <li>Adhyay</li>
                    </ol>
                </div>
            </div>
        </section>

        <section id="about-us" className={`${styles.adhyay}`}>
            <div className="container" data-aos="fade-up">

                <div className={`row ${styles.content}`}>
                    <div className="col-lg-5" data-aos="fade-right">
                        <Image src={main.src} 
                            className="img-fluid"
                            width={500}
                            height={500}
                            quality={100}
                            alt='bhagavad gita'
                        />
                    </div>
                    <div className={`col-lg-7 pt-4 pt-lg-0 ${ysabeau.className}`} data-aos="fade-left">
                        <p>
                            Lord Krishna spoke Bhagavad-gita to his friend and disciple, Arjuna. This conversation took place on the battlefield of Kurukshetra. Arjuna was representing mankind and asked all the questions we would ask about spiritual life.
                        </p>
                        <p className="font-italic">
                            The Bhagavad-gita is such an important scripture that it can help us to get out of the cycle of birth and death. Anyone who recites Bhagavad-gita with devotion will go to the spiritual world at the time of death. If one reads Bhagavad-gita sincerely the reaction of one’s past deeds will not act upon one.
                        </p>
                        <p className="font-italic">
                            Gita Jayanthi – the day on which lord Krishna spoke to Arjuna is on November 30. Devotees can observe this auspicious day by reading the Bhagavad-gita.
                        </p>
                    </div>
                </div>

                <table className={`table table-responsive mt-5`}>
                    <thead>
                        <tr>
                            <th>Sr.</th>
                            <th>Adhyay</th>
                            <th>Read</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list?.map((items, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <tr>
                                            <td>{items?.id}</td>
                                            <td>{items?.title}</td>
                                            <td>
                                                <button className={`btn btn-sm btn-outline-dark`} onClick={() => router.push(`/about/adhyay/${index + 1}`)}>Read</button>
                                            </td>
                                        </tr>
                                    </React.Fragment>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        </section>
    </>
  )
}

export default withRouter(Adhyay)
