
import { useLoaderData } from 'react-router-dom';
import bgImage from '../assets/bg-find.png';

import TutorCard from '../components/TuitorCard';

const FindTutors = () => {
    const tutorials = useLoaderData()
   

    return (

        <div style={{ backgroundImage: `url(${bgImage})` }} className="bg-gray-50 py-28 px-5">

            <div className=" lg:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-6 gap-y-14">
                {tutorials?.map((tutor) => (
                    <TutorCard tutor={tutor} key={tutor._id}></TutorCard>
                ))}
            </div>
        </div>

    );
};

export default FindTutors;