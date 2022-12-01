import React from 'react'
import Navbar from '../HomePage/Navbar'
import FooterB from './FooterB'


function Home() {
  return (
    <>
       
       <Navbar/>
       
             
      
       <div className='mt-50'>
          <div className="body-Image" >
          
            <img src="https://res.cloudinary.com/dggvxdkri/image/upload/v1665065736/samples/Attendance%20pict/timeSchedule_l0bkbl.jpg"
             alt="" style={{width:1350,height:695,objectFit:"cover"}}></img>
           </div>
           </div>


           <div className='box3 bg-gray-900' style={{width:1350,height:200}}>
            <FooterB/>
           </div>
  
    </>
  )
}

export default Home