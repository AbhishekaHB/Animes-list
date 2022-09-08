import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Detailes = ({animes}) => {
    let[wish,setWish]=useState([])
    
    useEffect(()=>{
        if(localStorage.getItem("wish")===null)  // if wish is not present before 
        {
           localStorage.setItem("wish","[]");   // then here we are going to add bez every time refresh storage will erase to avoid we are going to check this first 
        }
        
    },[])


    let handlewishlist=(id)=>{
       let x= localStorage.getItem("wish");
       x=JSON.parse(x);
       if(!x.includes(id))   // id is not present then it will be pushed
       {
        x.push(id)
       x=JSON.stringify(x)
       localStorage.setItem("wish",x)
       }else
       {
        alert("all redy added")
       }
       
    }

    return ( 
        <div className="disp">
            {animes.map((anime)=>{
                return(
                    <div key={anime.mal_id} >
                        <Link to={`/Fulldetailes${anime.mal_id}`}>
                        <img src={anime.images.jpg.large_image_url} alt="Poster Not Found" />
                        <h1>Name : {anime.title}</h1>
                        <h1>Year :{anime.year}</h1>
                        </Link>
                        <div >
                        <button  className='like'  onClick={()=>{handlewishlist(anime.mal_id)}}> <FavoriteBorderIcon   /> </button>
                        <button  className='like'> <ThumbUpOffAltIcon  /> </button>
                        <button  className='like'> <ThumbDownOffAltIcon  /> </button>
                        </div>
                    </div>
                )
            })}
        </div>
     );
}
 
export default Detailes;