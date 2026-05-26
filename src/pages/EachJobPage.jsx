import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'


const EachJobPage = () => {
    const {id} =useParams ();
  const [job, setJob] =useState(null)
  const [loading,setLoading] = useState(true)
useEffect(()=>{
const fetchJob = async() =>{
    try {
//       const apiUrl = isHome 
//   ? '/api/jobs?_page=1&_per_page=3' 
//   : '/api/jobs';

        const res = await fetch(`/api/jobs/${id}`);  // ✅ already correct
const data = await res.json();               // ✅ already correct
setJob(data);                                // ✅ just this
        
setJobs(isHome ? data.data : data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }

}
fetchJob();
},[])
  return loading ? <Spinner/> :(
    <h1>
       {job.title}
    </h1>
  )
}

export default EachJobPage