import React, { useEffect, useState } from "react";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import "./row.css";
import instance from "../../../utilis/axios";
const Row = ({ title, fetchurl, isLargeRow }) => {
  const [films, setfilms] = useState([]);
  const [trailer, settrailer] = useState(" ");
  const [showTrailer, setShowTrailer] = useState(false);
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        console.log(fetchurl);
        const request = await instance.get(fetchurl);
        console.log(request);
        setfilms(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchurl]);
  let trail=false

  const handleClick = (movie) => {
    setShowTrailer(true);
    
    if (trailer) {
      settrailer("");
    } else {
      movieTrailer(movie?.title ||  movie?.name || movie?.original_name)
      .then((url)=>{
      console.log(url)
      const  urlpar= new URLSearchParams(new URL(url).search)
      console.log(urlpar);
      console.log(urlpar.get('v'));
      settrailer(urlpar.get('v'));
      })
    }
  };
  const opts={
    height:'390',
    width:"100%",

    playerVars:{
        autoplay:1
    },
  }

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {/* {films?.map((films,index)=>{

     <img  key={index}  src={`${base_url} ${isLargeRow ? films.poster_path :films.backdrop_path}`} alt={films.name} className={`row_poster${isLargeRow  && "row_posterLarge"}`}/> */}

        {films?.map((film, index) => (
          <img
            onClick={() => handleClick(film)}
            key={index}
            src={`${base_url}${
              isLargeRow ? film.poster_path : film.backdrop_path
            }`}
            alt={film.name}
            className={`row_poster ${
              isLargeRow ? "row_posterLarge" : "row_poster"
            }`}
          />
        ))}
      </div>
      <div  style={{padding:'40px'}}>
        {showTrailer  && <YouTube videoId={trailer} opts={opts}/>}

      </div>
    </div>
  );
};

export default Row;
