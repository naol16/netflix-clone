import React,{useEffect,useState} from 'react'
import "./row.css"
import axios  from "../../../utilis/axios"
const Row=({title,fetchurl,isLargeRow})=>{
const [films,setfilms]=useState([]);

const base_url="https://image.tmdb.org/t/p/original";

useEffect(()=>{
(async ()=>{

    try{
        console.log(fetchurl);
        const request= await axios.get(fetchurl);
        console.log(request)
        setfilms(request.data.results)

    }
    catch(error){
        console.log("error",error)
    }
}

)()


},[]


)

return (
    
    <div className="row">
        <h1>{title}</h1>
        <div className="row_posters">
            {/* {films?.map((films,index)=>{

     <img  key={index}  src={`${base_url} ${isLargeRow ? films.poster_path :films.backdrop_path}`} alt={films.name} className={`row_poster${isLargeRow  && "row_posterLarge"}`}/> */}

     {films?.map((film, index) => (
        <img
            key={index}
            src={`${base_url}${isLargeRow ? film.poster_path : film.backdrop_path}`}
            alt={film.name}
            className={`row_poster ${isLargeRow ?  "row_posterLarge": "row_poster"}`}
        />
    ))}

    </div>
    </div>

)
}



export default Row