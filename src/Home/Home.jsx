import { useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Spot from '../Spot/Spot';

const Home = () => {
    const spots = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
           {
            spots.map(spot=><Spot key={spot._id} spot={spot}></Spot>)
           }
           <Footer></Footer> 
        </div>
    );
};

export default Home;