import { Ysabeau } from 'next/font/google'

const ysabeau = Ysabeau({ subsets: ['latin'], weight: ['200', '300', '400', '500'], style: ['normal', 'italic'] })

function Loading () {
  return (
    <>
      <div class="d-flex justify-content-center" style={{ width: '100%', padding: '50px', flexDirection: 'column' }}>
        <div className='text-center'>
          <div className="spinner-grow" role="status" style={{ color: 'var(--theme)', }}>
          </div>
        </div>
        <span className={`sr-only ${ysabeau.className} mt-2`} style={{ textAlign: 'center', fontWeight: '600', fontSize: '20px' }}>
          Loading <span className="spinner-grow spinner-grow-sm" role="status" style={{ color: 'var(--theme)', height: '5px', width: '5px' }}></span> <span className="spinner-grow spinner-grow-sm" role="status" style={{ color: 'var(--theme)', height: '5px', width: '5px' }}></span> <span className="spinner-grow spinner-grow-sm" role="status" style={{ color: 'var(--theme)', height: '5px', width: '5px' }}></span>
        </span>
      </div>
    </>
  )
}

export default Loading
