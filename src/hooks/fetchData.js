import axios from "axios"
import { useEffect, useState } from "react"

const useFetchData =(url)=>{
    const [isPending, setIsPending] = useState(false)
    const [data, setData] = useState([])
    const [error, setError] = useState({})
    const fetcher =()=>{
       setIsPending(true)
        axios.get(url)
        .then((result)=>{
            console.log(result.data);
            
setData(result.data)
  
     })
        .catch((err)=>{
console.log(err);
setError(err)
        })
        .finally(()=>{
           setIsPending(false)
        })
    }

useEffect(()=>{
    fetcher(url);
},[url])

return {data,isPending,error}
}
export default useFetchData;