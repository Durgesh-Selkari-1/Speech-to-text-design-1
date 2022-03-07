import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';



export default function Records() {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch('http://audio--manager.herokuapp.com/audio/getAudios');

        setUsers(await response.json());

    }

    useEffect(() => {
        getUsers();

    }, []);


    return (
        <>
            <Header />

            <div className='container bg-light my-5 px-lg-5  table-responsive-xxl table-responsive-sm table-responsive-xl 
                 table-responsive table-responsive-lg table-responsive-md'>

                <table className="table mx-auto table-hover my-5 " >
                    <thead>

                        <tr style={{ fontSize: 'medium' }}>

                            <th scope="col" className=' text-start'>Name</th>
                            <th scope="col" className=' text-start'>Length</th>
                            <th scope="col" className=' text-start'>Last Modified</th>
                            <th scope="col" className=' text-start'>Created</th>

                        </tr>
                    </thead>
                    {/* <tbody>

                        {

                            users.map((curElem) => {
                                return (
                                    

                                        <tr >



                                            <td className=' text-start'><div>{curElem.audioFile}1</div></td>

                                            <td className=' text-start'><div>{curElem.audioLength}1</div></td>

                                            <td className=' text-start'><div>{curElem.updatedAt}</div></td>

                                            <td className=' text-start'><div>{curElem.createdAt}</div></td>




                                        </tr>
                                    
                                )

                            })
                        }

                    </tbody> */}
                </table>




            </div>
            <div className='container d-flex justify-content-center mb-5'>
                <Link to="/upload" >
                    <button className='btn text-light' style={{ backgroundColor: "#005a50" }}>Upload Files</button>
                </Link>

                <div >
                    <Link to="/play" target='_blank' >
                        <button type='button' className='btn text-light rounded-0 mx-3' style={{ backgroundColor: "#005a50" }}>play-page</button>
                    </Link>
                </div>
            </div>

        </>
    )
}