import { useEffect, useState } from "react";
import { Link } from "react-router-dom";





const Country = () => {
    const [country,setCountry] = useState([])
    useEffect(()=>{
        fetch('https://assignment-10-server-kappa-ebon.vercel.app/country') 
        .then(res=>res.json())
        .then(data=>{
            setCountry(data)
        })
    },[])
   
    return (
        
      
        <div className="mx-auto lg:w-[1320px] md:w-[750px] w-[365px] mb-10">
            <h3 className="text-center text-black text-2xl mb-4 mt-10">Country</h3>
            <p className="text-center text-black text-xl mb-4">Browse any country to see their best spot</p>
            <div className="grid grid-cols-3 gap-6 ">
              {
               country.map(p=>(

                <Link to={`/${p.link}`} key={p._id}>
                <div className="">
               <img className="rounded-2xl" src={p.image} alt="" />
               <h3 className="-translate-y-6 rounded-b-2xl text-white p-1 text-center bg-gray-500">{p.description}</h3>
                </div>
                </Link>
               ))
              }
            </div>
           
        </div>
      
        
        
    );
};

export default Country;