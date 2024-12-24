import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/UseAuth';
import axios from 'axios';
import { motion } from 'framer-motion';
import bgImage from '../assets/bg-find.png';
import { Link } from 'react-router-dom';
import blueBg from '../assets/blue-bg2.jpg'


const MyBookedTutor = () => {
    const { user } = useAuth()
    const [bookedTutor, setBookedTutor] = useState()
    useEffect(() => {
        axios.get(`http://localhost:5000/my-booked-tutors?email=${user?.email}`)
            .then(res => setBookedTutor(res.data))
    }, [])
    // const bookedTutor = useLoaderData()
    return (
        <div className='min-h-screen' style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="h-[250px] md:rounded-bl-[60px] md:rounded-br-[60px] md:w-11/12 mx-auto bg-[#540654] relative">
                <h1
                    className='text-3xl lg:text-4xl font-bold text-center text-white pt-12'>My Booked Tutor</h1>
            </div>
            <motion.div initial={{ y: '-100vh', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}

                className='w-11/12 md:w-10/12 mx-auto flex flex-col md:flex-row  bg-blue-100 shadow rounded-lg  py-8 px-3 md:p-16 my-16 relative -mt-32 gap-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-x-6 gap-y-14'>
                    {
                        bookedTutor?.map(tutor => <div key={tutor._id} className="bg-base-100 p-5 rounded-lg shadow-lg flex items-start relative">
                            {/* Profile Picture */}
                            <div className="flex-shrink-0 absolute -top-10 left-2">
                                <img
                                    src={tutor.image}
                                    alt={tutor.name}
                                    className="w-20 h-20 rounded-full border-8 border-blue-100 "
                                />
                            </div>

                            {/* Tutor Details */}
                            <div className="ml-4 pt-6 flex flex-col h-full">
                                {/* Name and Badge */}
                                <div className="flex items-center space-x-2">
                                    <h3 className="text-lg font-semibold ">{tutor.name}</h3>
                                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                                        {tutor?.status}
                                    </span>
                                </div>
                                <div className='flex-grow h-full'>
                                    <p className="text-sm text-red-600 font-semibold">Tutor ID: {tutor.tutorId}</p>

                                    {/* Additional Info */}
                                    <p className="text-sm ">
                                        <span className="font-medium">Language:</span> <span className='text-lg font-semibold'> {tutor.language}</span>
                                    </p>
                                    <p className="text-sm ">
                                        <span className="font-medium">Gender:</span> {tutor?.gender}
                                    </p>
                                    <p className="text-sm ">
                                        <span className="font-medium">Tuition Experience:</span> {tutor?.experience} Years
                                    </p>
                                    <p className="text-sm flex-grow ">
                                        <span className="font-medium ">Living Location:</span> {tutor?.country}
                                    </p>
                                    <p className="text-sm flex-grow ">
                                        <span className="font-medium ">Review:</span> {tutor?.review}
                                    </p>
                                </div>
                                {/* Tutor ID */}

                                <Link to={`/tutor/${tutor.tutorId}`} className='btn btn-sm mt-2 bg-gradient-to-r from-[#540654] via-[#cc0d85] to-[#540654] text-white '>Details</Link>
                            </div>


                        </div>)
                    }
                </div>
            </motion.div>
        </div>
    );
};

export default MyBookedTutor;