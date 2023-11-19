import React from 'react'


const ServiceItem = [
    {
    title: "Web Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    btn: "Read More",

    },
    {
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    btn: "Read More",
    },
    {
    title: "Digital Marketing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    btn: "Read More",
    }
   
]


const Service = () => {

    
  return (
    <div>
        <section id='service_area' className='mt-6 mb-4'>
         <div className='Container'>
            <div className='Row'>
              <h2 className='service_title text-center mb-4'>Check Services List </h2>
                 <div className='service_item d-flex mb-4'>
               {
                    ServiceItem.map((item,index)=>(
                    <div className='col-md-4' key={index}>
                        <div className='single_feature text-center px-4'>
                            <h2 className='mb-4'></h2>
                            <h6>{item.title}</h6>
                            <p> {item.desc}</p>
                            <button className='btn btn-danger'>{item.btn}</button>
                        </div>
                     </div>
                ))}
               </div> 
            </div>
            <div className='Row'>
                 <div className='service_item d-flex mb-5'>
               {
                    ServiceItem.map((item,index)=>(
                    <div className='col-md-4' key={index}>
                        <div className='single_feature text-center px-4'>
                            <h2 className='mb-4'></h2>
                            <h6>{item.title}</h6>
                            <p> {item.desc}</p>
                            <button className='btn btn-danger'><a>{item.btn}</a></button>
                        </div>
                     </div>
                ))}
               </div> 
            </div>
        </div>
       </section>
    </div>
  )
}

export default Service