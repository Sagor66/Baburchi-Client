import React from 'react';

const Blog = () => {
  return (
    <div className='max-w-7xl mt-32 mx-auto'>
      <h2 className='text-2xl'>1. Tell us the differences between uncontrolled and controlled components.</h2>
      <p>When a component is controlled by using react state then that component is called controlled component. Whereas when a component is handled by DOM itself, rather then react then that component is called uncontrolled component</p>
      <h2 className='text-2xl'>2. How to validate React props using PropTypes</h2>
      <p>To validate React props using PropTypes we first have to import thr PropTypes, then define the PropTypes object on the component and assign validators</p>
      <h2 className='text-2xl'>3. Tell us the difference between nodejs and express js.</h2>
      <p>Node.js is a javascript runtime built on V8 js engine and Express js is a web application framework which is built on top of Node.js</p>
      <h2 className='text-2xl'>4. What is a custom hook, and why will you create a custom hook?</h2>
      <p>A custom hook is a function that allows us to reuse statefull logic accross multiple components. We use custom hook to make the hook more powerful and increase it's reusability</p>
    </div>
  );
};

export default Blog;