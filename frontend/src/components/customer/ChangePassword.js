import React from 'react'
import Sidebar from './Sidebar'

const ChangePassword = () => {
    return (
        <div className="container mt-4">

            <div className='row'>
            <div className='col-md-3 col-12 mb-2'>
               <Sidebar/>
                </div>
                <div className='col-md-8 col-12 mb-2'>
                    <div className='card'>
                        <h4 className='card-header'>
                           Change Password
                        </h4>
                            <div className='card-body'>
                                <form>
                                
                                    <div className="mb-3">
                                    <label for="changePassword" className="form-label">New Password</label>
                                        <input type="password" className="form-control" id="changePassword" />

                                    </div>

                                    <div className="mb-3">
                                        <label for="password" className="form-label"> ConfirmPassword</label>
                                        <input type="password" className="form-control" id="password" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ChangePassword