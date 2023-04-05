import axios from 'axios';
import React, { Component } from 'react';

export default class AddData extends Component {
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
    changeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitHandler=(e)=>{
        const {id,name,email,website}=this.state
        e.preventDefault();
            axios.post('https://jsonplaceholder.typicode.com/users/',{id,name,email,website})
            .then(res=>{
                document.getElementById('note').innerHTML="Data inserted successfully..."
            })
            .catch(err=>{
                document.getElementById('note').innerHTML="Error while inserting the data"
            })
    }
  render() {
    const {id,name,email,website}=this.state
    return (
      <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <h1 className='text-center mt-3 text-primary'>Add Data</h1>
            </div>
        </div>
        <form onSubmit={this.submitHandler}>
            <div className='row'>
                <div className='col-md-3 form-group'>
                    <input type="text" name="id" className='form-control' placeholder='Id' value={id} onChange={this.changeHandler}/>
                    <div id="idNote" className='errMsg'></div>
                </div>
                <div className='col-md-3 form-group'>
                    <input type="text" name="name" className='form-control' placeholder='Name' value={name}  onChange={this.changeHandler}/>
                    <div id="nameNote" className='errMsg'></div>
                </div>
                <div className='col-md-3 form-group'>
                    <input type="text" name="email" className='form-control' placeholder='Email' value={email}  onChange={this.changeHandler}/>
                    <div id="emailNote" className='errMsg'></div>
                </div>
                <div className='col-md-3 form-group'>
                    <input type="text" name="website" className='form-control' placeholder='Website' value={website}  onChange={this.changeHandler}/>
                    <div id="webNote" className='errMsg'></div>
                </div>
                <div className='form-group'>
                    <input type="submit"/>
                </div>
            </div>
        </form>
        <div id="note" className='bg-success m-4 rounded text-white'></div>
        <div className='row mt-5'>
            <div className='col-md-12'>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Website</th>
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
}
