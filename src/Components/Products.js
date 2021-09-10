import React from 'react';
import watch5 from '../images/watch5.jpg';
import watch6 from '../images/watch6.jpg';
import watch7 from '../images/watch7.jpg';
import watch8 from '../images/watch8.jpg';
import productHeader from '../images/productHeader.jpg';

function Products() {
  return (
    <div className="flexBox">
        <h1>LATEST DESIGNS</h1>
        <img src={productHeader} className="imageStandard" alt="product" />
        <p style={{fontWeight:"bold"}}>SUBMARINER BLACK MASTER COLLECTION | MODEL NUMBER: 124901F</p>
        <div class="scrollRow" style={{marginTop:"20px"}}>
            <div>
                <img src={watch6} className="imageHalf"alt="watch5" />
                <p>Name: Diamond Pearl | Model Number: 1252b</p>
            </div>
            <div class="col-sm">
                <img src={watch5} className="imageHalf"alt="watch5" />
                <p>Name: Ocean Chromometer | Model Number: 63523e</p>
            </div>
            <div class="col-sm">
                <img src={watch7} className="imageHalf"alt="watch5" />
                <p>Name: Submariner Black | Model Number: 5319022b</p>
            </div>
            <div class="col-sm">
                <img src={watch8} className="imageHalf"alt="watch5" />
                <p>Name: Metallic Copper | Model Number: 464292k</p>
            </div>
        </div>
        <button class="btn btn-dark" style={{marginTop:"20px"}}>View All Products</button>
    </div>
  );
}

export default Products;
