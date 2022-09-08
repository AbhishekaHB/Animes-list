
import Detailes from "./Detailes";
import useFetch from "./useFetch";

const Home = () => {
    
   let{data:animes,pending,error}= useFetch("https://api.jikan.moe/v4/anime")
  
    return ( 
        <div >
            <h1 className="h1">Display All Movies </h1>
            {pending && <div className="loading"> Loading................</div>}
            {error &&   <div>Error...................</div>}
            {animes && <Detailes animes={animes}/>}
            

        </div>
     );
}
 
export default Home;