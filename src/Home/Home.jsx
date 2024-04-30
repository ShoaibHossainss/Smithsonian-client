import { Link, useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Spot from '../Spot/Spot';
import Header from '../Header/Header';
import Country from '../Country/Country';
import Contact from '../Contact/Contact';
import Vote from '../Vote/Vote';
import { Helmet } from 'react-helmet';


const Home = () => {
    const spots = useLoaderData()
    return (
        <div>
             <Helmet>
                
                <title>Smithsonian</title>
                
            </Helmet>
            <Navbar></Navbar>
            
            
            <Header></Header>
            <div className='mx-auto lg:w-[1320px] md:w-[750px] w-full'>
            <h3 className=' text-center text-black text-2xl mb-4'>Tourist Spot</h3>
          <h3 className='text-center text-black text-xl mb-4' >Top destinations for your next vacation</h3>
          <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-10 gap-4'>
           
           {
           spots.map(spot=><Spot key={spot._id} spot={spot}></Spot>)
          }
           </div>
            </div>
           
            <Country></Country>
            <Vote></Vote>
          <Contact></Contact>
           <Footer></Footer> 
        </div>
    );
};

export default Home;