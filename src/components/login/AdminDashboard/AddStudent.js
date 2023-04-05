import React, { useEffect, useState } from 'react'
import axios from 'axios'
function AddStudent() {
  const [student,setStudent]=useState([])
  const [id,setId]=useState("");
  const [name,setName]=useState("");
  const [email,setEmail]=useState('');
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then((res)=>{
      setStudent(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  })

function submitHandler(e)
{
  e.preventDefault();
  axios.post('https://jsonplaceholder.typicode.com/comments/',{id,name,email})
  .then((res)=>{
    document.getElementById('Note').innerHTML="Data inserted successfully...."
  })
  .catch((err)=>{
    document.getElementById('Note').innerHTML="Error while uploading the data"
  })
} 
  return (
    <div className='container mt-2'>
      <div className='row'>
        <div className='col-md-12'>
          <h1 className='text-center mt-3 text-primary'>Student Data</h1>
        </div>
      </div>
      <div>
        <form onSubmit={submitHandler} name="f1">
          <div className='row'>
            <div className='col-md-2'>
              <div className='form-group'>
                <input type="text" name="uname" className='form-control' placeholder='Id' value={id} onChange={(e)=>setId(e.target.value)}/>
              </div>
            </div>
            <div className='col-md-5'>
              <div className='form-group'>
                <input type="text" name="uname" className='form-control' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
              </div>
            </div>
            <div className='col-md-5'>
              <div className='form-group'>
                <input type="text" name="uname" className='form-control' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>
            </div>
            <div className='form-group'>
            <input type="submit"/>
          </div>
          </div>
        </form>
      </div>
      <div id="Note" className='bg-success m-4 rounded text-white'></div>
      <div className='row mt-5'>
        <div className='col-md-12'>
          <table className='table-responsive-sm'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {
                student.map((stu)=>{
                  return(
                    <tr key={stu.id}>
                      <td>{stu.id}</td>
                      <td>{stu.name}</td>
                      <td>{stu.email}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AddStudent