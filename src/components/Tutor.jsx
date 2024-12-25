import React, { useEffect, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import TutorCard from '../components/TuitorCard';
import useAuth from '../hooks/UseAuth';
import axios from 'axios';
const Tutor = () => {
    const data = useLoaderData()
    const { search, setSearch, tutorCounter } = useAuth()

    const [tutorials, setTutorials] = useState(data)
    const [currentPage, setCurrentPage] = useState(0)

    const { tutorCount } = tutorCounter
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

    const pages = [...Array(numberOfPages).keys()]
    // console.log(pages);
    useEffect(() => {
        axios.get(`http://localhost:5000/tutorials?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => setTutorials(res.data))
    }, [currentPage, itemsPerPage])





    useEffect(() => {
        setSearch(data)


    }, [])

    useEffect(() => {
        setTutorials(search)
    }, [search])

    return (
        <div>
            {
                tutorials?.length > 0 ?

                    <div className="  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full  gap-x-6 gap-y-14">
                        {tutorials?.map((tutor) => (
                            <TutorCard tutor={tutor} key={tutor._id}></TutorCard>
                        ))}
                    </div>
                    :
                    <p className='text-xl text-red-500'>No Data Found. Reset input and Click Search to load all data again.</p>
            }

            <div className="join my-8 flex justify-center items-center">
                <button onClick={handlePrevious} className="join-item btn btn-md">Prev</button>
                {

                    pages?.map((page, index) => (
                        <button onClick={() => setCurrentPage(page)} key={index} className={`join-item btn btn-md ${currentPage === page ? 'btn-active' : undefined}`}>{page + 1}</button>
                    ))
                }

                <button onClick={handleNextBtn} className="join-item btn btn-md">Next</button>


            </div>

        </div>
    );
};

export default Tutor;