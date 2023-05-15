import React from 'react'
import { Ysabeau } from 'next/font/google'

const ysabeau = Ysabeau({ subsets: ['latin'], weight: ['200', '300', '400', '500'], style: ['normal', 'italic'] })

function MusicList ({musicList, setMusicDetails}) {
  return (
    <>
      <h1 className={`${ysabeau.className}`}>Music List</h1>
      <table className={`table table-responsive table-borderless table-hover mt-3`}>
        <tbody>
          {musicList?.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <tr>
                  <td>{item?.id}</td>
                  <td>{item?.title}</td>
                  <td>
                      <button className={`btn btn-sm btn-dark`} onClick={() => setMusicDetails(item)}>Play</button>
                  </td>
                </tr>
              </React.Fragment>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default MusicList
