import React from 'react';
import watch4 from '../images/watch4.jpg';
import person1 from '../images/person1.jpg';

function OurStory() {
  return (
    <div className="flexBox" style={{fontFamily:"Urbanist"}}>
        <h1>OUR WATCHES ARE CRAFTED WITH PERFECTION</h1>
        <p>Explore our wide collection of prestigious,
            high-precision timepieces. At Regal we offer a wide
            assortment of Oyster Perpetual and Cellini
            watches to suit any wrist. Discover the broad
            selection of Regal watches to find a perfect
            combination of style and functionality.</p>
        <img src={watch4} className="imageStandard" alt="watch4" />
        <p>Name: Fossil Exploration Watch | Model Number: 129481904a</p>
        <p style={{fontWeight:"bold", marginTop:"50px"}}>A NEW ANGLE ON AN AGE OLD CLASSIC</p>
        <p>Both elegant and versatile. Think leather watches,
            bestselling black and red designs, and
            jewellery-inspired styles – all elevated with dazzling
             crystals to stand the test of time.</p>
        <img src={person1} className="imageStandard" alt="watch4" />
        <p>Name: Leather Master | Model Number: 4021942b</p>
        <p style={{fontWeight:"bold", marginTop:"50px"}}>OUR PROMISES</p>
        <p>Our products are designed to last a lifetime! We offer up to 5
        years of warranty for all our watches upon purchase.</p>
    </div>
  );
}

export default OurStory;
