import React, { useState } from 'react'
import path from './logo.png'
import './style.css'
import {useNavigate} from 'react-router-dom'

export default function Login() {
    const [uname,setUname]=useState("")
    const [psw,setPsw]=useState("")
    const navigate=useNavigate();

    const submitHandler=(e)=>{
        e.preventDefault();
        if(uname==="admin" && psw==="12345")
        {
            navigate('/adminDashboard')
        }
        else
        {
            document.getElementById("Note").innerHTML="Invalid user name and password"
        }

    }
  return (
    <div>
        <div className='container mt-150'>
            <div className='row'>
                <div className='col-md-3'>
                    
                </div>
                <div className='col-md-6'>
                        <div className='border-1 p-40'>
                        <div className='row'>
                            <div className='col-md-4 mt-3'>
                                <img src={path} alt="logo"/>
                            </div>
                            <div className='col-md-8'>
                                <div className=''>
                                    <form onSubmit={submitHandler}>
                                        <div className='form-group'>
                                            <input type="text" name="uname" className='form-control' placeholder='User Name' value={uname} onChange={(e)=>setUname(e.target.value)}/>
                                        </div>
                                        <div className='form-group'>
                                            <input type="password" name="psw" className='form-control' placeholder='Password' value={psw} onChange={(e)=>setPsw(e.target.value)}/>
                                        </div>
                                        <div className='form-group'>
                                            <input type="submit" value="Login"/>
                                        </div>
                                    </form>
                                    <div id="Note" className='errmsg'></div>
                                </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className='col-md-3'>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
