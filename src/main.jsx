import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Root from './Components/Root/Root.jsx';
import Mobiles from './Components/Mobiles/Mobiles.jsx';
import Laptops from './Components/Laptops/Laptops.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {index:true, Component: Home},
      {path: 'mobiles', Component: Mobiles},
      {path: 'laptops', Component: Laptops},
      {path: 'about', Component: About}
    ],
  },
  {
    path: "About",
    element: <div>About myself here.</div>
  },
  {
    path: "Blogs",
    element: <div>Name:Mohammad</div>
  },
  {
    path:"app",
    Component: App,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
