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
        
      
        <div className="mx-auto mb-10">
           <h3 className="text-center text-black text-2xl font-semibold mb-4 mt-10">Explore Countries By Clicking Here</h3>
           <p className="text-center text-black text-xl mb-4">
   Discover a variety of countries, each with its own unique charm.
   <br />  
   Unveil their top tourist spots and breathtaking locations.
   <br />  
   Your next travel adventure starts here.
</p>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 md:ml-2 ml-0">
              {
               country.map(p=>(

                <Link to={`/${p.link}`} key={p._id}>
                <div>
               <img className="rounded-2xl w-[400px] md:h-[270px] h-[230px]" src={p.image} alt=""/>
               <h3 className="-translate-y-6 rounded-b-2xl text-white p-1 text-center bg-gray-500 w-[400px]">{p.description}</h3>
                </div>
                </Link>
               ))
              }
            </div>
           
        </div>
      
        
        
    );
};

export default Country;