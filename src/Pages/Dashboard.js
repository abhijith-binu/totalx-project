import React from 'react'
import './Dashboard.css'
import { useNavigate, useParams } from 'react-router-dom'

function Dashboard() {

    const Navigate = useNavigate()

    const logout =()=>{
        Navigate('/')
    }

    let {id} = useParams();
    console.log(id);


  return (
    <div>
        <div className="container">
            <div className="sect">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2bK6vqEh6Za0MztOmh976Wybj9WCJnvu3Yw&s" alt="" />
            </div>
            
            <div className="sect2">
                <div className='number mb-5'>
                    <p>{id}</p>
                </div>
                <div className="logout">
                <button onClick={logout} className="btn btn-primary">Logout</button>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Dashboard