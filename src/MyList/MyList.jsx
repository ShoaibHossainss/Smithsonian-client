import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const MyList = () => {
    const {user} = useContext(AuthContext)
    const [list,setList] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/my-list/${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setList(data)
        })
    },
    [user])
    return (
        <div>
            <h3>Nice</h3>
            {
                list.map(p=>(
                    <div key={p._id} className="flex w-1/2 mx-auto mb-4">
                        <div className="w-1/2 pr-10">
                            <img src={p.image} alt="" />
                        </div>
                        <div>
                        <h2>Country : {p.country_name}</h2>
                        <p>Spot : {p.tourists_spot_name}</p>
                        <p>Location : {p.location}</p>
                        <p>Average Cost : {p.average_cost}</p>
                        <p>Travel Time : {p.travel_time}</p>
                        </div>

  </div>
                ))
            }
        </div>
    );
};

export default MyList;