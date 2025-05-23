import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/UseAuth';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import bgImage from '../assets/bg-find.png';
import { FaArrowRight, FaSearch, FaStar } from 'react-icons/fa';
import UseAxios from '../hooks/UseAxios';

const MyBookedTutor = () => {
    useEffect(() => {
        document.title = 'MyBookedTutor | TutorLagbe?';
    }, []);

    const { user } = useAuth();
    const [bookedTutor, setBookedTutor] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosSecure = UseAxios();

    useEffect(() => {
        setLoading(true);
        axiosSecure
            .get(`/my-booked-tutors?email=${user?.email}`)
            .then(res => {
                setBookedTutor(res.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [user?.email, axiosSecure]);

    return (
        <div className='min-h-screen ' style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="h-[250px] md:rounded-bl-[60px] md:rounded-br-[60px] md:w-11/12 mx-auto bg-[#540654] relative">
                <h1 className='text-3xl lg:text-4xl font-bold text-center text-white pt-12'>My Booked Tutor</h1>
            </div>
            <motion.div
                initial={{ y: '-100vh', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className='w-11/12 md:w-10/12 mx-auto flex flex-col md:flex-row bg-base-100 shadow rounded-lg py-8 px-3 md:p-16 my-16 relative -mt-32 gap-12'
            >
                {loading ? (
                    <div className="flex justify-center items-center w-full h-40">
                        <div className="w-12 h-12 border-4 border-[#540654] border-dashed rounded-full animate-spin"></div>
                    </div>
                ) : bookedTutor && bookedTutor.length > 0 ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-x-6 gap-y-14'>
                        {bookedTutor?.map(tutor => (
                            <div key={tutor._id} className="bg-base-100 p-5 rounded-lg shadow-lg flex items-start relative">
                                <div className="flex-shrink-0 absolute -top-10 left-2">
                                    <img
                                        src={tutor.image}
                                        alt={tutor.name}
                                        className="w-20 h-20 rounded-full border-8 border-blue-100 "
                                    />
                                </div>
                                <div className="ml-4 pt-6 flex flex-col h-full">
                                    <div className="flex items-center space-x-2">
                                        <h3 className="text-lg font-semibold ">{tutor.name}</h3>
                                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                                            {tutor?.status}
                                        </span>
                                    </div>
                                    <div className='flex-grow h-full'>
                                        <p className="text-sm text-red-600 font-semibold">Tutor ID: {tutor.tutorId}</p>
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
                                            <span className="font-medium ">Salary:</span> {tutor?.price}
                                        </p>
                                        <p className="text-sm flex-grow flex  items-center">
                                            <span className="font-medium ">Review:</span> <FaStar className='mx-1 text-yellow-400' />  {tutor?.review}
                                        </p>
                                    </div>
                                    <Link to={`/tutor/${tutor.tutorId}`} className='btn btn-sm mt-2 bg-gradient-to-r from-[#540654] via-[#cc0d85] to-[#540654] text-white '>Details</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='flex flex-col'>
                        <p className='font-semibold text-lg text-red-500'>You haven't booked any tutor yet!</p>
                    </div>
                )}
            </motion.div>
            <div className='w-11/12 mx-auto md:w-10/12 '>
                <Link
                    to={'/find-tutors'}
                    className="text-white my-6 px-6 py-3 w-[230px] rounded-none shadow-lg flex items-center gap-2"
                    style={{
                        background: 'linear-gradient(-30deg, #6c2a8c 50%, #a71678 50%)',
                    }}
                >
                    <FaSearch /> Find Tutor <FaArrowRight />
                </Link>
            </div>
        </div>
    );
};

export default MyBookedTutor;
