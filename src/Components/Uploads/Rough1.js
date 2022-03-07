import React, { useState } from 'react';
import Header2 from '../Header/Header2';
import Axios from 'axios';
export default function Upload() {

    const [selectedFile, setSelectedFile] = useState();
    // const [finalselectedFile, setfinalselectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {

        var temp_base64 = event.target.files[0];


        // console.log('salo',getBase64(temp_base64));


        //    setSelectedFile(getBase64(temp_base64));
        setSelectedFile(temp_base64);


        setIsFilePicked(true);
    };


    // 'https://audio--manager.herokuapp.com/audio/addAudio',


    // function getBase64(file) {
    //     return new Promise((resolve, reject) => {
    //       const reader = new FileReader();
    //       reader.readAsDataURL(file);
    //       reader.onload = () => resolve(reader.result);
    //       reader.onerror = error => reject(error);
    //     });
    //   }


    const handleSubmission = (event) => {
        event.preventDefault()
        // console.log("durge",selectedFile);
        const formData = new FormData();

        const abc = formData.append('audioFile', selectedFile);
        
        // const sampleFile =formData;
        // console.log(selectedFile.PromiseResult);
        console.log(selectedFile);
        console.log(formData);
        console.log(abc);
        console.log();





        if (isFilePicked) {

            // var temphandle_promise = selectedFile;

            // temphandle_promise.then((response_d) => {


            // console.log('sasss',response_d);

            Axios({
                method: "POST",
                // url: "https://audio---upload.herokuapp.com/upload",
                // url: "http://audio--manager.herokuapp.com/audio/addAudio",
                url:"https://audio--manager.herokuapp.com/audio/addAudio",

             


                data: { audioFile: abc },
            }).then((response) => {
                if (response) {
                    console.log(response)
                } else if (response.status === 503) {
                    console.log(response)

                }
            })

            // })




            /*
            Axios.post(
                // 'https://audio--manager.herokuapp.com/audio/addAudio',
                'https://audio---upload.herokuapp.com/upload',
                { audioFile:selectedFile },
               
                // {
                //     headers: {
                //         'Content-Type': 'multipart/form-data',
                //         'Content-Type': 'application/json',
                //     }
                
          
                // }
                
            )
                .then((result) => {
                    console.log('Success_______:', result);
                    // alert("Submitted")

                })
                .catch((error) => {
                    // console.error('Error_____________:', error);
                    console.error("error............:",error);


                });
             */

            // fetch(
            //     'https://audio--manager.herokuapp.com/audio/addAudio',
            //     {
            //         method: 'POST',
            //         audioFile: formData,
            //         headers: {
            //             'Content-Type': 'multipart/form-data; ',

            //           }
            //     }
            // )
            //     .then((response) => response.json())
            //     .then((result) => {
            //         console.log('Success_______:', result);

            //     })
            //     .catch((error) => {
            //         console.error('Error_____________:', error);

            //     });


        }





        // fetch(
        //     'https://audio--manager.herokuapp.com/audio/addAudio',
        //     {
        //         method: 'POST',
        //         audioFile: formData,
        //         headers: {
        //             'Content-Type': 'multipart/form-data; ',
        //           }
        //     }
        // )
        //     .then((response) => response.json())
        //     .then((result) => {
        //         console.log('Success_______:', result);

        //     })
        //     .catch((error) => {
        //         console.error('Error_____________:', error);

        //     });

    };

    // encType='multipart/form-data'
    return (
        <>
            <Header2 />
            <div className="container-fluid mx-auto my-5">
                <form method="post" className='mx-auto'>
                    <div className="row mx-auto">
                        <div className="col-10 mx-auto">
                            <div className="card">
                                <div className="card-body mx-auto">
                                    <h5 className="card-title mb-3">Add Audio Files</h5>
                                    {/* <input type="file" onChange={changeHandler} accept="audio/*" multiple /><br /> */}
                                    <input type="file" onChange={changeHandler} multiple /><br />

                                    <button onClick={handleSubmission} className="btn btn-secondary my-3 mx-auto" >
                                        Submit
                                    </button>
                                </div>
                                {/* <p>
                                    {
                                       isFilePicked ? (selectedFile.name) :( "no files")
                                    }
                                </p> */}
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