import useFetch from "./useFetch";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { Link } from "react-router-dom";

const Search = (searchval) => {
   let{data}=useFetch("https://api.jikan.moe/v4/anime")
    return ( 
        <div>
            {
            data.include((searchval)=>{
                <div key={searchval.mal_id} >
                <Link to={`/Fulldetailes${searchval.mal_id}`}>
                <img src={searchval.images.jpg.large_image_url} alt="Poster Not Found" />
                <h1>Name : {searchval.title}</h1>
                <h1>Year :{searchval.year}</h1>
                </Link>
                <div >
                <button  className='like'> <FavoriteBorderIcon   /> </button>
                <button  className='like'> < ThumbUpOffAltIcon  /> </button>
                <button  className='like'> < ThumbDownOffAltIcon  /> </button>
                </div>
            </div>
            })
            }    
        </div>
     );
}
 
export default Search;