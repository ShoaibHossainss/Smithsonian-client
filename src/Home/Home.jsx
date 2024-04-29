import { useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Spot from '../Spot/Spot';
import Header from '../Header/Header';

const Home = () => {
    const spots = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
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