import React from 'react'
import "..//..//common.css"

const Newsletter = () => {
  return (
    <div>
        <section className='mt-5 mb-4 news_area'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                    <h4 className='news_top mb-4'>Subcribe</h4>
                        <h2 className='mb-4'>Subcribe To Get The Latest New About Us</h2>
                        <div className='subscribe'>
                            <input type='text' placeholder='email' />
                            <button type='button' className='btn'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
  )
}

export default Newsletter