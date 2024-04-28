import React from 'react';

const Spot = ({spot}) => {
    const {image,country_name,tourists_spot_name,totalVisitorsPerYear,location} = spot
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Country : {country_name}</h2>
    <p>Spot : {tourists_spot_name}</p>
    <p>Location : {location}</p>
    <p>Visitors Per Year : {totalVisitorsPerYear}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Spot;