import React from 'react';
import Banner from './Banner';
import Chefs from './Chefs';
import PopularDishes from './PopularDishes';
import Partners from './Partners';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className='max-w-7xl mx-auto '>
        <Chefs></Chefs>
        <PopularDishes></PopularDishes>
      </div>
      <Partners></Partners>
    </div>
  );
};

export default Home;