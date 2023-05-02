import React from 'react';
import Banner from './Banner';
import Chefs from './Chefs';
import PopularDishes from './PopularDishes';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className='max-w-7xl mx-auto '>
        <Chefs></Chefs>
        <PopularDishes></PopularDishes>
      </div>
    </div>
  );
};

export default Home;