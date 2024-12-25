import React, { useEffect, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import TutorCard from '../components/TuitorCard';
import useAuth from '../hooks/UseAuth';
const Tutor = () => {
    const data = useLoaderData()
    const { search, setSearch } = useAuth()
    const [tutorials, setTutorials] = useState(data)
    
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
        </div>
    );
};

export default Tutor;