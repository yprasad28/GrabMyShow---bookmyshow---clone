import React from 'react';


function Slider(){

    return (
        <>
        <div>
            
        </div>
        <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg" class="d-block w-100" alt="image"/>
          </div>
          <div class="carousel-item">
            <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1737617169305_tanishqdesktopcarousel.jpg" class="d-block w-100" alt="image"/>
          </div>
          <div class="carousel-item">
            <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1735802595905_movieweb2.jpg" class="d-block w-100" alt="image"/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </>
    )
}

export default Slider;