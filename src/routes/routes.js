import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../component/Pages/Home';
import Destination from '../component/Pages/Destination';
import Blog from '../component/Pages/Blog';
import Login from '../component/Auth/Login';
import Signup from '../component/Auth/Signup';
import Category from '../components/Home/Category';
import CheckOut from '../component/Pages/CheckOut';

  export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,

        children: [
           {
            path: '/',
            element: <Home></Home>,
           },
           {
            path: '/home',
            element: <Home></Home>,
           },
           {
            path: '/destination',
            element: <Destination></Destination>,
           },
           {
            path: '/blog',
            element: <Blog></Blog>
           },
           {
            path: '/category/:id',
            element: <Category></Category>
           },
           {
            path: '/login',
            element: <Login></Login>,
           },
           {
            path: 'register',
            element: <Signup></Signup>,
           },
           {
            path: '/checkout',
            element: <CheckOut></CheckOut>
           }
          
        ]
    }
]);

