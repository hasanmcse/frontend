import React from 'react'
import "..//..//common.css"
import Card from 'react-bootstrap/Card';


const WorkListItem = [
  {
  
  name:"Grow Your Business",
  
  desc: "We help identify the best way to business."
 

  },
  {
    name:"Improve Your Loyalty",
  
  desc: "We help identify the best way to business.",
  
  },
  {
    name:"Improve Business Models",
 
  desc: "We help identify the best way to business.!",
  
  }
 
]




const WorkList = () => {
  return (
    <div>
         <section id='work_area' className='mt-6 mb-4'>
         <div className='container'>
        <div className='row'>
        <h5 className='work_title mb-4'>Work list</h5>
        <h2 className='work_title_bottom  mb-5'>We Provide The Perfect Solution<br/> to Your Business Growth.</h2>
    
          {
            WorkListItem.map((item, index) =>
          <Card style={{ width: '33%' }}>

            <Card.Body>
            <Card.Title><h5><i class="fa-solid fa-calendar-days"></i></h5></Card.Title>
            <Card.Title><h5>{item.name}</h5></Card.Title>
            <Card.Title><p>{item.desc}</p></Card.Title>
          <Card.Text>Learn More...</Card.Text>
        </Card.Body>
     </Card>
          )
        }
         

          
        </div>
      </div>
        </section>
    </div>
  )
}

export default WorkList