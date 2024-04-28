
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
    element: <Home></Home>,
    loader: () => fetch('http://localhost:5000/spots')
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
        loader: () => fetch('http://localhost:5000/spots')
      },
      {
        path: '/add-tourists-spot',
        element: <AddTourist></AddTourist>
      },
      {
        path: '/my-list',
        element: <MyList></MyList>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    
    <RouterProvider router={router} />
    
  </AuthProvider>
)
