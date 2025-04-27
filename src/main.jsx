import { StrictMode, Suspense } from 'react'
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
import Users from './Components/Users/Users.jsx';
import Users2 from './Components/Users2/Users2.jsx';
import UserDetailse from './Components/UserDetailse/UserDetailse.jsx';
import Posts from './Components/Header/Posts/Posts.jsx';
import PostDetailse from './Components/PostDetailse/PostDetailse.jsx';


const userPromiseData =fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'mobiles', Component: Mobiles },
      { path: 'laptops', Component: Laptops },
      { path: 'about', Component: About },
      {
        path: 'users',
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
          Component: Users
      },
      {
        path: 'users2',
        element: <Suspense fallback={<span>Loading...</span> }>
          <Users2 userPromiseData={userPromiseData}></Users2>
        </Suspense>
      },
      {
        path: 'users/:userID',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
        Component: UserDetailse
      },
      {
        path: 'posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        Component:Posts
      },
      {
        path: 'posts/:postId',
        loader : ({params}) =>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetailse
      }
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
    path: "app",
    Component: App,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
