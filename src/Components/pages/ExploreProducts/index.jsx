import React, { useState } from "react";
import blackTea from './blackTea.jpg';
import greenTea from './greenTea.jpg';
import teaBags from './teaBags.jpg';
import blackTeaMini from './blackTeaMini.jpg';
import greenTeaMini from './greenTeaMini.PNG';
import './ExploreProducts.css';

const ExploreProducts = () => {
 
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">

        <div className="col">
          <div className="card">
            <div className="card-body">
              <img src={blackTea} alt="theTeaLeaf" width="300px" height="300px" />
              <h5 className="card-title">Black Tea</h5>
              <p className="card-text">Price: 850 Rs<br />Weight: 500g</p>
              <br /><br />

              <a className="btn-0" aria-current="page" href="/">Buy Now</a>
            </div>
          </div>
        </div>

        <div class="col">
    <div class="card">
      <div class="card-body">
      <img src={blackTea} alt="theTeaLeaf" width="300px" height="300px" />

        <h5 class="card-title">Black Tea</h5>
        <p class="card-text">Price: 850 Rs<br/>Weight: 500g</p>
        <br/><br/>
        <a class="btn-0" aria-current="page" href="/">Buy Now</a>
      </div>
      </div>
    </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
      <img src={teaBags} alt="theTeaLeaf" width="300px" height="300px" />
        <h5 class="card-title">Tea Bags</h5>
        <p class="card-text">Price: 900 Rs<br/>Weight: 500g</p>
        <br/><br/>

        <a class="btn-0" aria-current="page" href="buyNow">Buy Now</a>
        </div>
      </div>
    </div>
    <div class="col">
    <div class="card">
      <div class="card-body">
      <img src={blackTeaMini} alt="theTeaLeaf" width="300px" height="300px" />
        <h5 class="card-title">Black Tea Mini </h5>
        <p class="card-text">Price: 650 Rs<br/>Weight: 200g</p>


        <a class="btn-0" aria-current="page" href="buyNow">Buy Now</a>
        </div>
      </div>
    </div>
    <div class="col">
    <div class="card">
      <div class="card-body">
      <img src={greenTeaMini} alt="theTeaLeaf" width="300px" height="300px" />
        <h5 class="card-title">Green Tea Mini</h5>
        <p class="card-text">Price: 500 Rs<br/>Weight: 200g</p>



        <a class="btn-0" aria-current="page" href="buyNow">Buy Now</a>

        </div>
      </div>
    </div>
    <div class="col">
    <div class="card">
      <div class="card-body">
      <img src={greenTea} alt="theTeaLeaf" width="300px" height="300px" />
        <h5 class="card-title">Green Tea</h5>
        <p class="card-text">Price: 900 Rs<br/>Weight: 500g</p>

        <a class="btn-0" aria-current="page" href="/">Buy Now</a>

        </div>
      </div>
    </div>
  </div>
</div>
       
      
  );
};



export default ExploreProducts;

