import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import Search from "./Serach";

const Navabar = () => {
    let [searchval,setSearchval]=useState(null)
    return ( 
        <div className="navabar">
            <nav>
                <div className="logo" >
                <h1> ಸಿನಿಮಾ ಟಾಕೀಸ್</h1>
                <div  className="inputser">
                <input type="serach" placeholder="Serach" onChange={(e)=>{setSearchval(e.target.value)}}/>
                 <button className="search"  onClick={()=>{(<Search  searchval={searchval}/>)}}>  <SearchIcon /> </button>
                 </div>
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/Cartlist">
                        Cart
                    </Link>
                    <Link to="/about">
                        About
                    </Link>
                    </div>
                
            </nav>

        </div>
     );
}
 
export default Navabar;