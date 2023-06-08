import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main'
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main/>,
        children : [
            {
                path : '/',
                element: <Home/>
            },
            {
                path : 'login',
                element: <Login/>
            },
            {
                path : 'sign-up',
                element : <SignUp/>
            },
            {
                path : '*',
                element : <ErrorPage/>
            }
        ]
    }
])
