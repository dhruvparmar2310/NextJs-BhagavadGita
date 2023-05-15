import React from 'react'

function VideoPlayer({videoDetails, videoList}) {
  return (
    <>
        {
            videoDetails.length === 0 ? 
            <iframe width="560" height="300" src={videoList[0]?.src} title={videoList[0]?.title} frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='mt-3'></iframe>
            : <iframe width="560" height="300" src={videoDetails?.src} title={videoDetails?.title} frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='mt-3'></iframe>
        }

        <table className='table table-responsive table-borderless' style={{ width: '95%', margin: '0 auto' }}>
            <tbody>
                <tr>
                    <th style={{ textAlign: 'left' }}>Title</th>
                    <td style={{ textAlign: 'left' }}>{videoDetails.length === 0 ? '-' : videoDetails?.title}</td>
                </tr>
                <tr>
                    <th style={{ textAlign: 'left' }}>Singer</th>
                    <td style={{ textAlign: 'left' }}>{videoDetails.length === 0 ? '-' : videoDetails?.singer}</td>
                </tr>
            </tbody>
        </table>
    </>
  )
}

export default VideoPlayer
