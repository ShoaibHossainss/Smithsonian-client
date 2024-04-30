import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
    const links = <>
             <li><NavLink className={({isActive})=>isActive ? 'border-[1px] border-solid border-[#23be0a] bg-white text-[#23be0a] rounded-md font-sans text-lg' : ' font-sans text-lg text-white'} to='/'>Home</NavLink></li>
             <li><NavLink className={({isActive})=>isActive ? 'border-[1px] border-solid border-[#23be0a] bg-white text-[#23be0a] rounded-md font-sans text-lg' : ' font-sans text-lg text-white'} to='/all-tourists-spot'>All Tourists Spot</NavLink></li>
             <li><NavLink className={({isActive})=>isActive ? 'border-[1px] border-solid border-[#23be0a] bg-white text-[#23be0a] rounded-md font-sans text-lg' : ' font-sans text-lg text-white'} to='/add-tourists-spot'>Add Tourists Spot</NavLink></li>
             <li><NavLink className={({isActive})=>isActive ? 'border-[1px] border-solid border-[#23be0a] bg-white text-[#23be0a] rounded-md font-sans text-lg' : ' font-sans text-lg text-white'} to='/my-list'>My List</NavLink></li>
    </>

const {user,logOut} = useContext(AuthContext)
const handleLogOut = () =>{
    logOut()
    .then(()=>{
      console.log('logout success')
      toast.success('Logout Successful')
      
    })
    .catch(error=>{
      console.error(error)
    })
  }
    return (
        <div className="navbar bg-[#333F48] lg:w-[1320px] md:w-[750px] w-[365px]  mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-white">Smithsonian</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {links}
          </ul>
        </div>
        <div className="navbar-end">
        {
 user ? <>
  
 <div className="dropdown dropdown-hover">
     <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
       <div className="w-10 rounded-full">
         
         {user.photoURL? <img src={user.photoURL} alt=""  /> : 
         <img alt="" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
           
         }
        
       </div>
     </div>
     <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
      
       <li className="uppercase">{user.displayName}</li>
     </ul>
   </div>
   <button onClick={handleLogOut} className="btn bg-[#007bff] text-white font-sans lg:font-semibold lg:text-lg  rounded-lg">Sign Out</button>
   </> : 
    <>
    <div>
    <Link to={'/login'}>
  <button className="btn lg:mr-4 bg-[#007bff] text-white font-sans lg:font-semibold lg:text-lg  rounded-lg">Login</button>
  </Link>
  <Link to={'/register'}>
  <button className="btn bg-[#007bff] text-white font-sans lg:font-semibold lg:text-lg  rounded-lg">Register</button>
  </Link>
    </div>
    </>
  
  
  }
      </div>  
      </div>
    );
};

export default Navbar;