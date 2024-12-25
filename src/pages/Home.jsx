import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Banner2 from '../components/Banner2';
import Stats from '../components/Stats';
import { Link, useLoaderData } from 'react-router-dom';
import TuitionTypes from '../components/TuitionTypes';

const Home = () => {
  useEffect(() => {
    document.title = 'Home | TutorLagbe?'
  }, [])
  
  const data = useLoaderData()
  const [categories, setCategories] = useState(data)
  // console.log(categories);
  return (
    <div>
      <Banner></Banner>
      <Banner2></Banner2>
      <div>
        <Stats></Stats>
      </div>
      <div className='p-4 md:p-0'>
        <h1 className='text-4xl font-semibold text-center leading-10 mb-2'>Find You Language Specialist</h1>
        <p className='text-[#66789c] leading-5 text-2xl text-center'>Find Our Specialist to reach your dream goal</p>
        <div className='my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:w-10/12 mx-auto'>
          {
            categories?.map(category => <Link to={`/find-tutors/category/${category.language}`}
              key={category.id}
              className="flex items-center justify-between border p-5 lg:p-7 rounded-lg shadow-md hover:shadow-lg transition transform lg:hover:-translate-y-2 lg:duration-500 lg:ease-in-out cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className="text-5xl">{category.icon}</div>
                <div>
                  <h2 className="text-xl lg:text-2xl font-semibold">{category.language} Tutors</h2>
                </div>
              </div>
              <div className="text-xl text-gray-400">&gt;</div>
            </Link>)
          }
        </div>
      </div>

      <TuitionTypes></TuitionTypes>
    </div>
  );
};

export default Home;