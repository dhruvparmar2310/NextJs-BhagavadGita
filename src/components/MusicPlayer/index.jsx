import Image from 'next/image'
import React from 'react'

function MusicPlayer ({ musicDetails }) {
  return (
    <>
        <div className='card' style={{ width: '18rem' }}>
            <Image
                src={musicDetails?.src} 
                className="card-img-top" 
                width={100}
                height={100}
                alt="..."
            />
            <div className='row'>
              <div className={`col`}>
                <audio ref={audioRef} src={src} />
                <span onClick={handlePlay}>{isPlaying ? <i class="ri-pause-circle-line"></i> : <i class="ri-play-circle-line"></i>}</span>
              </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div> 
    </>
  )
}

export default MusicPlayer 
