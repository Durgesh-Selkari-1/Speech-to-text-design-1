import React, { useState } from 'react';
import Header2 from '../Header/Header2';
import Axios from 'axios';
import { useFormik } from 'formik';
import setFieldValue from 'react'
export default function Upload() {

    const formik = useFormik({
        initialValues: {
            Allfiles: ""
        },

        onSubmit: (values) => {
            let formData = new FormData();



            formData.append("Allfiles", values.Allfiles);
            console.log(values);

            return fetch("https://audio--manager.herokuapp.com/audio/addAudio",
                {
                    method: 'post',
                    headers: new Headers({ Accept: 'application/json' }),
                    body: formData ,
                    mode:"no-cors"
                })
                .then(response => response.json())
                .then(formData => console.log(formData))
                .catch(error => console.log(error))


            // alert("Form Submitted");


            // method:'post',
            // headers:new Headers({Accept:'application/json'}),
            // body:formData})
            // .then((response)=>{
            //     if(response){
            //         console.log(response);
            //     }})
            // .then(formData=>console.log(formData))
            // .catch(error=>console.log(error))
            // const res = await fetch("https://audio--manager.herokuapp.com/audio/addAudio", { method: "POST", body: formData });
            // Axios(
            //     {
            //         url: "https://audio--manager.herokuapp.com/audio/addAudio",
            //         method: "POST",
            //         body:formData 

            //     })
            //     .then((response) => {
            //         if (response) {
            //             console.log(response)
            //         } else if (response) {
            //             console.log(response)

            //         }
            //     })
        }


    })











    return (
        <>
            <Header2 />
            <div className="container-fluid mx-auto my-5">
                <form method="post" className='mx-auto' onSubmit={formik.handleSubmit}>
                    <div className="row mx-auto">
                        <div className="col-10 mx-auto">
                            <div className="card">
                                <div className="card-body mx-auto">
                                    <h5 className="card-title mb-3">Add Audio Files</h5>
                                    <input id="file" name="Allfiles" type="file"accept="audio/*" onChange={(event) => {
                                        formik.setFieldValue("Allfiles", event.target.files[0])

                                    }} />
                                    <button type="submit" className="btn btn-secondary my-3 mx-auto" >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}