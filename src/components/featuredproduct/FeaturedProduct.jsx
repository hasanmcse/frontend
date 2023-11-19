import React from 'react'
import "..//..//common.css"
import featureImg from "../../assets/img/featureImg.png" 
import feature1 from "../../assets/img/feature1.jpg"
import feature2 from "../../assets/img/feature2.jpg"

const FeaturedProduct = () => {
  return (
    <div>
    <div className='featured_area'>
         <div className='container'>
            <div className='row'>
            <h5 className='work_title mb-4'>FEATURED PROJECT</h5>
            <h2 className='work_title_bottom  mb-5'>We Provide The Perfect Solution<br/> to Your Business Growth.</h2>
                <div className='col-md-6 feature_left'>
                    <img src={featureImg} alt='featured image'/>
                </div>
                  <div className='col-md-6 feature_right'>
                    
                    <div className='col-md-3 right_one d-flex'>
                     <div className='single_item'>
                        <img src={feature1} alt=''/>
                        <h6>App Design november 15.11.2023.</h6>
                        <p>Redesign website landing page</p>
                     </div> 
                     <div className='single_item'>
                        <img src={feature2} alt=''/>
                        <h6>App Design november 15.11.2023.</h6>
                        <p>Redesign website landing page</p>
                     </div> 
                    
                    </div>
                    <div className='col-md-3 right_two d-flex'>
                    <div className='single_item'>
                        <img src={feature2} alt=''/>
                        <h6>App Design november 15.11.2023.</h6>
                        <p>Redesign website landing page</p>
                     </div> 
                     <div className='single_item'>
                        <img src={feature1} alt=''/>
                        <h6>App Design november 15.11.2023.</h6>
                        <p>Redesign website landing page</p>
                     </div> 
                    </div>
                 </div>     
            </div>
        </div>
    </div>
    </div>
  )
}

export default FeaturedProduct