import { useEffect } from "react";
import { useState } from "react"

const useFetch = (request) => {

    let [pending,setPending]=useState(true);
    let [error,setError]=useState(null);
    let [data,setData]=useState(null);

    useEffect(()=>{
            setTimeout(()=>{
                fetch(request)
            .then((response)=>{
                if(response.ok===false)
                {
                    throw Error("data not found")
                }
                return response.json()})
            .then((recivedata)=>{setData(recivedata.data);setPending(false)})  
            .catch((error)=>{setError(error.message);setPending(false)})},1000)
                  },[])


    return ( {data,pending,error} );
}
 
export default useFetch;