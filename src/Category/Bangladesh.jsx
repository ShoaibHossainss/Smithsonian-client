import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";




const Bangladesh = () => {
    
    const [items,setItem] = useState([]);
    
    useEffect(()=>{
        fetch('https://assignment-10-server-kappa-ebon.vercel.app/spots')
        .then(res=>res.json())
        .then(data=>{
            setItem(data.filter(item=>item.country_name==='Bangladesh'))
            
    
     
   
        })
    },[])
    
   
   
    
    return (
      
        <div>
            <Navbar></Navbar> 

                     {
            items.map(p=><div key={p._id} className="card w-96 bg-base-100  mx-auto mt-10 mb-10">
            <figure><img src={p.image} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title pb-2">Country : {p.country_name}</h2>
              <p className="pb-2">Spot : {p.tourists_spot_name}</p>
              <p className="pb-2">Location : {p.location}</p>
              <p className="text-black text-lg pb-2">Description : {p.description}</p>
              <p className="pb-2">Visitors Per Year : {p.totalVisitorsPerYear}</p>
              <p className="pb-2">Average Cost : {p.average_cost}</p>
              <p className="pb-2">Season : {p.seasonality}</p>
              <div className="card-actions justify-end">
              <Link to={`/spot-details/${p._id}`}>
                              <button className="btn bg-[#007bff] text-white">View Details</button>
                              </Link>
              </div>
            </div>
          </div>
                
            )
          }
           <Link to='/'>
      <button className="btn bg-[#007bff] text-white text-center items-center flex mx-auto mb-8 mt-8">Go Back</button>
      </Link>
         <Footer></Footer>
        </div>
       
    );
};

export default Bangladesh;