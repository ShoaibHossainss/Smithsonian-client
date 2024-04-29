import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


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
          <Navbar></Navbar>
          <details className="dropdown">
  <summary className="m-1 btn">open or close</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    
    <li onClick={()=>handleMaximumCost()}><a>Maximum</a></li>
    <li onClick={()=>handleMinimumCost()}><a>Minimum</a></li>
    
  </ul>
</details>
          <div className="grid grid-cols-3">
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
                  <div className="card-actions justify-end">
                    <Link to={`/spot-details/${p._id}`}>
                    <button className="btn btn-primary">View Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
         }
          </div>

           
         
          <Link to='/'>
      <button className="btn btn-primary mb-8 mt-8">Go Back</button>
      </Link>
            <Footer></Footer>
        </div>
    );
};

export default AllTourist;