import React from 'react';
import { Link } from 'react-router-dom';
import './PlayJavaScript';
import './Play.css';

export default function Play() {
    return (
        <>
            <div className='row w-100 m-0 p-0'>
                <div className='col-12 col-sm-12' style={{ backgroundColor: "#e9ecef" }}>
                    <div className='container-fluid d-flex justify-content-start align-items-center m-0 p-0'>


                        <div className='d-flex my-3 align-items-center'>
                            <div>
                                <button className='btn btn-secondary me-2 rounded-0' >My Files</button>

                            </div>
                            <div >
                                <Link to="/upload" >
                                    <button type='button' className='btn text-light rounded-0' style={{ backgroundColor: "#005a50" }}>Uploads</button>
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

            <div className='row'>
                <div className='col-12'>

                </div>
            </div>

            <div className='row bg-primary'>
                <div className='col-12'>

                    <div className="audio-container">
                        <div className="track-name">
                            {/* the name of the track */}

                        </div>
                        <div className="audio">

                        </div>
                        <div className="buttons me-2 d-flex">
                            <span className="play-btn btn">
                                <i className="fas fa-play"></i>
                                <i className="fas fa-pause"></i>
                            </span>
                            <span className="stop-btn btn">
                                <i className="fas fa-stop"></i>
                            </span>
                            <span className="mute-btn btn">
                                <i className="fas fa-volume-up"></i>
                                <i className="fas fa-volume-mute"></i>
                            </span>

                            <input type="range" min="0" max="1" step="0.1" className="volume-slider me-2" />

                        </div>

                    </div>




                </div>

            </div>

            <div className='row'>
                <div className='col-12'>

                </div>

            </div>
        
        </>
    )
}