import React, { useState } from 'react';
import { motion } from "motion/react"
import { Link, useLocation, useNavigate, } from 'react-router-dom';
// import { AuthContext } from '../provider/AuthProvider';
// import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import Lottie from 'lottie-react';
import regAnimation from '../assets/register.json'
import useAuth from '../hooks/UseAuth';
import SocialLogin from '../components/SocialLogin';


const Register = () => {
    const { createUser, updateUser, setUser, setLoading } = useAuth()
    const [showPass, setShowPass] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const navigate = useNavigate()
    const location = useLocation()


    // const from = location.state || '/'
    // console.log(location);


    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        const newUser = {
            name,
            photo,
            email,
            password,
        }
        setErrorMsg('')

        // console.log(newUser);
        if (password.length < 6) {
            setErrorMsg('Password should be 6 character or more')
            return
        }
        const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/

        if (!regPassword.test(password)) {
            setErrorMsg('Password should contain 1 uppercase, 1 lowercase and a special character')
            return

        }
        createUser(email, password)
            .then(res => {
                console.log(res.user);
                setUser(res.user)
                // const createdAt = result?.user?.metadata?.creationTime
                updateUser({
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {
                        navigate(location?.state ? location.state : '/')
                        toast.success(`Successfully Registered as: ${res.user.displayName}`)
                        setLoading(false)

                    })


            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            });

    }




    return (
        <motion.div
            initial={{ y: '-100vh', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="flex items-center justify-center min-h-screen bg-base-100">
            <div className="flex flex-col lg:flex-row shadow-lg rounded-lg bg-white max-w-4xl w-full">
                {/* Left Section */}
                <div className="bg-gradient-to-r from-[#540654] via-[#cc0d85] to-[#540654] text-white p-8 lg:w-1/2 flex flex-col justify-center items-center rounded-l-lg md:rounded-tr-[100px] md:rounded-br-[100px]">
                    <Lottie className='h-48' animationData={regAnimation}></Lottie>
                    <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
                    <p className="mb-6 text-center">
                        Enter your personal details to use all of the site's features.
                    </p>
                    <Link to='/login' className="bg-white text-purple-700 hover:bg-gray-200 px-6 py-2 rounded-xl font-medium transition">
                        SIGN IN
                    </Link>
                </div>

                {/* Right Section */}
                <div className="p-8 lg:w-1/2 flex flex-col justify-center items-center">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Create Account</h2>
                    <SocialLogin></SocialLogin>
                    <form onSubmit={handleRegister} className='w-full'>
                        <input
                            name='name'
                            type="text"
                            placeholder="Name"
                            className="block w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                            required />
                        <input
                            name='photo'
                            type="text"
                            placeholder="Photo URL"
                            className="block w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                            required />
                        <input
                            name='email'
                            type="email"
                            placeholder="Email"
                            className="block w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                            required />
                        <div className="relative w-full mb-4">
                            <input
                                type={showPass ? 'text' : 'password'}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                                placeholder="Password"
                                name="password"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPass(!showPass)}
                                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                            >
                                {showPass ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        {
                            errorMsg && <p className='text-red-600 text-center mb-1'>{errorMsg}</p>
                        }
                        <div className='flex justify-center items-center'>

                            <button className="bg-gradient-to-r from-[#540654] via-[#cc0d85] to-[#540654] text-white hover:bg-purple-700 px-6 py-2 rounded-lg font-medium transition hover:scale-110">
                                SIGN UP
                            </button>
                        </div>
                    </form>


                </div>
            </div>
        </motion.div>
    );
};

export default Register;