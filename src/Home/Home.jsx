import { useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Spot from '../Spot/Spot';
import Header from '../Header/Header';
import Country from '../Country/Country';
import Contact from '../Contact/Contact';
import Vote from '../Vote/Vote';

const Home = () => {
    const spots = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols'>
            {
            spots.map(spot=><Spot key={spot._id} spot={spot}></Spot>)
           }
            </div>
            <Vote></Vote>
          <Contact></Contact>
           <Footer></Footer> 
        </div>
    );
};

export default Home;