import React, { useEffect, useState } from 'react';
import Chef from './Chef';

const Chefs = () => {
  const [chefs, setChefs] = useState([])

  useEffect(() => {
    fetch('https://b7a10-chef-recipe-hunter-server-side-sagor66-sagor66.vercel.app/chefs')
    .then(res => res.json())
    .then(data => setChefs(data))
  }, [])

  return (
    <div className='mb-32'>
      <h2 className='section-header'>Meet Our Chefs</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-x-10 gap-y-20 p-4'>
        {
          chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
        }
      </div>
    </div>
  );
};

export default Chefs;