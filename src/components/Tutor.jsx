import React, { useEffect, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import TutorCard from '../components/TuitorCard';
import useAuth from '../hooks/UseAuth';
import axios from 'axios';
import Loading from './Loading';
const Tutor = () => {
    const data = useLoaderData()
    const { search, setSearch, } = useAuth()

    const [tutorials, setTutorials] = useState(data)
    const [currentPage, setCurrentPage] = useState(0)
    const [loading, setLoading] = useState(false);
    const [tutorCounter, setTutorCount] = useState({})


    useEffect(() => {
        axios.get('https://tutor-lagbe-server.vercel.app/tutors-count')
            .then(res => setTutorCount(res.data))
    }, [])
    const { tutorCount } = tutorCounter

    // console.log(tutorCounter);


    const itemsPerPage = 9;

    const handleNextBtn = () => {
        if (currentPage < pages?.length - 1) {
            setCurrentPage(currentPage + 1)

        }
    }
    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)

        }
    }

    const numberOfPages = Math.ceil(tutorCount / itemsPerPage)
    // const numberOfPages = Math.ceil((tutorCount || 0) / itemsPerPage);

    const pages = numberOfPages > 0 ? [...Array(numberOfPages).keys()] : [];
    // const pages = [...Array(numberOfPages).keys()]


    // console.log(pages);
    useEffect(() => {
        setLoading(true)
        axios.get(`https://tutor-lagbe-server.vercel.app/tutorials?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => {
                setTutorials(res.data)
                setLoading(false)
            })
    }, [currentPage, itemsPerPage])





    useEffect(() => {
        setSearch(data)


    }, [])

    useEffect(() => {
        setTutorials(search)
    }, [search])

    return (
        <div>
            {loading ? (
                <Loading></Loading>
            ) : tutorials?.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-x-6 gap-y-14">
                    {tutorials?.map((tutor) => (
                        <TutorCard tutor={tutor} key={tutor._id}></TutorCard>
                    ))}
                </div>
            ) : (
                <p className="text-xl text-red-500">
                    No Data Found. Reset input and Click Search to load all data again.
                </p>
            )}

            <div className="join my-8 flex justify-center items-center">
                <button onClick={handlePrevious} className="join-item btn btn-md">Prev</button>
                {loading ? (
                    <Loading></Loading>
                ) : (
                    pages?.map((page, index) => (
                        <button
                            onClick={() => setCurrentPage(page)}
                            key={index}
                            className={`join-item btn btn-md ${currentPage === page ? 'btn-active' : undefined
                                }`}
                        >
                            {page + 1}
                        </button>
                    ))
                )}

                <button onClick={handleNextBtn} className="join-item btn btn-md">Next</button>


            </div>

        </div>
    );
};

export default Tutor;