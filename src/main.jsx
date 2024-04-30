
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import AuthProvider from './AuthProvider/AuthProvider';
import Home from './Home/Home';
import Register from './Register/Register';
import Login from './Login/Login';
import AllTourist from './AllTourist/AllTourist';
import AddTourist from './AddTourist/AddTourist';
import MyList from './MyList/MyList';
import Update from './Update/Update';
import SpotDetails from './SpotDetails/SpotDetails';
import Private from './Private/Private';
import Country from './Country/Country';
import Bangladesh from './Category/Bangladesh';
import Cambodia from './Category/Cambodia';
import Thailand from './Category/Thailand';
import Malaysia from './Category/Malaysia';
import Vietnam from './Category/Vietnam';
import Indonesia from './Category/Indonesia';
import Error from './Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
    element: <Home></Home>,
    loader: () => fetch('https://assignment-10-server-kappa-ebon.vercel.app/spots')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/all-tourists-spot',
        element: <AllTourist></AllTourist>,
        loader: () => fetch('https://assignment-10-server-kappa-ebon.vercel.app/spots')
      },
      {
        path: '/spot-details/:id',
        element: <Private>
          <SpotDetails></SpotDetails>
        </Private>,
        loader: () => fetch('https://assignment-10-server-kappa-ebon.vercel.app/spots')
      },
      {
        path: '/add-tourists-spot',
        element: <Private>
          <AddTourist></AddTourist>
        </Private>
      },
      {
        path: '/my-list',
        element: <Private>
          <MyList></MyList>
        </Private>
      },
      {
        path: '/country',
        element: <Country></Country>,
        
      },
      {
        path: '/bangladesh',
        element: <Bangladesh></Bangladesh>,
       
        
      },
      {
        path: '/cambodia',
        element: <Cambodia></Cambodia>,
       
      },
      {
        path: '/thailand',
        element: <Thailand></Thailand>,
       
      },
      {
        path: '/malaysia',
        element: <Malaysia></Malaysia>,
       
      },
      {
        path: '/vietnam',
        element: <Vietnam></Vietnam>,
       
      },
      {
        path: '/indonesia',
        element: <Indonesia></Indonesia>,
       
      },
      {
        path: '/update/:id',
        element: <Private>
          <Update></Update>
        </Private>,
        loader: ({params}) => fetch(`https://assignment-10-server-kappa-ebon.vercel.app/spots/${params.id}`)
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    
    <RouterProvider router={router} />
    
  </AuthProvider>
)
