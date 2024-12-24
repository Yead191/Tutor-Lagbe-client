import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/UseAuth';
import { Link } from 'react-router-dom';
import { FaEdit, FaFile, FaStar } from 'react-icons/fa';

const MyTutorials = () => {
    const { user } = useAuth()
    const [myTutorials, setMyTutorials] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/my-tutorials?email=${user.email}`)
            .then(res => setMyTutorials(res.data))
    }, [])
    // console.log(myTutorials);

    return (
        <div>
            <div className="h-[250px] md:rounded-bl-[60px] md:rounded-br-[60px] md:w-11/12 mx-auto bg-[#540654] relative">
                <h1
                    className='text-3xl lg:text-4xl font-bold text-center text-white pt-12'>My Tutorials</h1>
            </div>
            <div className='w-10/12 mx-auto flex flex-col md:flex-row  bg-base-100 shadow rounded-xl  py-8 px-3 md:p-16 my-16 relative -mt-32 gap-12 border border-[#540654]'>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Tutor Name</th>
                            <th>Language</th>
                            <th>Salary</th>
                            <th>Qualification</th>
                            <th>Review</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myTutorials?.map((tutorial, index) => (
                                <tr key={tutorial._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={tutorial?.photo}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{tutorial?.name}</div>
                                                <div className="text-sm opacity-50">{tutorial?.country}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {tutorial?.language}
                                        <br />
                                        <br />
                                        {
                                            tutorial?.languageProficiency?.map((proficiency, index) =>
                                                <span key={index} className="badge badge-ghost badge-sm">{proficiency}</span>

                                            )
                                        }
                                    </td>
                                    <td>{tutorial?.price}</td>
                                    <td>
                                        {tutorial?.qualification}
                                    </td>
                                    <td>
                                        <div className="flex items-center text-yellow-500 text-sm">
                                            <FaStar className="mr-1" />
                                            <p>{tutorial?.review }</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-1">
                                            <Link to={`/tutor/${tutorial._id}`} className='btn btn-xs text-xs text-white bg-black'><FaFile /></Link>
                                            <Link to={`/update-tutorial/${tutorial._id}`} className='btn btn-xs text-xs'><FaEdit /></Link>
                                            <button className='btn btn-xs text-xs btn-error text-white'>X</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>


            </div>

        </div>
    );
};

export default MyTutorials;