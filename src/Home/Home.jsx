import { useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Spot from '../Spot/Spot';

const Home = () => {
    const spots = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <div className='grid grid-cols-3'>
            {
            spots.map(spot=><Spot key={spot._id} spot={spot}></Spot>)
           }
            </div>
           
           <Footer></Footer> 
        </div>
    );
};

export default Home;