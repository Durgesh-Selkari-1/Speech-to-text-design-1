import React from "react";
import Waveform from "./Waveform";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

class WaveformContainer extends React.Component {
    constructor() {
        super();

        this.togglePlay = this.togglePlay.bind(this);
        this.fileUpload = this.fileUpload.bind(this);
        this.resetPlayhead = this.resetPlayhead.bind(this);

        this.state = {
            isPlaying: false,
            isAtBeginning: true,
            urls: [{ url: require("./EnglishPlus_L2_Unit1.mp3"), name: 'track 1' }]
        };
    }

    togglePlay() {
        this.setState({
            isPlaying: !this.state.isPlaying,
            isAtBeginning: false
        });
    }

    resetPlayhead() {
        this.setState({ isAtBeginning: true });
    }

    fileUpload(event) {
        const file = event.target.files[0];
        console.log(event.target.files)
        const reader = new FileReader();

        reader.addEventListener(
            "load",
            () => {
                this.setState(prevState => ({
                    urls: [...prevState.urls, { url: reader.result, name: 'test' }]
                }));
            },
            false
        );

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    render() {
        const waveforms = [];
        this.state.urls.map(url => {
            console.log(url);
            waveforms.push(
                <div>
                    <Waveform
                        src={url.url}
                        isPlaying={this.state.isPlaying}
                        isAtBeginning={this.state.isAtBeginning}
                    />
                    {/* {url.name} */}
                </div>
            );
        });

        return (
            <div className="d-flex flex-column" >
                <div className="d-flex flex-column z-index-1000 position-fixed w-100  " style={{ backgroundColor: "white" }}>
                    <div className='row w-100 m-0 p-0 '>
                        <div className='col-12 col-sm-12' style={{ backgroundColor: "#e9ecef" }}>
                            <div className='container-fluid d-flex justify-content-start align-items-center m-0 p-0'>


                                <div className='d-flex my-3 align-items-center justify-content-center'>
                                    <div>
                                        <Link to="/records" >
                                            <button className='btn btn-lg me-2 text-light rounded-0' style={{ backgroundColor: "#005a50" }} >My Files</button>
                                        </Link>

                                    </div>
                                    <div >
                                        <Link to="/upload" >
                                            <button type='button' className='btn btn-lg  text-light rounded-0' style={{ backgroundColor: "#005a50" }}>Uploads</button>
                                        </Link>
                                    </div>
                                    <div>
                                        <button className="btn shadow-none  ms-2 border-0 outline-0"onClick={this.togglePlay}>
                                            {
                                            this.state.isPlaying
                                            ? <span className="material-icons" style={{ fontSize: 50 }}>pause_circle</span> 
                                            : <span className="material-icons" style={{ fontSize: 50 }}>play_circle</span>}  
                                        </button>


                                    </div>

                                </div>
                                <div className='mx-auto'>
                                    <span className='h4'> My File</span>

                                </div>
                                <div>

                                </div>
                            </div>



                        </div>

                    </div>

                    <div className='row my-3'>
                        <div className='col-12'>
                            <div className="d-flex flex-row">
                                <div>
                                    <span className="mx-2">Created</span><span></span>
                                </div>
                                <div>
                                    <span className="mx-2">Start time</span><span></span>
                                </div>
                                <div>
                                    <span className="mx-2">Length</span><span></span>
                                </div>

                            </div>


                        </div>
                    </div>

                    <div className='row shadow ' style={{ backgroundColor: "#f4f4f4" }}>
                        <div className='col-12'>
                            <div className=" m-0 p-0 " >
                                <span style={{ height: 50 }}>{waveforms}</span>
                            </div>

                            {/* <button onClick={this.togglePlay}>play/pause</button> */}
                            {/* <button onClick={this.resetPlayhead}>reset playhead</button> */}
                            {/* <input type="file" multiple accept="audio/*"  onChange={this.fileUpload} /> */}
                        </div>

                    </div>

                </div>

                <div className=" position-sticky w-100 p-0" style={{ marginTop: "16%", zIndex: '-50' }}>
                    <div className='row m-0 p-0 ' style={{ backgroundColor: "#f4f4f4" }}>
                        <div className='col-lg-6 col-sm-12 col-md-12 mx-auto bg-light m-0'>
                            <div className="container mx-auto m-0  " >
                                <p className="mx-auto my-3">
                                    Text........
                                    In this short video, we would like to show you how you can use AmberScript at its full
                                    potential. The first function we would like to show you is the edit function. This allowed
                                    you to edit errors in the
                                    transcription. In the example above you see for example that allows is transcribed as allowed.
                                </p>
                                <p className="mx-auto">
                                    Text........
                                    In this short video, we would like to show you how you can use AmberScript at its full
                                    potential. The first function we would like to show you is the edit function. This allowed
                                    you to edit errors in the
                                    transcription. In the example above you see for example that allows is transcribed as allowed.
                                </p>
                                <p className="mx-auto">
                                    Text........
                                    In this short video, we would like to show you how you can use AmberScript at its full
                                    potential. The first function we would like to show you is the edit function. This allowed
                                    you to edit errors in the
                                    transcription. In the example above you see for example that allows is transcribed as allowed.
                                </p>
                                <p className="mx-auto">
                                    Text........
                                    In this short video, we would like to show you how you can use AmberScript at its full
                                    potential. The first function we would like to show you is the edit function. This allowed
                                    you to edit errors in the
                                    transcription. In the example above you see for example that allows is transcribed as allowed.
                                </p>

                                <p className="mx-auto">
                                    Text........
                                    In this short video, we would like to show you how you can use AmberScript at its full
                                    potential. The first function we would like to show you is the edit function. This allowed
                                    you to edit errors in the
                                    transcription. In the example above you see for example that allows is transcribed as allowed.
                                </p>
                                <p className="mx-auto">
                                    Text........
                                    In this short video, we would like to show you how you can use AmberScript at its full
                                    potential. The first function we would like to show you is the edit function. This allowed
                                    you to edit errors in the
                                    transcription. In the example above you see for example that allows is transcribed as allowed.
                                </p>
                                <p className="mx-auto">
                                    Text........
                                    In this short video, we would like to show you how you can use AmberScript at its full
                                    potential. The first function we would like to show you is the edit function. This allowed
                                    you to edit errors in the
                                    transcription. In the example above you see for example that allows is transcribed as allowed.
                                </p>
                                <p className="mx-auto">
                                    Text........
                                    In this short video, we would like to show you how you can use AmberScript at its full
                                    potential. The first function we would like to show you is the edit function. This allowed
                                    you to edit errors in the
                                    transcription. In the example above you see for example that allows is transcribed as allowed.
                                </p>
                                <p className="mx-auto">
                                    Text........
                                    In this short video, we would like to show you how you can use AmberScript at its full
                                    potential. The first function we would like to show you is the edit function. This allowed
                                    you to edit errors in the
                                    transcription. In the example above you see for example that allows is transcribed as allowed.
                                </p>
                                <p className="mx-auto">
                                    Text........
                                    In this short video, we would like to show you how you can use AmberScript at its full
                                    potential. The first function we would like to show you is the edit function. This allowed
                                    you to edit errors in the
                                    transcription. In the example above you see for example that allows is transcribed as allowed.
                                </p>

                                <p className="mx-auto">
                                    Text........
                                    In this short video, we would like to show you how you can use AmberScript at its full
                                    potential. The first function we would like to show you is the edit function. This allowed
                                    you to edit errors in the
                                    transcription. In the example above you see for example that allows is transcribed as allowed.
                                </p>

                                <p className="mx-auto">
                                    Text........
                                    In this short video, we would like to show you how you can use AmberScript at its full
                                    potential. The first function we would like to show you is the edit function. This allowed
                                    you to edit errors in the
                                    transcription. In the example above you see for example that allows is transcribed as allowed.
                                </p>




                            </div>

                        </div>

                    </div>
                </div>



            </div>
        );
    }
}

export default WaveformContainer;
