import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import imgOne from "../../assets/img/ava-1.jpg"
import imgTwo from "../../assets/img/ava-2.jpg"
import imgThree from "../../assets/img/ava-3.jpg"





const Testimonial = () => {
  
  return (
  
    
       <div className='container'>
       <div className='row'>
       <h4 className='testimonial_title text-center mb-4'>Customer Complements</h4>
       <div className='col-md-10 text-center'>
        <Carousel>
      <Carousel.Item>
        <img src={imgThree} alt="First slide"/>
        <Carousel.Caption>
          <h3>Mr. Ratul Hasan</h3>
          <p>Digital Agencys services is really awesome.<br/>I wish for their eitire team.Thanks.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={imgTwo} alt="Second slide"/>
        <Carousel.Caption>
          <h3>MRS. RIDIDA HASAN</h3>
          <p>Digital Agencys services is really awesome.<br/>I wish for their eitire team.Thanks.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={imgOne} alt="Third slide"/>
        <Carousel.Caption>
          <h3>MR. JOHN</h3>
          <p>
          Digital Agencys services is really awesome.<br/>I wish for their eitire team.Thanks..
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</div>
</div>
</div>
    
  )
}

export default Testimonial;