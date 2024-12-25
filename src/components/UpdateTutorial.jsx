import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import useAuth from '../hooks/UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateTutorial = () => {
    useEffect(() => {
        document.title = 'Update | TutorLagbe?'
    }, [])

    const { user } = useAuth()
    const navigate = useNavigate()
    const data = useLoaderData()
    const {
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
        qualification,

    } = data

    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const language = form.language.value
        const experience = form.experience.value
        const days = form.days.value
        const country = form.country.value
        const description = form.description.value
        const gender = form.gender.value
        const price = form.price.value
        const qualification = form.qualification.value

        const updatedTutorial = {
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
            qualification,

        }
        axios.put(`https://tutor-lagbe-server.vercel.app/tutor/${_id}`, updatedTutorial)
            .then(res => {
                // console.log(res.data);
                if (res.data.matchedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your tutorial has been uploaded!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    e.target.reset()
                    navigate('/my-tutorials')

                }
            })
    }

    const isDisable = user?.email !== email

    return (
        <div>
            <div className="h-[250px] rounded-bl-[60px] rounded-br-[60px] w-11/12 mx-auto bg-[#540654] relative">
                <motion.h1
                    initial={{ x: '-100vh', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    className='text-3xl lg:text-4xl font-bold text-center text-white pt-12'>Update Tutorial</motion.h1>
            </div>
            <motion.div
                initial={{ y: '-100vh', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="w-10/12 md:w-10/12 mx-auto bg-[#F4F3F0] border border-[#540654] shadow rounded-lg  py-8 px-3 md:p-16 my-16 relative -mt-32">
                <button onClick={() => window.history.back()} className="text-blue-500 font-semibold mb-4">
                    &larr; Go Back
                </button>
                <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>
                        <label className="block text-sm font-medium mb-2">User Name</label>
                        <input
                            type="text"
                            value={name}
                            name='name'
                            readOnly
                            className="w-full border rounded-lg p-2 bg-gray-200"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">User Email</label>
                        <input
                            type="email"
                            name='email'
                            value={email}
                            readOnly
                            className="w-full border rounded-lg p-2 bg-gray-200"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium mb-2">Tutorial's Image URL</label>
                        <input
                            defaultValue={photo}
                            type="text"
                            name="photo"
                            placeholder='Enter Tutorial Image URL'
                            className="w-full border rounded-lg p-2"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Language</label>
                        <select
                            defaultValue={language}
                            name="language"
                            className="w-full border rounded-lg p-2"
                            required
                        >
                            <option disabled >
                                Select Language
                            </option>
                            <option>English</option>
                            <option>Japanese</option>
                            <option>Chinese</option>
                            <option>Spanish</option>
                            <option>Italian</option>
                            <option>German</option>
                            <option>French</option>
                            <option>Arabic</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Experience</label>
                        <input
                            defaultValue={experience}
                            type="number"
                            name="experience"
                            placeholder='Enter Your Tutoring Experience in Years'
                            className="w-full border rounded-lg p-2"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Days/Week</label>
                        <input
                            defaultValue={days}
                            type="number"
                            name="days"
                            placeholder='How many days per week You are available for tuition?'
                            className="w-full border rounded-lg p-2"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Country</label>
                        <input
                            defaultValue={country}
                            type="text"
                            name="country"
                            placeholder='Enter Your Country Name'
                            className="w-full border rounded-lg p-2"
                            required
                        />
                    </div>
                    <div className=''>
                        <label className="block text-sm font-medium mb-2">Description</label>
                        <textarea
                            defaultValue={description}
                            name="description"
                            placeholder="Enter Tutorial's Description"
                            className="w-full border rounded-lg p-2"
                            required
                        />
                    </div>
                    <div className=''>

                        <label className='block text-sm font-medium mb-2'>Gender</label>
                        <select defaultValue={gender} name='gender' required className="select select-bordered w-full ">
                            <option disabled >Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>

                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Salary</label>
                        <input
                            defaultValue={price}
                            type="number"
                            name="price"
                            placeholder='Enter Your Expected Salary'
                            className="w-full border rounded-lg p-2"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Qualification</label>
                        <input
                            defaultValue={qualification}
                            type="text"
                            name="qualification"
                            placeholder='Enter Your Qualification'
                            className="w-full border rounded-lg p-2"
                            required
                        />
                    </div>

                    <div className="col-span-1 md:col-span-2 flex mt-3">
                        <button disabled={isDisable}
                            type="submit"
                            className={`w-8/12 mx-auto  text-white font-medium py-2 px-4 rounded-lg transition hover:scale-105 ${isDisable ? 'cursor-not-allowed  bg-red-700' : ' text-white bg-gradient-to-r from-[#540654] via-[#cc0d85] to-[#540654]'}`}
                        >
                            Update Tutorial
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default UpdateTutorial;