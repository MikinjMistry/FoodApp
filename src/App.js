import React, { lazy, Suspense, useContext, useState } from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

import Error from './components/Error';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';



const About = lazy(() => import('./components/About'))
const RestaurentMenu = lazy(() => import('./components/RestaurentMenu'))
const Contact = lazy(() => import('./components/Contact'))
const Login = lazy(() => import('./components/Login'))


const App = () => {
    const { user } = useContext(UserContext);
    const [username, setUsername] = useState(user)
    return <div id="app">
        <UserContext.Provider value={{ user: username, setUsername }}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </UserContext.Provider>
    </div>
}

const route = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Body />
        },
        {
            path: "/about",
            element: <Suspense fallback={<div className='container'><Shimmer /></div>}><About /></Suspense>
        },
        {
            path: "/contact",
            element: <Suspense fallback={<div className='container'><Shimmer /></div>}><Contact /></Suspense>
        },
        {
            path: "/restaurents/:resId",
            element: <Suspense fallback={<div className='container'><Shimmer /></div>}><RestaurentMenu /></Suspense>
        },
        {
            path: "/login",
            element: <Suspense fallback={<Shimmer />}><Login /></Suspense>
        }
    ],
    errorElement: <Error />
},])

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("root:", root)
root.render(<RouterProvider router={route} />)
