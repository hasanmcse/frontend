import React from 'react'
import imgOne from "../../assets/img/ava-1.jpg"
import imgTwo from "../../assets/img/ava-2.jpg"
import imgThree from "../../assets/img/ava-3.jpg"
import Card from 'react-bootstrap/Card';


const TeamMemberList = [
  {
  name:"Rifat Hasan",
  title: "Web Design",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
 

  },
  {
    name:"Raidh Hasan",
  title: "Web Development",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
  
  },
  {
    name:"Ratul Hasan",
  title: "Digital Marketing",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
  
  }
 
]




const TeamMember = () => {
  return (
    <div>
         <section id='team_area' className='mt-6 mb-4'>
         <div className='container'>
        <div className='row'>
        <h4 className='team_title text-center'>Team member list</h4>
        <h2 className='team_title_bottom text-center mb-5'>Check Our Awesome Team Member...</h2>
        {
          TeamMemberList.map((item, index) =>
          <Card style={{ width: '33%' }}>
            <Card.Img variant="top" src={imgTwo} />
            <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.desc}</Card.Text>
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

export default TeamMember