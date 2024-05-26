import React from 'react'
import { Link } from 'react-router-dom'
const SingleProduct = ({title}) => {
  return (
    <div className="col-12 col-md-3 mb-4">
          <div className="card">
           <Link to='/product/python-timer/123'> <img src="..." className="card-img-top" alt="..." /></Link>
            <div className="card-body">
              <h4 className="card-title"><Link to='/product/python-timer/123'>{title}</Link></h4>
              <h5 className="card-title text-muted">Price : Rs. 256</h5>
            </div>
            <div className="card-footer">
              <button title="Add to cart" className="btn btn-success btn-sm" >
                <i className="fa-solid fa-cart-plus" />
              </button>
              <button title="Add to cart" className="btn btn-danger btn-sm ms-1" >
                <i className="fa-solid fa-heart" />
              </button>
            </div>
          </div>
        </div>
  )
}

export default SingleProduct