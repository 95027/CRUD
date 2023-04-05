import axios from 'axios'
import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

export default class EditData extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data:[],
       id:'',
       name:'',
       email:'',
       website:''
    }
  }
  componentDidMount()
  {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>{
      this.setState({
        data:res.data
      })
    })
    .catch(err=>{
      console.log(err)
    })
  }
  deleteData=(userid)=>{
    axios.delete('https://jsonplaceholder.typicode.com/users/'+userid)
    .then(res=>{
      document.getElementById('note').innerHTML="Data deleted successfully..."
    })
    .catch(err=>{
      document.getElementById('note').innerHTML="Error while deleting the data"
    })
  }
  editData=(userid)=>{
    axios.get('https://jsonplaceholder.typicode.com/users/'+userid)
    .then(res=>{
      this.setState({
        id:res.data.id,
        name:res.data.name,
        email:res.data.email,
        website:res.data.website
      })
    })
    .catch(err=>{
      console.log(err)
    })
  }
  changeHandler=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  submitHandler=(e)=>{
    const {id,name,email,website}=this.state
    e.preventDefault();
    axios.put('https://jsonplaceholder.typicode.com/users/'+id,{id,name,email,website})
    .then(res=>{
      document.getElementById('note').innerHTML="Data updated successfully"
    })
    .catch(err=>{
      document.getElementById('note').innerHTML="Error while updating the data"
    })

  }
  render() {
    const {id,name,email,website}=this.state
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 className='mt-5 text-danger text-center'>Edit or Deleting the Data</h1>
          </div>
        </div>
        <form onSubmit={this.submitHandler}>
          <div className='row'>
            <div className='col-md-3 form-group'>
              <input type="text" name="id" placeholder='Id' className='form-control' value={id} onChange={this.changeHandler}/>
            </div>
            <div className='col-md-3 form-group'>
              <input type="text" name="name" placeholder='Name' className='form-control' value={name} onChange={this.changeHandler}/>
            </div>
            <div className='col-md-3 form-group'>
              <input type="text" name="email" placeholder='Email' className='form-control' value={email} onChange={this.changeHandler}/>
            </div>
            <div className='col-md-3 form-group'>
              <input type="text" name="website" placeholder='Website' className='form-control' value={website} onChange={this.changeHandler}/>
            </div>
            <div>
              <input type="submit" value="Update"/>
            </div>
          </div>
        </form>
        <div id="note" className='bg-success m-4 rounded text-white'></div>
        <div className='row mt-5'>
          <div className='col-md-12'>
            <div className='table-responsive-sm'>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Website</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.data.map((users)=>{
                    return(
                      <tr key={users.id}>
                        <td>{users.id}</td>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>{users.website}</td>
                        <td className='d-flex'>
                          <button className='delete'onClick={()=>{this.deleteData(users.id)}}><Icon name="trash alternate outline"/></button>
                          <button className='edit' onClick={()=>{this.editData(users.id)}}><Icon name="pencil square"/></button>
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
}
