import React, { useEffect, useState } from 'react';
import Chef from './Chef';

const Chefs = () => {
  const [chefs, setChefs] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/chefs')
    .then(res => res.json())
    .then(data => setChefs(data))
  }, [])

  return (
    <div className='max-w-7xl mx-auto mb-32'>
      <h2 className='text-5xl font-bold text-center text-red-600 mb-10'>Meet Our Chefs</h2>
      <div className='grid grid-cols-3 justify-between items-center gap-x-10 gap-y-20'>
        {
          chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
        }
      </div>
    </div>
  );
};

export default Chefs;