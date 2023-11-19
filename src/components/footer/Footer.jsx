
import React from 'react'
import {Container, Row, Col, ListGroup, ListGroupItem,} from 'reactstrap'
import './footer.css'
import '../footer/footer.css'


const footerQuickLinks = [
  {
    display: 'Home',
    path: '/home'
  },
  {
    display: 'Team',
    path: '/team'
  },
  {
    display: 'Service',
    path: '/service'
  },
  {
    display: 'Project',
    path: '/project'
  },
  {
    display: 'Testimonial',
    path: '/testimonial'
  },

]

const Footer = () => {
  return (
       <footer className='footer_area'>
          <div className='Container'>
            <div className='Row'>
            <div className='footer_content'>
                <div className='single_footer col-md-4'>
                      <h2 className='logo'>
                        Design<span>Agency...</span>
                      </h2> 
                      <p>Some footer text about the Design Agency.<br/>This agency is very much consious about their customers.</p>
                 </div>

                <div className='single_footer text-center col-md-4'>
                <h3 className='fw-bold'>Explore</h3>
                  <div>
                  <ListGroup className='link_list'>
                    {
                      footerQuickLinks.map((item, index)=>(
                        <ListGroupItem key={index} className='border-0 ps-0 link_item'>
                          {" "}
                          <a href={item.path}> {item.display} </a>
                        </ListGroupItem>
                      ))
                    }
                  </ListGroup>
                  </div>
                </div>
              
                  <div className='single_footer text-center col-md-4'>
  
                        <h3 className="">Get in Touch</h3>

                        <p>Address: House-102, sirajgong</p>
                        <p> Phone: +88 0123456789 </p>
                        <p>Email: example@gmail.com</p>
                  
                  </div>
              </div>
            </div>
          </div>
       </footer>
  )
}

export default Footer