import { useState,useEffect } from "react";

const useFetch  = (url) => {
    const [data, setdata] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
  
    useEffect(() => {
        const AbortCont=new AbortController();
      setTimeout(() => {
        fetch(url,{signal:AbortCont.signal})
        .then(res => {
          if (!res.ok) { // error coming back from server
            throw Error('could not fetch the data for that resource');
          } 
          return res.json();
        })
        //this data is the function result comming from from lets say fetch function. data acts as an parameter here
        .then(data => {
          setIsPending(false);
          setdata(data);
          setError(null);
        })
        .catch(err => {
          // auto catches network / connection error
          if(err.name==="abortError")
          {
            console.log("fetch aborted");
          }
          else
          {
              setIsPending(false);
              setError(err.message);
            }
        })
      }, 1000);
      return()=>{
        AbortCont.abort();
      }
    }, [url])



    return {data,isPending,error };
}
export default useFetch;