import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Shoes from './components/Shoes/Shoes.jsx'
import Home from './components/Home/Home.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'

const router=createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path:"",
        element: <Home/>
      },
      {
        path: '/shoes',
        element: <Shoes/>
      },{
        path:'/aboutus',
        element: <AboutUs/>
      },
      {
        path: '/contactus',
        element:<ContactUs/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
