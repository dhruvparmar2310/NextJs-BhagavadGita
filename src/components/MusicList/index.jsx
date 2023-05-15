import React from 'react'

function MusicList ({item, setMusicDetails}) {
  return (
    <>
        <tr>
            <td>{item?.id}</td>
            <td>{item?.title}</td>
            <td>
                <button className={`btn btn-sm btn-dark`} onClick={() => setMusicDetails(item)}>Play</button>
            </td>
        </tr>
    </>
  )
}

export default MusicList
