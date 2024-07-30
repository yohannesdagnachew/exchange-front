'use client';
import React, {useEffect} from 'react';



const Home = async () => {
 
useEffect(() => { 
  window.location.href = "/exchange";
}, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  
  );
}

export default Home;
