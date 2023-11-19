import React from 'react'
import '..//..//common.css'
import featureImg from "..//../assets/img/featureImg.png"
import imgTwo from "..//../assets/img/hero2.png"

const HeroSection = () => {
  return (
    <div>
         <div className='hero_area'>
            <div className='container '>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='hero_left'>
                            <h1>Increase Your <br/> Customer Loyalty <br/> And Satisfaction</h1>
                            <p>We help businesses like yours earn more customers, <br/>standout from competitors,make more money</p>
                            <button className='btn btn-primary'>Get Started</button>
                        </div>
                    </div>
                    <div className='col-md-6'>
                           <div className='hero_right d-flex'>
                           <div className='img_left'>
                                <img src={featureImg} alt='heroImg1'/>
                            </div>
                            <div className='img_right'>
                                <img src={imgTwo} alt='heroImg2' />   
                            </div>
                           </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection