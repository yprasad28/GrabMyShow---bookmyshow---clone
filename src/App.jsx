import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import "../../movies.jsx";
import Header from "./Header/header.jsx";
import Slider from "./SectionSlider/slider.jsx";
import ImgCard from "./SectionCard/ImgCard.jsx";
import EventCard from "./EventCards/EventCard.jsx";
import PremiereCard from "./PremiereCard/PremiereCard.jsx";
import MusicStudio from "./MusicStudio/MusicStudio.jsx";
import TrendingCard from "./TrendindCards/TrendingCard.jsx";
import Footer from "./Footer/Footer.jsx";

const movie1 = [
  {
    title: "Daaku Maharaja",
    genre: "Drama/action",
    time: "10AM",
    seats: 60,
    rating: 4.2,
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICA3NiBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00430011-hkuzdjfumq-portrait.jpg",
  },

  {
    title: "Game Changer",
    genre: "Drama/Political",
    time: "1PM",
    seats: 50,
    rating: 3.9,
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny40LzEwICA4OS42SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00311772-dyqxbymvgu-portrait.jpg",
  },
  {
    title: "Sankranthiki Vasthunam",
    genre: "Drama/comdedy",
    time: "4PM",
    seats: 70,
    rating: 4.2,
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgNzYuNUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00418119-urxwxzudkv-portrait.jpg",
  },
  {
    title: "Sky Force",
    genre: "Action/Historical/Thriller",
    time: "8PM",
    seats: 40,
    rating: 4.1,
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgMjEuNksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00371539-sgpsxzcesz-portrait.jpg",
  },
];

// console.log(movie1.rating[0])

function App() {
  const name = "Prasad";
  return (

    <>
    <Header/>
    <Slider />
      <div className="container">
        <div className="row">
          <h1 className="movie-head">Now Trending  Shows</h1>
          {movie1.map((movie) => {
            const {title,genre,rating,image} = movie;
            return (
              <div className="col-3">
                <div class="card custom-card">
                  <img src={image} class="card-img-top" alt="image" />
                  <div class="card-body">
                    <h5 class="card-title head"> {title}</h5>
                    <p class="card-text para">{genre}
                    </p>
                    <p class="card-text">★ {rating}
                    </p>
                    <a href="#" class="btn btn-primary">
                      Book seats
                    </a>
                  </div>
                </div>
              </div>
            );
          })}

          {/* <div className="col-6">
<div class="card">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card {name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div> */}
        </div>
      </div>
      <ImgCard/>
      <EventCard/>
      <PremiereCard/>
      <MusicStudio/>
      <TrendingCard/>
      <Footer/>
    </>
  );
  
}
export default App;
