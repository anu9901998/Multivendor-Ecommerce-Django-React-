import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

const AddressList = () => {
    return (
        <div className="container mt-4">

            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <Sidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className='col-12'>
                            <Link to={"/customer/add-address" } className='btn btn-outline-success mb-4 float-end'> <i className='fa fa-plus-circle'></i> Add Adress</Link>
                            
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4 mb-4'>
                            <div className='card'>
                                <div className='card-body text-muted'>
                                    <h6><i className='fa fa-check-circle  text-success mb-2'></i><br />
                                        st-2 New Krishna Nagar, Near saubhagya Marriage Hall Lucknow</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 mb-4'>
                            <div className='card'>
                                <div className='card-body text-muted'>
                                    <h6>
                                        <span className='badge bg-secondary mb-2'> Mark Default</span><br />
                                        st-2 New Krishna Nagar, Near saubhagya Marriage Hall Lucknow
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 mb-4'>
                            <div className='card '>
                                <div className='card-body text-muted '>
                                    <h6>
                                        <span className='badge bg-secondary mb-2'> Mark Default</span><br />
                                        st-2 New Krishna Nagar, Near saubhagya Marriage Hall Lucknow
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 mb-4'>
                            <div className='card'>
                                <div className='card-body text-muted'>
                                    <h6>
                                        <span className='badge bg-secondary mb-2'> Mark Default</span><br />
                                        st-2 New Krishna Nagar, Near saubhagya Marriage Hall Lucknow
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AddressList