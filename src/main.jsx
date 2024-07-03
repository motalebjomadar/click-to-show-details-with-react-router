import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/body/Home.jsx';
import Contact from './components/body/Contact.jsx';
import Services from './components/body/Services.jsx';
import About from './components/body/About.jsx';
import Footer from './components/footer/Footer.jsx';
import Users from './components/body/Users.jsx';
import Details from './components/body/Details.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/users",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: "/user/:userId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <Details></Details>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/footer",
        element: <Footer></Footer>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
