import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Fulldetailes= () => {
   let{id}=useParams()
    let{data}=useFetch(`https://api.jikan.moe/v4/anime/${id}`)
    console.log(data);

    return ( 
    <div>
        {data && 
          <div  className="fulldetailes">
            <h1>Movie Name : {data.title}</h1> 
            <h2>Movie Release Date : {data.year}</h2>
            <h2>Movie Rating : {data.rating}</h2>
            <h2>Movie Rating : {data.geners}</h2>
            <h2>Movie Des : {data.synopsis}</h2>
            <h1> Movie Poster : </h1>
            <img src={data.images.jpg.large_image_url} alt="" />
            <h1> Movie Trailer : </h1>
            <iframe width="560" height="315" src={data.trailer.embed_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
          </div>}

    </div> );
}
 
export default Fulldetailes;