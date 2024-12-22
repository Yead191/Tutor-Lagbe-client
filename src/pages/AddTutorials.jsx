import React from 'react';
import { motion } from 'framer-motion';
import useAuth from '../hooks/UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddTutorials = () => {
    const { user } = useAuth()



    const handleAddTutorial = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const tutorialData = Object.fromEntries(form.entries());
        console.log(tutorialData);
        axios.post('http://localhost:5000/tutorials', tutorialData)
            .then((res) => {
                console.log("Response from server:", res)
                if (res.status === 200) {

                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your tutorial has been uploaded!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    e.target.reset()
                }
            })
            .catch((err) => console.error("Error:", err));
    }
    return (
        <div>
            <div className="h-[250px] rounded-bl-[60px] rounded-br-[60px] w-11/12 mx-auto bg-[#540654] relative">
                <h1 className='text-3xl lg:text-4xl font-bold text-center text-white pt-12'>Add New Tutorial</h1>
            </div>
            <motion.div
                initial={{ y: '-100vh', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="w-10/12 md:w-10/12 mx-auto bg-[#F4F3F0] shadow rounded-lg  py-8 px-3 md:p-16 my-16 relative -mt-32">
                <button onClick={() => window.history.back()} className="text-blue-500 font-semibold mb-4">
                    &larr; Go Back
                </button>
                <form onSubmit={handleAddTutorial} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>
                        <label className="block text-sm font-medium mb-2">User Name</label>
                        <input
                            type="text"
                            value={user?.displayName}
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
                            value={user?.email}
                            readOnly
                            className="w-full border rounded-lg p-2 bg-gray-200"
                        />
                    </div>

                    
                    <div>
                        <label className="block text-sm font-medium mb-2">Tutorial's Image URL</label>
                        <input
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
                            defaultValue={'Select Language'}
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
                        <label className="block text-sm font-medium mb-2">Description</label>
                        <textarea
                            name="description"
                            placeholder="Enter Tutorial's Description"
                            className="w-full border rounded-lg p-2"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Salary</label>
                        <input
                            type="number"
                            name="price"
                            placeholder='Enter Your Expected Salary'
                            className="w-full border rounded-lg p-2"
                            required
                        />
                    </div>



                    <div className="col-span-1 md:col-span-2 flex mt-3">
                        <button
                            type="submit"
                            className="w-8/12 mx-auto  bg-gradient-to-r from-[#540654] via-[#cc0d85] to-[#540654] text-white font-medium py-2 px-4 rounded-lg transition hover:scale-105"
                        >
                            Add Item
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default AddTutorials;