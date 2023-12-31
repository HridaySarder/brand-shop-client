import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layouts/Root';
import Error from './components/Error';
import AddProducts from './components/AddProducts';
import MyCart from './components/MyCart';
import Login from './components/Login';
import AuthProvider from './providers/AuthProvider';
import Home from './Home/Home';
import Register from './components/Register';
import PrivateRoute from './Route/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import ShowProducts from './components/ShowProducts';
import ShowDetails from './components/ShowDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: () => fetch('/data.json')
        
      },
      {
        path:"/addProducts",
        element:<PrivateRoute><AddProducts></AddProducts></PrivateRoute>
      },
      {
        path:"/myCart",
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
      },
      {
        path:'/showProducts',
        element:<PrivateRoute><ShowProducts></ShowProducts></PrivateRoute>,
        loader: () => fetch('https://assignment-10-server-side-lac.vercel.app/product')
      },
      {
        path:"/login",
        element:<Login></Login>
      },
{
  path:"/register",
  element:<Register></Register>
},
{
  path:"/showDetails",
  element:<PrivateRoute><ShowDetails></ShowDetails></PrivateRoute>
}
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
     <ToastContainer />
  </React.StrictMode>,
)
