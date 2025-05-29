import React from 'react'
import {  useNavigate } from 'react-router'

const LandingScreen = () => {
    const navigate = useNavigate();
    return (
        <div className="row  d-flex align-items-md-center align-items-end justify-content-center min-vh-100 p-2 m-0 w-100 bg-lightGrey">
            <div className="d-flex flex-column col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4  justify-content-end p-2" id='landPage-content'>
                <h4 className='text-start fw-bolder fs-md-3 fs-2'>Welcome to popx</h4>
                <div className="col-9 col-md-8">
                    <p className='text-secondary fw-medium   fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <button type='button' className='btn text-light btnEnabled rounded-2 fw-medium buttons' id='createBtn' onClick={() => navigate("/create-account")}>create account</button>
                <button type='button' className='btn text-black mt-2 rounded-2 fw-medium' id='loginBtn' style={{ backgroundColor: " #cebafb" }}onClick={() => navigate("/sign-in")}>Already registered ? Login</button>
            </div>
        </div>
    )
}

export default LandingScreen