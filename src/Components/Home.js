import React from 'react';
import watch1 from '../images/watch1.jpg';
import watch2 from '../images/watch2.jpg';
import watch3 from '../images/watch3.jpg';

function Home() {
  return (
    <div className="parallax" style={{margin:"auto", color:"white"}}>
        <h1 className="center">UNLOCK TIME</h1>
        <h4 className="center">Watches crafted from exquisite elements of nature</h4>
        <div className="triple">
            <img src={watch1} className="watchImage" alt="watch1" />
            <img src={watch2} className="watchImage" alt="watch2" />
            <img src={watch3} className="watchImage" alt="watch3" />
        </div>
        <div className="bottom">
            <h3>SUBMARINER</h3>
            <h5>Master waterproofness and become the hero of the ocean</h5>
        </div>
    </div>
  );
}

export default Home;
