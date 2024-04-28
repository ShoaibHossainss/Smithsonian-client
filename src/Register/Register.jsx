import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";


const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [showPass,setShowPass] = useState(false)
    const handleRegister = e =>{
        e.preventDefault()
        const name = e.target.name.value
        const image = e.target.image.value
        const email = e.target.email.value
        const password = e.target.password.value
        e.target.reset();
        console.log(name,image,email,password)
        if(password.length < 6){
          toast.error("Password Must Be Six Character Or More");
          return
        }
        else if(!/[A-Z]/.test(password)){
          toast.error('Please Provide Uppercase')
          return
        }
        else if(!/[a-z]/.test(password)){
          toast.error('Please Provide Lowercase')
          return
        }

        createUser(email,password)
        
        .then(result=>{
          
            console.log(result.user)
            if(result.user){
              toast.success('Registration Successful')
            }
        })
        .catch(error=>{
            console.error(error)
            toast.error('User Already Registered')
        })
        
          
        
    
    }
    return (
        <div>
              <form onSubmit={handleRegister} className="mx-auto lg:w-[430px] md:w-[430px] w-[365px] mb-10 mt-10 bg-white rounded-2xl">
      <div className="form-control px-10 pt-2" >
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
      <div className="form-control px-10">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="text" name="image" placeholder="Image URL" className="input input-bordered" required />
        </div>
      <div className="form-control px-10">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control px-10">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPass ? 'text' : "password"} name="password" placeholder="password" className="input input-bordered" required 
          />
          <span className="lg:ml-80 md:ml-80 ml-64 -translate-y-8 lg:-translate-y-8" onClick={()=>{
            setShowPass(!showPass)
          }}>
           <FaRegEye />
          </span>
        </div>
        <div className="form-control mt-6 px-10 pb-4">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="px-10 pb-4 text-center">no account? please <Link to={'/login'}>
              <button className="btn btn-secondary font-sans lg:font-semibold lg:text-lg text-white rounded-lg">
              Login
              </button>
              </Link></p>
      <ToastContainer />
        </div>
    );
};

export default Register;