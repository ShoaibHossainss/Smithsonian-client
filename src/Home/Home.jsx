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
        <div className=''> 
             <Helmet>
                <title>Smithsonian</title>
            </Helmet>
            <Navbar></Navbar>
            <Header></Header>
            <div>
            <h3 className="text-center text-black text-2xl font-semibold mb-4">Explore Stunning Tourist Spots</h3>
            <h3 className="text-center text-black text-xl mb-4">
   Discover breathtaking destinations around the globe.
   <br />  
   Handpicked for your next unforgettable vacation. 
   <br /> 
   Let your journey to paradise begin here.
</h3>

          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-10 gap-4'>
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