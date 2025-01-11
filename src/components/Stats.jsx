import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import useAuth from '../hooks/UseAuth';

const Stats = () => {
    const [refCourses, coursesInView] = useInView({ triggerOnce: true });
    const [refCountries, countriesInView] = useInView({ triggerOnce: true });
    const [refUniversities, universitiesInView] = useInView({ triggerOnce: true });

    const { tutorCounter, setTutorCount, userCounter, setUserCounter} = useAuth()
    // const [tutorCounter, setTutorCount] = useState({})
    const [review, setReview] = useState({})


    useEffect(() => {
        axios.get('https://tutor-lagbe-server.vercel.app/review-count')
            .then(res => setReview(res.data))
    }, [])
    useEffect(() => {
        axios.get('https://tutor-lagbe-server.vercel.app/tutors-count')
            .then(res => setTutorCount(res.data))
    }, [])
    useEffect(() => {

        axios.get('https://tutor-lagbe-server.vercel.app/users-count')
            .then(res => {
                setUserCounter(res.data)

            })
    }, [])


    const { tutorCount } = tutorCounter
    const { reviewCount } = review
    const { userCount } = userCounter
    // console.log(tutorCount);

    return (
        <section className="py-12 bg-base-200 mb-12">
            <div className="md:max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center md:space-x-12">
                {/* Stat 1 */}
                <div className="text-center">
                    <div ref={refCourses}>
                        <h2 className="text-4xl font-bold ">
                            {coursesInView ? <CountUp start={0} end={tutorCount && tutorCount} duration={3} separator="," /> : 0}+
                        </h2>
                    </div>
                    <p className="text-[#AE2323] text-lg mt-2">Tutors</p>
                </div>

                <div className="h-12 w-px bg-[#AE2323] hidden md:block"></div>

                {/* Stat 2 */}
                <div className="text-center">
                    <div ref={refCountries}>
                        <h2 className="text-4xl font-bold ">
                            {countriesInView ? <CountUp start={0} end={reviewCount} duration={3} /> : 0}+
                        </h2>
                    </div>
                    <p className="text-[#AE2323] text-lg mt-2">Reviews</p>
                </div>

                <div className="h-12 w-px bg-[#AE2323] hidden md:block"></div>

                {/* Stat 3 */}
                <div className="text-center">
                    <div ref={refUniversities}>
                        <h2 className="text-4xl font-bold ">
                            {universitiesInView ? <CountUp start={0} end={8} duration={3} /> : 0}+
                        </h2>
                    </div>
                    <p className="text-[#AE2323] text-lg mt-2">Languages</p>
                </div>
                <div className="h-12 w-px bg-[#AE2323] hidden md:block"></div>

                {/* Stat 3 */}
                <div className="text-center">
                    <div ref={refUniversities}>
                        <h2 className="text-4xl font-bold ">
                            {universitiesInView ? <CountUp start={0} end={userCount} duration={3} /> : 0}+
                        </h2>
                    </div>
                    <p className="text-[#AE2323] text-lg mt-2">Total Users</p>
                </div>
            </div>
        </section>
    );
};

export default Stats;
