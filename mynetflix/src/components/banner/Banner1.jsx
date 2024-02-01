import React from 'react'
import axios from "../../utilis/axios"
import requests from "../../utilis/request"
import { useEffect, useState } from "react"
import './banner.css'

function Banner() {

    const[banner,setbanner]=useState(null)
useEffect(()=>{
    (async()=>{
        try{
            const request=await axios.get(requests.fetchNetflixorginals);
            console.log(request.data.results);

            setbanner(request.data.results[
        
            Math.floor(Math.random() * request.data.results.length)
        ]);


        }
        catch(error){
            console.log("error",error);
        }
    })();

},[]);
function truncate(str,n){
    return str?.length>n?str.substr(0,n-1)+'...':str;
}
  return (
<div className="banner2"
style={{
    backgroundSize:"cover",
    backgroundImage:`url('https://image.tmdb.org/t/p/original${banner?.backdrop_path}')`,
    backgoundPosition:"center",
    backgroundRepeat:"no-repeat",
    color:"white"

}}>
    <div className="content">
    <h1 className="title">
        {banner?.title ||  banner?.name || banner?.orginal_name}
    </h1>
</div>
< div className="buttons">
    <button className="button play">
   play
    </button>
    <button className="button">
        MyList
    </button>
    <div>

    </div>
    <h1  className="description">{truncate(banner?.overview,150)}  </h1>
</div>
<div  className="fadebutton">
    </div>
</div>
  );
}
export default Banner;