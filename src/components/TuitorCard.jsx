
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../hooks/UseAuth';
import { FaStar } from 'react-icons/fa';


const TutorCard = ({ tutor }) => {
    const { user } = useAuth()
    const [isBooked, setIsBooked] = useState(false)
    // console.log(isBooked);
    useEffect(() => {
        axios.get('http://localhost:5000/bookedTutors')
            .then(res => {
                // console.log(res.data)
                const data = res.data
                for (const book of data) {
                    // console.log(book.email);
                    if (book.email === user?.email && tutor._id === book.tutorId) {
                        setIsBooked(true)
                    }

                }

            })

    }, [user])

    return (
        <div className="bg-base-100 p-5 rounded-lg shadow-lg flex items-start relative transition transform lg:hover:-translate-y-2 lg:duration-500 lg:ease-in-out ">
            {/* Profile Picture */}
            <div className="flex-shrink-0 absolute -top-10 left-2">
                <img
                    src={tutor.photo}
                    alt={tutor.name}
                    className="w-16 h-16 rounded-full border-4 border-transparent shadow-md"
                />
            </div>

            {/* Tutor Details */}
            <div className="ml-4 pt-3">
                {/* Name and Badge */}
                <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-semibold ">{tutor.name}</h3>
                    <div className="flex items-center text-yellow-500 text-sm">
                        <FaStar className="mr-1" />
                        <p>{tutor.review && tutor.review}</p>
                    </div>
                    {
                        isBooked && <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                            Booked
                        </span>
                    }
                </div>
                {/* Tutor ID */}
                <p className="text-sm text-red-600 font-semibold">Tutor ID: {tutor._id}</p>

                {/* Additional Info */}
                <p className="text-sm ">
                    <span className="font-medium">Language:</span> <span className='text-lg font-semibold'> {tutor.language}</span>
                </p>
                <p className="text-sm ">
                    <span className="font-medium">Gender:</span> {tutor.gender}
                </p>
                <p className="text-sm ">
                    <span className="font-medium">Tuition Experience:</span> {tutor.experience} Years
                </p>
                <p className="text-sm ">
                    <span className="font-medium">Living Location:</span> {tutor.country}
                </p>
                <Link to={`/tutor/${tutor._id}`} className='btn btn-sm mt-2 bg-gradient-to-r from-[#540654] via-[#cc0d85] to-[#540654] text-white'>Details</Link>
            </div>


        </div>
    );
};

export default TutorCard;