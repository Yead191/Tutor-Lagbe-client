import React from 'react';
import Banner from '../components/Banner';
import Banner2 from '../components/Banner2';
import Stats from '../components/Stats';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Banner2></Banner2>
      <div>
        <Stats></Stats>
      </div>
    </div>
  );
};

export default Home;