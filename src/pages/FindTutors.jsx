
import { NavLink, Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import bgImage from '../assets/bg-find.png';
import { useEffect, useState } from 'react';
import useAuth from '../hooks/UseAuth';
import { motion } from 'framer-motion';




const FindTutors = () => {
    const data = useLoaderData()
    // const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate()


    const { setSearch, searchTerm, setSearchTerm, } = useAuth()




    const handleSearch = () => {
        fetch(`http://localhost:5000/tutorials?searchParams=${searchTerm}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSearch(data)
                navigate('/find-tutors')

            })

    }

    return (

        <div style={{ backgroundImage: `url(${bgImage})` }} className="">
            <div className="h-[190px]  bg-[#540654] relative">
                <h1
                    className='text-3xl lg:text-4xl font-bold text-center text-white pt-8'>Find Tutors</h1>
                <div className="join flex justify-center mt-8 mb-16">
                    <div>
                        <input
                            className="input input-bordered join-item min-w-96"
                            placeholder="Search By Language"
                            defaultValue={searchTerm}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="indicator">
                        <button onClick={handleSearch} className="btn join-item">
                            Search
                        </button>
                    </div>
                </div>
            </div>


            <div className='grid lg:grid-cols-12 gap-8 xl:w-11/12 mx-auto py-12'>
                <motion.aside
                    initial={{ x: '-50vh', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    className='lg:col-span-3 xl:col-span-2 flex flex-col gap-3 md:sticky md:top-20 md:h-[calc(100vh-32px)] overflow-auto '>
                    {
                        data?.map(category => <NavLink to={`/find-tutors/category/${category.language}`}
                            key={category.id}
                            className="flex  items-center justify-between border p-3 rounded-lg shadow-md hover:shadow-lg transition transform lg:hover:-translate-y-2 bg-base-100 lg:duration-500 lg:ease-in-out cursor-pointer"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="text-2xl">{category.icon}</div>
                                <div>
                                    <h2 className="text-lg  font-semibold">{category.language} Tutors</h2>
                                </div>
                            </div>
                            <div className="text-xl text-gray-400">&gt;</div>
                        </NavLink>)
                    }

                </motion.aside>

                <div className=' lg:col-span-9 xl:col-span-10'>
                    <Outlet></Outlet>

                </div>

            </div>


        </div>

    );
};

export default FindTutors;