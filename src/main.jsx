
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
    element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    
    <RouterProvider router={router} />
    
  </AuthProvider>
)
