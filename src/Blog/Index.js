import React from 'react'
import './style.scss'
import Avatar from './assets/avatar.svg'
const Index = () => {
    return (<div className='container'>
        <div className='row  d-flex justify-content-center gx-5 mt-5'>
            <div className='col-md-8 mt-5 '>
                <div className='form-box bg-light'>
                     <h1 className='mb-5'>Linda Ikejis News Blog</h1>
                     <form action="">
                         <input type="text" className='form-control mb-3' placeholder='Enter Your Name'/>
                         <textarea className='form-control mb-3'  id="" cols="30" rows="10" placeholder='Enter News'></textarea>
                         <button className='news-btn'>Add News</button>
                     </form>
                </div>
            </div>
            <div className='col-md-4 news-box mt-5 bg-light'>
               <h1 className='mt-5'> list of News</h1>
               <div className='news-list shadow-sm mb-3'>
                    <img src={Avatar} className='img-fluid m-3 d-block mx-auto bg-light rounded-circle p-3 shadow-sm ' width='80' alt=""/>
                    <div className='text-center'>
                     nesciunt sunt voluptate porro saepe. Ea ab placeat laudantium optio perferendis sapiente sed, dolorem iste velit voluptates assumenda. Doloribus, enim?
                    </div>
               </div>
               <div className='news-list shadow-sm mb-3'>
                    <img src={Avatar} className='img-fluid m-3 d-block mx-auto bg-light rounded-circle p-3 shadow-sm ' width='80' alt=""/>
                    <div className='text-center'>
                     nesciunt sunt voluptate porro saepe. Ea ab placeat laudantium optio perferendis sapiente sed, dolorem iste velit voluptates assumenda. Doloribus, enim?
                    </div>
               </div>
               <div className='news-list shadow-sm mb-3'>
                    <img src={Avatar} className='img-fluid m-3 d-block mx-auto bg-light rounded-circle p-3 shadow-sm ' width='80' alt=""/>
                    <div className='text-center'>
                     nesciunt sunt voluptate porro saepe. Ea ab placeat laudantium optio perferendis sapiente sed, dolorem iste velit voluptates assumenda. Doloribus, enim?
                    </div>
               </div>
            </div>
        </div>
      
    </div>)
}
export default Index;