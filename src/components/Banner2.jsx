import Lottie from 'lottie-react';
import React from 'react';
import online from '../assets/online.json'
import { FaArrowRight, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const Banner2 = () => {
    return (
        <div className='mb-16 bg-transparent'>
            <h1 className='text-4xl font-semibold text-center leading-10 mb-2'>SEARCH TUTORING JOBS</h1>
            <p className='text-[#66789c] leading-5 text-2xl text-center'>Find Your Tuition Jobs, in your Country</p>

            <div className='flex flex-col md:flex-row items-center justify-center mt-12  md:w-10/12 mx-auto'>
                <motion.div
                    animate={{ y: [50, -10, 50] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                    className='flex-1'>
                    <Lottie animationData={online}></Lottie>
                </motion.div>
                <div className='flex-1 place-items-center mt-24 md:mt-0'>
                    <h2 className='text-xl font-semibold text-center xl:w-[600px] mb-3'>Looking for interesting tuition jobs to excel your teaching experience?</h2>
                    <p className='xl:w-[600px] text-center text-gray-500'>If teaching jobs interests you, then you are on the right place. TutorLagbe?, we often have 500+ open home tuition jobs that are genuine and 100% verified. Whether you are starting your career as a tuition teacher or an expert in your field, we can help you find your next big tuition job. You can search and apply to the tuition jobs that best fit your skills, favorable location, class and subjects.</p>
                    <div className='place-items-center'>

                        <Link to={'find-tutors'}
                            className="text-white my-6 px-6 py-3 rounded-none shadow-lg flex items-center gap-2"
                            style={{
                                background: 'linear-gradient(-30deg, #6c2a8c 50%, #a71678 50%)',
                            }}
                        >
                            <FaSearch /> SEARCH TUITION <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;