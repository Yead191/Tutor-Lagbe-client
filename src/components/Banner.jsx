import React from 'react';
import bannerBg from '../assets/banner-bg.png';
import Lottie from 'lottie-react';
import bannerLottie from '../assets/banner-lottie.json';
import { motion } from 'framer-motion';
import { FaArrowRight, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${bannerBg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'right',
                width: '100%',
                minHeight: '90vh',
            }}
        >
            <div className="flex flex-col lg:flex-row items-center justify-center lg:w-10/12 xl:w-8/12 mx-auto p-4 md:p-0">
                {/* Left Section */}
                <div className="flex-1 pt-12">
                    <motion.div

                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-[#800080] text-3xl lg:text-4xl xl:text-5xl font-bold">
                            Best <span className="text-[#3c65f5]">Tutoring Platform</span> <br />
                            for Home & Online Tuitions
                        </h1>
                        <div className="flex items-center text-xl font-thin text-gray-600 mt-4 mb-8 gap-2">
                            <FaMapMarkerAlt />
                            <p className='w-[260px] md:w-full'> Find the Right Tutor For Your Faster Language Learn</p>
                        </div>
                    </motion.div>
                    <Link to={'/find-tutors'} className="btn text-white flex items-center gap-2 btn-wide btn-lg rounded-full "
                        style={{
                            background: 'linear-gradient(90deg, #ad32a2, #58034a)',
                            color: 'white',
                        }}>
                        <FaSearch /> FIND A TUTOR <FaArrowRight />
                    </Link>
                </div>

                {/* Right Section */}
                <motion.div
                    animate={{ y: [80, 100, 80] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                    className="flex-1"
                >
                    <Lottie
                        className="h-[400px] lg:h-[550px]"
                        animationData={bannerLottie}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;
