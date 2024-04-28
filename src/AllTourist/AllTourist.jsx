import { Link, useLoaderData } from "react-router-dom";


const AllTourist = () => {
    const spots = useLoaderData()
    console.log(spots)
    return (
        <div className="grid grid-cols-3">
           
         {
            spots.map(p=>(
                <div key={p._id} className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={p.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">Country : {p.country_name}</h2>
                  <p>Spot : {p.tourists_spot_name}</p>
                  <p>Location : {p.location}</p>
                  <p>Visitors Per Year : {p.totalVisitorsPerYear}</p>
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
    );
};

export default AllTourist;