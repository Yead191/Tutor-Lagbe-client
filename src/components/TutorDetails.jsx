import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import useAuth from '../hooks/UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { RxCross1 } from 'react-icons/rx';


const TutorDetails = () => {
    const location = useLocation()
    useEffect(() => {
        document.title = 'Details | TutorLagbe?'
    }, [])
    const { user } = useAuth()
    const tutor = useLoaderData()
    const [isBooked, setIsBooked] = useState(false)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    // const [isDisabled, setDisable] = useState(false)



    // console.log(isBooked);

    useEffect(() => {
        setLoading(true)
        // axios.get(`http://localhost:5000/booked-tutors?userEmail=${user.email}&tutorId=${_id}`)
        axios.get(`https://tutor-lagbe-server.vercel.app/bookedTutors?userEmail=${user?.email}&tutorId=${_id}`)
            .then(res => {
                // console.log(res.data)
                const data = res.data
                for (const book of data) {
                    // console.log(book.email);
                    if (book.email === user.email && _id === book.tutorId) {
                        setIsBooked(true);
                        break;
                    }

                }
                setLoading(false)


            })
            .catch(() => {
                setLoading(false);
            });

    }, [user])


    const
        {
            _id,
            name,
            email,
            photo,
            language,
            experience,
            days,
            country,
            description,
            gender,
            price,
            languageProficiency,
            review,
            status,
            qualification,
            createdAt,
        } = tutor
    // console.log(tutor.review);
    const isDisabled = email === user?.email
    // if (user && email === user?.email) {
    //     setDisable(true)
    // }

    const handleBookTutor = (id) => {
        // console.log(id);
        if (user && user.email) {
            const bookedTutor = {
                tutorId: _id,
                image: photo,
                language,
                tutorEmail: email,
                email: user?.email,
                price,
            }
            // console.log(bookedTutor);
            axios.post('https://tutor-lagbe-server.vercel.app/bookedTutors', bookedTutor)
                .then(res => {
                    // console.log(res)
                    if (res.status === 200) {

                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Your have successfully booked this Tutor!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/my-booked-tutor')
                    }
                })
        }
        else {
            navigate('/login', { state: location.pathname })
        }
    }

    const handleReview = (id) => {
        if (user && user.email) {
            const reviewData = {
                tutorId: id, reviewedBy: user.email, reviewedAt: new Date()
            }
            axios.post('https://tutor-lagbe-server.vercel.app/reviews', reviewData)
                .then(res => {
                    // console.log(res.status)
                    if (res.status === 200) {

                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Thanks For the Review!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate(`/tutor/${id}`)
                    }


                })
                .catch((error) => {
                    console.error("Error posting review:", error);
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Unable to submit the review. You can review a tutor only Once.",
                        showConfirmButton: true,
                    });
                });
        }
        else {
            navigate('/login', { state: location.pathname })

        }

    }
    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        </div>

    }



    return (
        <div className=''>
            <div className="h-[250px] md:rounded-bl-[60px] md:rounded-br-[60px] md:w-11/12 mx-auto bg-[#540654] relative">
                <h1
                    className='text-3xl lg:text-4xl font-bold text-center text-white pt-12'>Tutor Details</h1>
            </div>
            <motion.div
                initial={{ y: '-100vh', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className='w-11/12 md:w-10/12 mx-auto flex flex-col md:flex-row  bg-base-100 shadow rounded-lg  py-8 px-3 md:p-16 my-16 relative -mt-32 gap-12'>
                <button
                    className="p-2 bg-red-500 rounded-2xl text-white absolute -top-3 -left-3 z-10 transition hover:scale-110"
                    onClick={() => window.history.back()}
                >
                    <RxCross1 className="text-sm" />
                </button>
                <div className='md:w-1/4  rounded-xl bg-base-200 shadow-md'>
                    <div className='p-3'>
                        <h1 className='text-center underline font-thin text-2xl my-6'>Profile</h1>
                        <div className="flex flex-col items-center">
                            {/* Profile Image */}
                            <img
                                src={photo && photo}
                                alt={name}
                                className="rounded-full w-44 h-44 object-cover border-2 border-gray-300"
                            />
                            {/* Name and Rating */}
                            <h2 className="text-lg font-bold mt-2">{name}</h2>
                            <div className="flex items-center text-yellow-500 text-sm">
                                <FaStar className="mr-1" />
                                <p>{review && review}</p>
                            </div>
                            {/* Total Views */}
                            {/* <p className="text-gray-500 text-sm">Total views: -</p> */}
                        </div>
                        {/* Details Section */}
                        <div className="mt-4 space-y-2">
                            <p>Country: <strong>{country}</strong> </p>
                            <p>ID#: <strong>{_id}</strong> </p>
                            <p>Gender: <strong>{gender}</strong> </p>
                            <p>Qualification: <strong> {qualification}</strong></p>

                        </div>
                    </div>
                    {/* Member Since Section */}
                    <div className="mt-4">
                        <p className="bg-green-500 text-white text-center py-2 rounded-b-lg">
                            Member Since: {new Date(createdAt).toLocaleDateString()}
                        </p>
                    </div>
                </div>
                <div className='md:w-3/4  '>
                    <h1 className='text-center underline font-thin text-2xl my-6'>Tuition Info</h1>
                    {loading ? (
                        <div className="flex justify-center items-center w-full h-40">
                            <div className="w-12 h-12 border-4 border-[#540654] border-dashed rounded-full animate-spin"></div>
                        </div>
                    ) : (
                        <table className="table">
                            <tbody>
                                <tr className='border-t'>
                                    <td className='w-1/3 font-bold text-md'>Expected Minimum Salary</td>
                                    <td className='w-2/3 font-semibold text-xl'>{price} <span className='text-xs'>tk/mo</span></td>
                                </tr>
                                <tr>
                                    <td className='w-1/3 font-bold text-md'>Current Status for Tuition</td>
                                    <td className='w-2/3 text-green-500 font-bold'>{status}</td>
                                </tr>
                                <tr>
                                    <td className='w-1/3 font-bold text-md'>Teaches</td>
                                    <td className='w-2/3 text-[#540654] text-lg font-bold'>{language} Lessons</td>
                                </tr>
                                <tr>
                                    <td className='w-1/3 font-bold text-md'>Days Per Week</td>
                                    <td className='w-2/3 font-semibold'>{days} Day/Week</td>
                                </tr>
                                <tr>
                                    <td className='w-1/3 font-bold text-md'>Tutoring Experience</td>
                                    <td className='w-2/3 font-bold'>{experience} Years</td>
                                </tr>
                                <tr>
                                    <td className='w-1/3 font-bold text-md'>I Speak</td>
                                    <td className='w-2/3 flex flex-col md:flex-row gap-2'>
                                        {languageProficiency && languageProficiency?.map((lang, index) => (
                                            <p key={index} className="badge badge-accent">
                                                {lang}
                                            </p>
                                        ))}
                                    </td>
                                </tr>
                                <tr>
                                    <td className='w-1/3 font-bold text-md'>Description</td>
                                    <td className='w-2/3 '>{description}</td>
                                </tr>
                                <tr>
                                    <td className='w-1/3 font-bold text-md'>Tutor Email</td>
                                    <td className='w-2/3 '>{email}</td>
                                </tr>
                            </tbody>
                        </table>
                    )}
                    {
                        isBooked ?
                            <button onClick={() => handleReview(_id)} className={`btn  mt-5 w-full ${isDisabled ? 'bg-base-200' : 'bg-[#00d4ff] '}  `} >Review This Tutor</button>
                            :
                            <button onClick={() => handleBookTutor(_id)} disabled={isDisabled} className={`btn  mt-5 w-full ${isDisabled ? 'bg-base-200  cursor-auto' : 'bg-gradient-to-r  from-[#540654] via-[#cc0d85] to-[#00d4ff]'}  text-white`} >Book This Tutor</button>
                    }


                </div>
            </motion.div>
        </div>
    );
};

export default TutorDetails;