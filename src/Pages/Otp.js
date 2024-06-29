import React, { useState } from 'react'
import './Otp.css'
import img1 from '../images/caa0632b7cb3d2dc29294fc91b0a771f.png'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { auth } from '../firebase/setup'


function Otp() {
    const [otp ,setOtp] = useState('')
    const [user, setUser] = useState(null)

     const verifyOtp =async()=>{
        try{
           const data = await user.confirm(otp)
           console.log(data);

        }
        catch(err){
            console.error(err)
        }
        user.confirm(otp)
    }
  return (
    <div>
    <div className="container">
        <div className="section ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2bK6vqEh6Za0MztOmh976Wybj9WCJnvu3Yw&s" alt="" />
        </div>
    </div>
    <div className="section22 d-flex">


        <div className="col-6">
            < div className='lg'>
               <a className='bb text-black' href="/"><i class="fa-solid fa-less-than"></i> Back to login </a> 
                <p className='text1'>Verify Code</p>
                <p className='text2 pb-5'>An authentication code has been sent to your email.</p>

                {/* <div className='lg1'>'
                <input type="text" />
                </div> */}
                <div className="first input-container">
                    <input onChange={(e)=>setOtp(e.target.value)} type="mobile" placeholder="Enter code" />
                </div>
                <div className="didnt">
                        <p className='have'>Didn't receive a code? <a href="/Resend">Resend</a></p>
                    </div>
               
                <div className="button">
                    <button onClick={verifyOtp} className="btn btn-primary">Verify</button>
                    
                </div>
            </div>
        </div>

        <div className="col-6">
            <div className="section44 mt-5">
                <img className='mt-5' src={img1} alt="" />
            </div>
        </div>

    </div>
</div>
  )
}

export default Otp