import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import { Fade } from "react-awesome-reveal";
import { Tooltip } from 'react-tooltip'
import { Helmet } from "react-helmet";


const AllTourist = () => {



    const spots = useLoaderData()
    const [sortSpot,setSortSpot] = useState(spots)
    const [allSpot,setAllSpot] = useState(spots)
    

    useEffect(()=>{
      setSortSpot(spots);
      setAllSpot(spots);
    },[spots])

    
   
    const handleMaximumCost = () =>{
      const storeCat = sortSpot.sort((a,b)=>{
        return b.average_cost - a.average_cost;
       
      })
     
      setSortSpot(storeCat);
      
      
    }
    const handleMinimumCost = () =>{
      const storeCat = sortSpot.sort((a,b)=>{
        return a.average_cost - b.average_cost;
       
      })
      setSortSpot(storeCat);
     
    }
   
    
     
    console.log(spots)
    
    return (
        <div>
           <Helmet>
                
                <title>All Tourist</title>
                
            </Helmet>
          <Navbar></Navbar>
          <details className="dropdown mt-4 mb-4">
  <summary className="m-1 btn bg-[#007bff] text-white">Sort</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    
    <li onClick={()=>handleMaximumCost()}><a>Maximum</a></li>
    <li onClick={()=>handleMinimumCost()}><a>Minimum</a></li>
    
  </ul>
</details>
<div className="items-center mx-auto text-center mt-4 mb-4">
         <a className="my-anchor-element">◕‿‿◕</a>
<a className="my-anchor-element">◕‿‿◕</a>
<a className="my-anchor-element">◕‿‿◕</a>
         </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-10 lg:w-[1320px] md:w-[750px] w-full">
          
          {
            sortSpot.map(p=>(
                <div key={p._id}  className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={p.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">Country : {p.country_name}</h2>
                  <p>Spot : {p.tourists_spot_name}</p>
                  <p>Location : {p.location}</p>
                  <p>Visitors Per Year : {p.totalVisitorsPerYear}</p>
                  <p>Average Cost : {p.average_cost}</p>
                  <p>Travel Time : {p.travel_time}</p>
                  <div className="card-actions justify-end">
                    <Link to={`/spot-details/${p._id}`}>
                    <button className="btn bg-[#007bff] text-white">View Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
         }
          </div>

           
         
          <Link to='/'>
      <button className="btn text-center mx-auto flex items-center bg-[#007bff] text-white mb-8 mt-8">Go Back</button>
      </Link>
            <Footer></Footer>
            <Fade>
  <p>I will gently appear as I enter the viewport</p>
</Fade>
        </div>
    );
};

export default AllTourist;