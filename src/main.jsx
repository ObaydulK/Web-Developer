import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Main.jsx';
import Home from './Component/Home/Home.jsx';
import Contact from './Component/Pages/Contact/Contact.jsx';
import Portfolio from './Component/Pages/Portfolio/Portfolio.jsx';
import About from './Component/Pages/About/About.jsx';
import Service from './Component/Pages/Service/Service.jsx';
import Blog from './Component/Pages/Blog/Blog.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />

      },
      {
        path: "/service",
        element: <Service />
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      },

      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/blog",
        element: <Blog />
      },
    ]
  },


]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=' bg-base-300 '>
      <RouterProvider router={router} />
    </div>

  </React.StrictMode>,
)
