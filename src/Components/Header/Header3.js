import React from 'react';
import { Link } from 'react-router-dom';


export default function Header3() {
    return (
        <>
            <div className='row w-100 m-0 p-0'>
                <div className='col-12 col-sm-12'  style={{backgroundColor:"#e9ecef"}}>
                    <div className='container-fluid d-flex justify-content-start align-items-center m-0 p-0'>


                        <div className='d-flex my-3 align-items-center'>
                            <div>
                                <button className='btn btn-secondary me-2 rounded-0' >My Files</button>

                            </div>
                            <div >
                                <Link to="/upload" >
                                    <button type='button' className='btn text-light rounded-0'style={{backgroundColor:"#005a50"}}>Uploads</button>
                                </Link>
                            </div>

                        </div>
                        <div className='mx-auto'>
                            <span className='h4'>My Files</span>

                        </div>
                        <div>

                        </div>
                    </div>



                </div>

            </div>
        </>
    )
}