import React from "react";
import homeTutoringImg from "../assets/HomeTutor.png";
import onlineTutoringImg from "../assets/OnlineTutor.png";
import groupTutoringImg from "../assets/GroupTutor.png";
import { motion } from 'framer-motion'

const TuitionTypes = () => {
    return (
        <section className="bg-base-200  py-12 px-4 md:px-0">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl leading-10 font-semibold text-gray-800">Tuition Types</h2>
                <p className="text-gray-600 text-2xl leading-8 my-3">Find the Best Tuition Type which suits you most</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 ">
                    {/* Home Tutoring Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.1,
                            ease: "easeIn",
                        }}
                        className="bg-base-100 shadow-2xl hover:border hover:border-[#800080] rounded-lg p-6 text-center transition transform hover:-translate-y-2 duration-500 ease-linear">
                        <img
                            src={homeTutoringImg}
                            alt="Home Tutoring"
                            className="w-full h-[300px] mx-auto"
                        />
                        <h3 className="text-2xl font-semibold  mt-4">Home Tutoring</h3>
                        <p className="text-gray-400 text-xs my-2">Looking for one-to-one classes?</p>
                        <p className="text-[#6c757d] text-[14px] mt-2 font-medium">
                            It’s a unique opportunity to learn in the home with your expected future in different categories everything is in favor of your need.</p>
                    </motion.div>

                    {/* Online Tutoring Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.1,
                            ease: "easeIn",
                        }}
                        className="bg-base-100 shadow-2xl hover:border hover:border-[#800080] rounded-lg p-6 text-center transition transform hover:-translate-y-2 duration-500 ease-linear">
                        <img
                            src={onlineTutoringImg}
                            alt="Online Tutoring"
                            className="w-full h-[300px] mx-auto"
                        />
                        <h3 className="text-2xl font-semibold  mt-4">Online Tutoring</h3>
                        <p className="text-gray-400 text-xs my-2">Are you left with any doubts?</p>

                        <p className="text-[#6c757d] text-[14px] mt-2 font-medium">
                            Connect with the best tutors from anywhere and take online classes by using different tools Make your life more easier with this process.</p>
                    </motion.div>

                    {/* Group Tutoring Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,

                        }}
                        className="bg-base-100 shadow-2xl hover:border hover:border-[#800080] rounded-lg p-6 text-center transition transform hover:-translate-y-2 duration-500 ease-linear">
                        <img
                            src={groupTutoringImg}
                            alt="Group Tutoring"
                            className="w-full h-[300px] mx-auto"
                        />
                        <h3 className="text-2xl font-semibold  mt-4">Group Tutoring</h3>
                        <p className="text-gray-400 text-xs my-2">Need the Competitive & Affordable experience?</p>
                        <p className="text-[#6c757d] text-[14px] mt-2 font-medium">
                            A group of students can full fill their hunger for learning within more affordable tuition fees. Get the opportunity of learning with knowledge sharing!
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TuitionTypes;
