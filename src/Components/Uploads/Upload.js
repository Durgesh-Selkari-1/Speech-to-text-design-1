import React, { useState } from 'react';
import Header2 from '../Header/Header2';
export default function Upload() {

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        

    };

    const handleSubmission = () => {
        const formData = new FormData();

        formData.append('File', selectedFile);

        fetch(
            'https://audio--manager.herokuapp.com/audio/addAudio',
            {
                method: 'POST',
                audioFile: formData,
            }
        )
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };


    return (
        <>
        <Header2/>
            <div className="container-fluid mx-auto my-5 ">
                <form method="post" className='mx-auto'>
                    <div className="row mx-auto">
                        <div className="col-10 mx-auto">
                            <div className="card">
                                <div className="card-body mx-auto">
                                    <h5 className="card-title mb-3">Add Audio Files</h5>
                                    <input type="file" multiple  accept="audio/*"  onChange={changeHandler} /><br />
                                    <input type="submit" value="Submit" onClick={handleSubmission} className="btn btn-secondary my-3 mx-auto" />
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>






            {/* <div>
                <input type="file" accept="audio/*" name="file" onChange={changeHandler} />

                <div>
                    <button onClick={handleSubmission}>Submit</button>
                </div>
            </div> */}


        </>
    )
}