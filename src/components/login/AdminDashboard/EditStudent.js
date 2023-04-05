import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Icon } from 'semantic-ui-react'

function EditStudent() {
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

function deleteData(stuid){
  axios.delete('https://jsonplaceholder.typicode.com/comments/'+stuid)
  .then((res)=>{
    document.getElementById("Note").innerHTML="Data deleted successfully...."
  })
  .catch((err)=>{
    document.getElementById('Note').innerHTML="Error while deleting the data"
  })
}
function editData(stuid)
{
  axios.get('https://jsonplaceholder.typicode.com/comments/'+stuid)
  .then((res)=>{
    setId(res.data.id)
    setName(res.data.name)
    setEmail(res.data.email)
  })
  .catch((err)=>{
    console.log(err)
  })
}
function submitHandler(e)
{
  e.preventDefault();
  axios.put('https://jsonplaceholder.typicode.com/comments/'+id,{id,name,email})
  .then((res)=>{
    document.getElementById('Note').innerHTML="Data updated successfully..."
  })
  .catch((err)=>{
    document.getElementById('Note').innerHTM="Error while updating the data"
  })

}
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <h1 className='mt-5 text-danger text-center'>Edit or Deleting the Student Data</h1>
          <form onSubmit={submitHandler}>
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
            <input type="submit" value="Update"/>
          </div>
          </div>
        </form>
        <div id="Note" className='bg-success m-4 rounded text-white'></div>
        <div className='table-responsive-sm'>
        <table className='mt-3 table'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th></th>
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
                      <td className='d-flex'>
                        <button className='delete' onClick={()=>deleteData(stu.id)}><Icon name="trash alternate outline"/></button>
                        <button className='edit'onClick={()=>editData(stu.id)}><Icon name="pencil square"/></button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
  )
}

export default EditStudent