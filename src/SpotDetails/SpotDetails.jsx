import { Link, useLoaderData, useParams,} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";





const SpotDetails = () => {
  
    const spots = useLoaderData();
    const {id} = useParams();
    const spot = spots.find(spot=>spot._id===id)
    console.log(spot);
    
    return (
      
        <div>
          <Navbar></Navbar>
          <div className="lg:grid lg:grid-cols-2 lg:mx-auto lg:mt-16 mt-8 mb-8">
        
        <div className=" bg-[#1313130D] rounded-2xl ml-3">
        <img className="p-10 px-4 lg:mb-1 mb-10" src={spot.image} alt="" />
        </div>
        
      <div className="px-10">
      <p className='font-playfair font-bold text-4xl text-[#131313]'>{spot.tourists_spot_name}</p>
      <p className='font-sans mb-8 pt-3 font-medium text-xl text-[#131313CC]'>Country : {spot.country_name}</p>
      <hr className='border-[1px] border-dashed border-[#0d0d0d1a] mt-4' />
      <p className="mt-3 font-sans font-medium text-xl text-[#131313CC]">Spot Name : {spot.location}</p> 
      <hr className='border-[1px] border-dashed border-[#0d0d0d1a] mt-4' />
      
      <p className="font-sans font-bold text-[#131313] mb-12 mt-24 ">Description : <span className="font-sans font-bold text-[#131313B3]">{spot.description}</span></p>
      
      
     
      <hr className='border-[1px] border-dashed border-[#0d0d0d1a] mt-3 mb-16' />
      <p className="font-sans text-[#131313B3] mb-4">Average Cost : <span className="lg:ml-5 font-sans font-semibold text-black">{spot.average_cost}</span></p>
      <p className="font-sans text-[#131313B3] mb-4">Season :<span className="lg:ml-8 font-sans font-semibold text-black">{spot.seasonality}</span></p>
    
      <p className="font-sans text-[#131313B3] mb-4">Travel Time : <span className="ml-4 font-sans font-semibold text-black">{spot.travel_time}</span></p>
      <p className="font-sans text-[#131313B3] mb-16">Visitors Per Year :<span className="ml-4 font-sans font-semibold text-black">{spot.totalVisitorsPerYear}</span></p>
     
     
      <Link to='/'>
      <button className="btn bg-[#007bff] text-white">Go Back</button>
      </Link>
      
      </div>
      <ToastContainer />
      
      </div>
      <Footer></Footer>
        </div>

    );
};

export default SpotDetails;