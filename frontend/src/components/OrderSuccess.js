import React from 'react'
import { Link } from 'react-router-dom'

const OrderSuccess = () => {
  return (
    <div className='container mt-4'>
      <div className='row'>
          <div className='col-md-8 offset-2'>
          <div className='card'>
           <div className='card-body text-center'>
               <a> <i className='fa fa-check-circle text-success fa-3x'></i></a>
               <p className='text-success'>Thanks for the Order</p>
               <p>
                <Link className='btn btn-primary mt-2'>Home</Link>
                <Link className='btn btn-secondary mt-2 ms-1'>Dashboard</Link>
               </p>
           </div>
        </div>
          </div>
      </div>
      
    </div>
  )
}

export default OrderSuccess