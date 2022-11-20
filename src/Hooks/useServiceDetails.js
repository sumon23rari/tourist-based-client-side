import { useEffect, useState } from "react";

const useServiceDetails=(serviceId)=>{
    const [service,setService]=useState({});
    useEffect(()=>{
   const url=`https://fast-headland-27515.herokuapp.com/service/${serviceId}`
   fetch(url)
   .then(res=>res.json())
   .then(data=>setService(data))
    },[serviceId])
    return [service]
}
export default useServiceDetails;