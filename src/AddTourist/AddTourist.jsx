import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";


const AddTourist = () => {
  const {user} = useContext(AuthContext)
  const handleAddSpot = e => {
    e.preventDefault()
    const form = e.target;
    const tourists_spot_name = form.tourists_spot_name.value
    const image = form.image.value
    const country_name = form.country_name.value
    const location = form.location.value
    const description = form.description.value
    const average_cost = form.average_cost.value
    const seasonality = form.seasonality.value
    const travel_time = form.travel_time.value
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value
    const email = user.email
    const user_name = user.displayName
    
    
    
    
    const newSpot = {tourists_spot_name,image,country_name,location,description,average_cost,seasonality,travel_time,totalVisitorsPerYear,user_name,email}
    console.log(newSpot)
    fetch('https://assignment-10-server-delta-gray.vercel.app/spots',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newSpot)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.insertedId){
        alert('added')
        form.reset()
      }
      
    })
  }
    return (
        <div>
          <Navbar></Navbar>
            <form onSubmit={handleAddSpot}>
            <div className='lg:flex'>
            <div className="form-control lg:w-1/2 ">
  <label className="label">
    <span className="label-text">Tourist Spot Name</span>
  </label>
  <label className="input-group">
    
    <input type="text" name='tourists_spot_name' placeholder="Name" className="input input-bordered w-full" />
  </label>
</div>
            <div className="form-control lg:w-1/2 ml-4">
  <label className="label">
    <span className="label-text">Image URL</span>
  </label>
  <label className="input-group">
    
    <input type="text" name='image' placeholder="Quantity" className="input input-bordered w-full" />
  </label>
</div>
            </div>
            <div className='lg:flex'>
            <div className="form-control lg:w-1/2 ">
  <label className="label">
    Country
  </label>
  
  <select className="select select-bordered join-item" name='country_name' required>
  <option disabled selected>Select Country</option>
    <option>Bangladesh</option>
    <option>Thailand</option>
    <option>Malaysia</option>
    <option>Indonesia</option>
    <option>Vietnam</option>
    <option>Cambodia</option>
  </select>
    
    
    
 
</div>
            <div className="form-control lg:w-1/2 ml-4">
  <label className="label">
    <span className="label-text">Location</span>
  </label>
  <label className="input-group">
    
    <input type="text" name='location' placeholder="Quantity" className="input input-bordered w-full" />
  </label>
</div>
            </div>
            <div className="form-control">
              <p>Description</p>
              <textarea className="border-red-500 border-[1px]" placeholder="Write A Short Description" name="description" id="" cols="30" rows="5"></textarea>
            </div>
            <div className='lg:flex'>
            <div className="form-control lg:w-1/2 ">
  <label className="label">
    <span className="label-text">Average Cost</span>
  </label>
  <label className="input-group">
    
    <input type="number" name='average_cost' placeholder="Name" className="input input-bordered w-full" />
  </label>
</div>
            <div className="form-control lg:w-1/2 ml-4">
  <label className="label">
    Seasonality
  </label>
  
  <select className="select select-bordered join-item" name='seasonality' required>
  <option disabled selected>Select Season</option>
    <option>Summer</option>
    <option>Winter</option>
    <option>Spring</option>
    <option>Autumn</option>
  </select>
    
    
    
 
</div>
            </div>
            <div className='lg:flex'>
            <div className="form-control lg:w-1/2 ">
  <label className="label">
    Travel Time
  </label>
  <select className="select select-bordered join-item" name='travel_time' required>
  <option disabled selected>Select Time</option>
    <option>2 Days</option>
    <option>3 Days</option>
    <option>7 Days</option>
    <option>10 Days</option>
    <option>14 Days</option>
  </select>
    
  
 
</div>
            <div className="form-control lg:w-1/2 ml-4">
  <label className="label">
    <span className="label-text">Total Visitors Per Year</span>
  </label>
  <label className="input-group">
    
    <input type="number" name='totalVisitorsPerYear' placeholder="Quantity" className="input input-bordered w-full" />
  </label>
</div>
            </div>
            <div className='lg:flex'>
           
            <div className="form-control lg:w-1/2 ml-4">
  <label className="label">
    <span className="label-text">User Name</span>
  </label>
  <label className="input-group">
    
    <input type="text"  name='user_name' defaultValue={user.displayName} placeholder="Quantity" className="input input-bordered w-full" />
  </label>
</div>
<div className="form-control lg:w-1/2 ">
  <label className="label">
    <span className="label-text">User Email</span>
  </label>
  <label className="input-group">
    
    <input type="text" name='email' placeholder="Name" defaultValue={user.email} className="input input-bordered w-full" />
  </label>
</div>
            </div>
            <input type="submit" value="Add" className="btn btn-primary w-full" />
            </form>
            <Link to='/'>
      <button className="btn btn-primary mb-8 mt-8">Go Back</button>
      </Link>
            <Footer></Footer>
        </div>
    );
};

export default AddTourist;