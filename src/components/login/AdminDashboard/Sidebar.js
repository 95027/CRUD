import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style.css'
import { Icon } from 'semantic-ui-react'

function Sidebar() {
  return (
    <div>
        <div>
          <img src="https://www.elearninfotech.com/img/logo-primary.png" alt="logo"/>
        </div>
        <div className='navigation'>
          <ul>
            <li><NavLink to="addstudent"> <Icon name="add user" className="adduser"/> Add Student</NavLink></li>
            <li><NavLink to="editstudent"> <Icon name="user times" className='removeuser'/> Edit and Delete Student</NavLink></li>
            <li><NavLink to="adddata"> <Icon name="plus circle" className='adduser'/> Add Data</NavLink></li>
            <li><NavLink to="editdata"> <Icon name="minus circle" className='removeuser'/> Edit and Delete Data</NavLink></li>
          </ul>
        </div>
    </div>
  )
}

export default Sidebar