import React, { useContext } from 'react';
import { useNavigate } from 'react-router'
import { LogicContext } from '../../store/LogicContext';

export const CreateAc = () => {
            const navigate = useNavigate();
            const {fullNameRef, phoneRef, passRef, emailRef , formValid, handleInput, companyRef} = useContext(LogicContext);
    return (
        <div className="row  d-flex justify-content-start  justify-content-md-center align-items-start align-items-md-center min-vh-100  m-0 pt-md-3 w-100 bg-lightGrey">
            <div className="d-flex flex-column col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4 pt-5 justify-content-start  pt-md-0" id='createAc-content'>
                <form className='form min-vh-80 d-flex flex-column '>
                    <div className="col-6 col-md-12">
                        <h4 className='text-start fw-bolder fs-md-3 fs-2'>Create your PopX account</h4>
                    </div>
                    <div className="mb-0 mb-md-3">
                        <label htmlFor="name" className="form-label fw-medium label-main">Full Name</label>
                        <input type="text" className="form-control inpBtn-Height" ref={fullNameRef} onChange={handleInput} id="name" placeholder="Enter full name" />
                    </div>
                    <div className="mb-0 mb-md-3">
                        <label htmlFor="num" className="form-label fw-medium label-main">Phone Number</label>
                        <input type="text" className="form-control inpBtn-Height" ref={phoneRef} onChange={handleInput} id="num" placeholder="Enter phone number" />
                    </div>
                    <div className="mb-0 mb-md-3">
                        <label htmlFor="email" className="form-label fw-medium label-main">Email address</label>
                        <input type="email" className="form-control inpBtn-Height" id="email" ref={emailRef} onChange={handleInput} placeholder="Enter your email address" />
                    </div>
                    <div className="mb-0 mb-md-3">
                        <label htmlFor="password" className=' form-label fw-medium label-main'>Password</label>
                        <input type="text" id='password' className='form-control inpBtn-Height' ref={passRef} onChange={handleInput} placeholder='Create password' />
                    </div>
                    <div className="mb-0 mb-md-3">
                        <label htmlFor="company-name" className=' form-label fw-medium label-main' >Company Name</label>
                        <input type="text" id='company-name' ref={companyRef} onChange={handleInput} className='form-control inpBtn-Height' placeholder='Enter comapny name' />
                    </div>
                    <div className="mb-0 mb-md-3 row">
                        <p>Are you an Agency ?</p>
                        <div className="col-12 d-flex">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="yes" id="yes" />
                                <label className="form-check-label" htmlFor="yes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check ms-3">
                                <input className="form-check-input" type="radio" name="no" id="no"  />
                                <label className="form-check-label text-black" htmlFor="no">
                                    No
                                </label>
                            </div>
                        </div>

                    </div>
                    <button type='submit' className={`btn  fw-medium fs-6 mt-auto ${formValid ? 'btnEnabled' :'btnDisabled' }`} id='signin-loginBtn' onClick={() => navigate("/sign-in")}> Login</button>
                </form>
            </div>

        </div>
    )
}

export default CreateAc