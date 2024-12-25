import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/UseAuth';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight, FaEdit, FaFile, FaSearch, FaStar } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import UseAxios from '../hooks/UseAxios';


const MyTutorials = () => {
    useEffect(() => {
        document.title = 'MyTutorials | TutorLagbe?'
    }, [])
    const navigate = useNavigate()
    const { user } = useAuth()
    const [myTutorials, setMyTutorials] = useState([])
    const axiosSecure = UseAxios()

    useEffect(() => {
        // axios.get(`https://tutor-lagbe-server.vercel.app/my-tutorials?email=${user.email}`, { withCredentials: true })
        //     .then(res => setMyTutorials(res.data))
        axiosSecure.get(`/my-tutorials?email=${user.email}`)
            .then(res => {
                setMyTutorials(res.data)
            })
    }, [])
    // console.log(myTutorials);

    const handleDeleteTutorial = (id) => {
        // console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://tutor-lagbe-server.vercel.app/tutor/${id}`)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Tutorial has been deleted.",
                                icon: "success"
                            });
                            const remaining = myTutorials.filter(tut => tut._id != id)
                            setMyTutorials(remaining)

                        }
                    })
            }
        });


    }

    return (
        <div>
            <div className="h-[250px] md:rounded-bl-[60px] md:rounded-br-[60px] md:w-11/12 mx-auto bg-[#540654] relative">
                <h1
                    className='text-3xl lg:text-4xl font-bold text-center text-white pt-12'>My Tutorials</h1>
            </div>
            <motion.div
                initial={{ y: '-100vh', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className='w-10/12 mx-auto flex flex-col md:flex-row  bg-base-100 shadow rounded-xl  py-8 px-3 md:p-16 my-16 relative -mt-32 gap-12 border border-[#540654] overflow-x-auto'>
                <table className="table ">
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
                            myTutorials?.length > 0 ?
                                myTutorials?.map((tutorial, index) => (
                                    <tr className='hover' key={tutorial._id}>
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
                                                <p>{tutorial?.review}</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center gap-1">
                                                <Link to={`/tutor/${tutorial._id}`} className='btn btn-xs text-xs text-white bg-black'><FaFile /></Link>
                                                <Link to={`/update-tutorial/${tutorial._id}`} className='btn btn-xs text-xs'><FaEdit /></Link>
                                                <button onClick={() => handleDeleteTutorial(tutorial._id)} className='btn btn-xs text-xs btn-error text-white'>X</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                                :
                                <p className='text-lg text-red-500 mt-5'>You didn't Add Any Tutorial Yet</p>
                        }

                    </tbody>
                </table>



            </motion.div>
            <dir className='w-11/12 md:w-10/12 mx-auto'>
                <Link to={'/add-tutorials'}
                    className="text-white my-6 px-6 py-3 w-[230px] rounded-none shadow-lg flex items-center gap-2"
                    style={{
                        background: 'linear-gradient(-30deg, #6c2a8c 50%, #a71678 50%)',
                    }}
                >
                    Add Tutorial <FaArrowRight />
                </Link>

            </dir>

        </div>
    );
};

export default MyTutorials;