import React from 'react';
import { Link } from 'react-router-dom';


export default function Header2() {
    return (
        <>
            <div className='row w-100 m-0 p-0'>
                <div className='col-12 col-sm-12' style={{backgroundColor:"#e9ecef"}}>
                    <div className='container-fluid m-0 p-0 d-flex justify-content-start align-items-center'>


                        <div className='d-flex my-3 align-items-center'>
                            <div>
                            <Link to="/records" >
                                <button className='btn text-light me-2 rounded-0'style={{backgroundColor:"#005a50"}}>Back to Dashboard</button>
                                </Link>
                            </div>
                            {/* <div >
                                <button className='btn btn-primary rounded-0'>Uploads</button>
                            </div> */}

                        </div>
                        <div className='mx-auto'>
                            <span className='h4'>Upload Files</span>

                        </div>
                        <div>

                        </div>
                    </div>



                </div>

            </div>
        </>
    )
}