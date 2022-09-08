import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import Detailes from "./Detailes";

const Cartlist = () => {

    let [wish,setWish]=useState()

    let{data:animes,pending,error}=useFetch("https://api.jikan.moe/v4/anime");

    useEffect(()=>{
        let wish= localStorage.getItem("wish")
        wish=JSON.parse(wish);
        setWish(wish)},[])
    
    

    return (
        <div  className="animes-list">
           
           {pending && <div className="loading"> Loading................</div>}
            {error &&   <div>Error...................</div>}
            {animes && <Detailes animes={animes.filter((animes)=>{return wish.includes(animes.mal_id)})}/>}  
        </div>
      );
}
 
export default Cartlist;