import React from 'react'
import img1 from '../images/a66bd464021e86eb52c3b8dc230da000.png'
import './Signup.css'
import { Form } from 'react-router-dom'

function Signup() {
  return (
    <div>
        <div className="sec d-flex">
        <div className="col-6">
                    <div className="section4 mt-5">
                        <img className='mt-5' src={img1} alt="" />
                    </div>
                </div>

         <Form>
           <div className="bb col-6">
              <div className="sec1 d-flex">
                 <div className="col-3">
                 <div className="inputt-container">
                              <input type="text" placeholder="First Name" />
                          </div>
                 </div>
                 <div className="col-3">
                 <div className="inputt-container ms-5">
                              <input type="text" placeholder="Last Name" />
                          </div>
  
                 </div>
  
              </div>
           </div>
         </Form>

        </div>
        
        <div className="sec4">
         <div className="inputs-container ms-5">
                            <input type="mobile" placeholder="Phone Number" />
                        </div>
        <div className="check">
          <div className='chec'>  <input type="checkbox" /></div>
           <div className="terms ms-2">
           <p>I agree to the Terms and Conditions</p>
           </div>

           <div className='but'>
        <button className="btn btn-primary">Submit</button>

        </div>
        </div>

       
         </div>

         <div className="logg">
         <div className="section111 ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2bK6vqEh6Za0MztOmh976Wybj9WCJnvu3Yw&s" alt="" />
                </div>
         </div>

    </div>
  )
}

export default Signup