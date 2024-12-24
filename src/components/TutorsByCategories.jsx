import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TutorCard from './TuitorCard';

const TutorsByCategories = () => {
    const tutorials = useLoaderData()
    // console.log(tutorials);
    return (
        <div>
            {
                tutorials.length > 0 ?

                    <div className="  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full  gap-x-6 gap-y-14">
                        {tutorials?.map((tutor) => (
                            <TutorCard tutor={tutor} key={tutor._id}></TutorCard>
                        ))}
                    </div>

                    :
                    <p className='text-2xl text-red-500'>No Data Found in this Category</p>
            }


        </div>
    );
};

export default TutorsByCategories;