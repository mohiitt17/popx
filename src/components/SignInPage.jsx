import React, { useContext } from 'react';
import { useNavigate } from 'react-router'
import { LogicContext } from '../../store/LogicContext';

const SignInPage = () => {
  const {passRef, emailRef, handleInput, formValid} = useContext(LogicContext);
  const navigate = useNavigate();
  
  return (
    <div className="row  d-flex justify-content-center align-items-md-center min-vh-100 p-0 m-0 bg-lightGrey" id='signIn-container'>
      <div className="d-flex flex-column col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4   justify-content-start p-2 pt-5 pt-md-0" id='signIn-content'>
        <div className="col-6 col-md-12">
          <h4 className='text-start fw-medium fs-2'>Singin to your PopX account</h4>
        </div>
        <div className="col-8 col-md-12">
          <p className='text-secondary fw-medium '> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-medium">Email address</label>
          <input type="email" className="form-control" ref={emailRef}  onChange  = {handleInput} id="email" placeholder="Enter your email address" />
        </div>
      <div className="mb-3">
        <label htmlFor = "password" className=' form-label fw-medium'>Password</label>
        <input type="password" id='password' className='form-control' ref={passRef} onChange={handleInput} placeholder='Enter password' />
      </div>
      <button type='submit' className={`btn  fw-medium fs-6 ${formValid ? 'btnEnabled' :'btnDisabled' }`} id='signin-loginBtn' onClick={() => navigate("/profile")}> Login</button>
      </div>
    </div>
  )
}

export default SignInPage