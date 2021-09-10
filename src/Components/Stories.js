import watch7 from '../images/watch7.jpg';
import watch8 from '../images/watch8.jpg';
import male1 from '../images/male1.jpg';
import male2 from '../images/male2.jpg';

import React from 'react';

function Stories() {
  return (
    <div className="flexBox">
        <h1>LATEST STORIES</h1>
        <div class="row">
            <div class="col-sm">
                <img src={male1} style={{marginRight:"4%"}}className="imageStandard"alt="watch5" />
                <p>BEST REGAL WATCHES OF 2021</p>
            </div>
            <div class="col-sm">
                <img src={male2} className="imageStandard"alt="watch5" />
                <p>DESIGNER INSIGHTS ON THE FUTURE OF WATCHES</p>
            </div>
        </div>
    </div>
  );
}

export default Stories;
