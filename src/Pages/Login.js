import React, { useState } from 'react'
import './Login.css'
import img1 from '../images/caa0632b7cb3d2dc29294fc91b0a771f.png'
import { Await, Navigate, useNavigate } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { auth } from '../firebase/setup'


function Login() {

    const [phone, setPhone] = useState('')

    const [user, setUser] = useState(null)

    const [otp, setOtp] = useState('')
    const Navigate = useNavigate()

    const [hasFilled, setHasFilled] = useState(false);

    const sendOtp = async () => {
        try {
            const recaptcha = new RecaptchaVerifier(auth, 'recaptcha', {})
            const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha)
            setUser(confirmation)
            setHasFilled(true);

        } catch (err) {
            console.error(err);
        }
        //Navigate('/otp')

    }

    const verifyOtp = async () => {
        try {
            const data = await user.confirm(otp)
            console.log(data);
                    Navigate('/dash')
                        

        }
        catch (err) {
            alert('OTP is Incorrect')

        }

    }



    // const getotp = () => {
    //     Navigate('/otp')
    // }

    if (!hasFilled) {
        return (
            <div>
                <div className="container">
                    <div className="section ">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2bK6vqEh6Za0MztOmh976Wybj9WCJnvu3Yw&s" alt="" />
                    </div>
                </div>
                <div className="section2 d-flex">


                    <div className="col-6">
                        < div className='lg'>
                            <p className='text1'>Login</p>
                            <p className='text2 pb-5'>Login to access your travelwise account</p>

                            {/* <div className='lg1'>'
                        <input type="text" />
                        </div> */}
                            <div className="input-container">
                                {/* <input type="mobile" placeholder="Enter mobile number" /> */}
                                <PhoneInput
                                    country={'in'}
                                    value={phone}
                                    onChange={(phone) => setPhone('+' + phone)}
                                />
                            </div>
                            <div className="button1">
                                <button onClick={sendOtp} className="btn btn-primary">Get OTP</button>

                                <div id='recaptcha'>

                                </div>

                                <div className="dont">
                                    <p className='have'>Don't have an account? <a href="/signup">Sign up</a></p>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-6">
                        <div className="section4 mt-5">
                            <img className='mt-5' src={img1} alt="" />
                        </div>
                    </div>

                </div>
            </div>

        )
    }


    else {

        return (
            <div>
                <div className="container">
                    <div className="section ">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2bK6vqEh6Za0MztOmh976Wybj9WCJnvu3Yw&s" alt="" />
                    </div>
                </div>
                <div className="section2 d-flex">


                    <div className="col-6">
                        < div className='lgg mt-5' >
                            <a className='bb text-black' href="/"><i class="fa-solid fa-less-than"></i> Back to login </a>
                            <p className='text1'>Verify Code</p>
                            <p className='text2 pb-5'>An authentication code has been sent to your email.</p>

                            {/* <div className='lg1'>'
                <input type="text" />
                </div> */}
                            <div className="first input-container">
                                <input onChange={(e) => setOtp(e.target.value)} type="mobile" placeholder="Enter code" />
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
                        <div className="section4 mt-5">
                            <img className='mt-5' src={img1} alt="" />
                        </div>
                    </div>

                </div>
            </div>

        )
    }





}

export default Login