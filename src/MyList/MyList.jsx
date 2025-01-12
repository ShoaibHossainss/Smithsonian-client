import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";



const MyList = () => {
    const {user} = useContext(AuthContext)
    const [list,setList] = useState([])
    
    
    useEffect(()=>{
        fetch(`https://assignment-10-server-kappa-ebon.vercel.app/my-list/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setList(data)
        })
    },
    [user])


    const handleDelete = _id =>{
      console.log('works',_id)
      fetch(`https://assignment-10-server-kappa-ebon.vercel.app/delete/${_id}`,{
          method: 'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
          
          if(data.deletedCount>0){
              Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                  if (result.isConfirmed) {
                    Swal.fire({
                      title: "Deleted!",
                      text: "Your spot has been deleted.",
                      icon: "success"
                    });
                  }
                });
              console.log(data)
          }
      })
  }
    return (
        <div className="mx-auto">
           <Helmet>
                
                <title>My List</title>
                
            </Helmet>
            <Navbar></Navbar>
            <h3 className="text-center text-black text-2xl font-semibold mb-4 mt-10">My Added List</h3>
            {
                list.map(p=>(
                    <div key={p._id} className="overflow-x-auto mt-8 ">
                    <table className="table">
                      {/* head */}
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Spot Name</th>
                          <th>Location</th>
                          <th>Country</th>
                          <th>Cost</th>
                          <th>Update</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody >
                        <tr>
                          
                          <td className="w-32"><img  src={p.image} alt="" /></td>
                          <td>{p.tourists_spot_name}</td>
                          <td>{p.location}</td>
                          <td>{p.country_name}</td>
                          <td>{p.average_cost}</td>
                          
                          <td><Link to={`/update/${p._id}`}>
                  <button
                   className="btn bg-[#007bff] text-white">Update</button></Link>
                  </td>
                          <td><button onClick={() => handleDelete(p._id)} className="btn bg-[#007bff] text-white">Delete</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
              
                ))
            }
            <Link to='/'>
      <button className="btn bg-[#007bff] text-white text-center items-center flex mx-auto mb-8 mt-8">Go Back</button>
      </Link>
         <Footer></Footer>
        </div>
    );
};

export default MyList;


{/* <div key={p._id} className="flex w-1/2 mx-auto mb-4">
               <div className="w-1/2 pr-10">
                   <img src={p.image} alt="" />
               </div>
               <div>
               <h2>Country : {p.country_name}</h2>
               <p>Spot : {p.tourists_spot_name}</p>
               <p>Location : {p.location}</p>
               <p>Average Cost : {p.average_cost}</p>
               <p>Travel Time : {p.travel_time}</p>
               <div className="flex">
                  <Link to={`/update/${p._id}`}>
                  <button className="btn btn-primary">Update</button></Link>
                   <button onClick={() => handleDelete(p._id)} className="btn btn-primary">Delete</button>
               </div>
               </div>
              

</div> */}