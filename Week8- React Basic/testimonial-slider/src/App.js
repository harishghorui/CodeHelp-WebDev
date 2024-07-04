import React from 'react'
import Testimonials from './components/Testimonials.js'
import reviews from './data.js';

function App() {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>

      <div>
        <h1>Our Testimonials</h1>
      </div>

      <div></div>

      <Testimonials reviews={reviews}/>

    </div>
  );
}

export default App;
