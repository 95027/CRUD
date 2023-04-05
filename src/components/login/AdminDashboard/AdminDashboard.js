import React from 'react'
import Sidebar from './Sidebar'
import { Outlet} from 'react-router-dom'

export default function AdminDashboard() {
  return (
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-md-3'>
                <Sidebar/>
            </div>
            <div className='col-md-9'>
              <div className='top-header'></div>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}
