import React from 'react'

import profilePic from "./img/profilePic.png"
import cameraIcon from "./img/camera.png"

const Profile = () => {
    return (
        <div className="row  d-flex justify-content-center  align-items-start align-items-md-center min-vh-100 p-0 m-0 w-100 bg-lightGrey">
            <div className="d-flex flex-column  shadow-lg   col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4  justify-content-start p-0 " id='landPage-content'>
                <div className="bg-white w-100 h-100 p-2">
                    <h3 className='  fs-3 fw-normal '>Account Settings</h3>
                </div>
                
                <div className="row  pt-3 p-3 border-bottom">
                    <div className="col-2 d-flex justify-content-center">
                        <div className="position-relative">
                            <img src={profilePic} alt="" className="img-fluid rounded-circle  object-fit-cover" />
                            <div  className="position-absolute bottom-0 end-0 camera-align  rounded-circle d-flex justify-content-center align-items-center">
                                <img src={cameraIcon} alt=""  />
                            </div>
                        </div>


                    </div>
                    <div className="col-10 lh-sm">
                        <p className='fw-medium'> Marry Doe</p>
                        <p className='mt-0 pt-0'>Marry@gmail.com</p>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>
                                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore EtDolore Magna Aliquyam Erat, Sed Diam
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile