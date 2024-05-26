import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

const WhishList = () => {
  return (
    <div className="container mt-4">

            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
               <Sidebar/>
                </div>
                <div className='col-md-9 col-12 mb-2'>
                   <div className='row'>
                      <div className='table-responsive'>
                        <table className='table table-bordered'>
                            <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    Product
                                </th>
                                <th>
                                    Price
                                </th>
                                <th>
                                   Status
                                </th>
                                <th>
                                   Action
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                       1 
                                    </td>
                                    <td>
                                      <Link to=""><img/></Link>  
                                    </td>
                                    <td>
                                        500
                                    </td>
                                    <td>
                                       <span className='text-success' ><i className='fa fa-check-circle'></i> Completed</span>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger btn-sm'>Remove</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                       2
                                    </td>
                                    <td>
                                      <Link to=""><img/></Link>  
                                    </td>
                                    <td>
                                        500
                                    </td>
                                    <td>
                                       <span className='text-warning' ><i className='fa fa-spin fa-spinner'></i> In Progress</span>
                                    </td>
                                    <td>
                                       
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                      </div>
                   </div>
                </div>
            </div>


        </div>
  )
}

export default WhishList