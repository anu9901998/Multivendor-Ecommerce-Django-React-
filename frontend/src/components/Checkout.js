import React from 'react'
import { Link } from 'react-router-dom'
const Checkout = ({title}) => {
  return (
    <div className="container mt-4">
          <div className="mb-4">
           All Items
          </div>
          <div className='row'>
             <div className='col-md-8 col-12'>
             <div className='table-responsive'>
             <table className='table'>
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
                    </tr>
                 </thead>
                 <tbody>
                    <tr>
                        <td>
                            1
                        </td>
                        <td>
                            <Link><img /></Link>
                        </td>
                        <td>
                            500
                        </td>
                    </tr>
                    <tr>
                        <td>
                            2
                        </td>
                        <td>
                            <Link><img /></Link>
                        </td>
                        <td>
                            500
                        </td>
                    </tr>
                 </tbody>
                 <tfoot>
                    <tr>
                    <th></th>
                    <th>Total</th>
                    <th>1000</th>
                    </tr>
                    <tr>
                        
                        <td colSpan={3} align='center'>
                           <Link to={'/categories'} className='btn btn-secondary'>continue Shopping</Link>
                            <Link className='btn btn-success ms-1'>Proceed to Payment</Link>
                        </td>
                           
                      
                    
                    </tr>
                 </tfoot>
             </table>
          </div>
             </div>
          </div>
         

        </div>
  )
}

export default Checkout