import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const Update = () => {
    const loader = useLoaderData()
    console.log(loader)
    const handleUpdate = e => {
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
        
        
        
        
        
        const updateSpot = {tourists_spot_name,image,country_name,location,description,average_cost,seasonality,travel_time,totalVisitorsPerYear}
        console.log(updateSpot)
        fetch(`https://assignment-10-server-kappa-ebon.vercel.app/spots/${loader._id}`,{
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(updateSpot)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
              Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, update it!"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Updated!",
                    text: "Your spot has been updated.",
                    icon: "success"
                  });
                }
              });
            }
          });
        
      }
    
    return (
        <div>
          <Navbar></Navbar>
             <form onSubmit={handleUpdate}>
            <div className='lg:flex'>
            <div className="form-control lg:w-1/2 ">
  <label className="label">
    <span className="label-text">Tourist Spot Name</span>
  </label>
  <label className="input-group">
    
    <input type="text" defaultValue={loader?.tourists_spot_name} name='tourists_spot_name' placeholder="Name" className="input input-bordered w-full" />
  </label>
</div>
            <div className="form-control lg:w-1/2 ml-4">
  <label className="label">
    <span className="label-text">Image URL</span>
  </label>
  <label className="input-group">
    
    <input type="text" defaultValue={loader?.image} name='image' placeholder="Quantity" className="input input-bordered w-full" />
  </label>
</div>
            </div>
            <div className='lg:flex'>
            <div className="form-control lg:w-1/2 ">
  <label className="label">
    <span className="label-text">Country Name</span>
  </label>
  <label className="input-group">
    
    <input type="text" defaultValue={loader?.country_name} name='country_name' placeholder="Name" className="input input-bordered w-full" />
  </label>
</div>
            <div className="form-control lg:w-1/2 ml-4">
  <label className="label">
    <span className="label-text">Location</span>
  </label>
  <label className="input-group">
    
    <input type="text" defaultValue={loader?.location} name='location' placeholder="Quantity" className="input input-bordered w-full" />
  </label>
</div>
            </div>
            <div className="form-control">
              <p>Description</p>
              <textarea className="border-red-500 border-[1px]" placeholder="Write A Short Description" name="description" defaultValue={loader?.description} id="" cols="30" rows="5"></textarea>
            </div>
            <div className='lg:flex'>
            <div className="form-control lg:w-1/2 ">
  <label className="label">
    <span className="label-text">Average Cost</span>
  </label>
  <label className="input-group">
    
    <input type="number" defaultValue={loader?.average_cost} name='average_cost' placeholder="Name" className="input input-bordered w-full" />
  </label>
</div>
            <div className="form-control lg:w-1/2 ml-4">
  <label className="label">
    Seasonality
  </label>
  
  <select className="select select-bordered join-item" name='seasonality' defaultValue={loader?.seasonality} required>
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
  <select className="select select-bordered join-item" name='travel_time' defaultValue={loader?.travel_time} required>
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
    
    <input type="number" defaultValue={loader?.totalVisitorsPerYear} name='totalVisitorsPerYear' placeholder="Quantity" className="input input-bordered w-full" />
  </label>
</div>
            </div>
            <div className='lg:flex'>
           
         
            </div>
            <input type="submit" value="Update" className="btn btn-primary w-full" />
            </form>
            <Link to='/'>
      <button className="btn btn-primary mb-8 mt-8">Go Back</button>
      </Link>
      <Footer></Footer>
        </div>
    );
};

export default Update;