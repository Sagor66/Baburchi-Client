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
    <div className='mb-32'>
      <h2 className='section-header'>Meet Our Chefs</h2>
      <div className='grid grid-cols-3 justify-between items-center gap-x-10 gap-y-20'>
        {
          chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
        }
      </div>
    </div>
  );
};

export default Chefs;