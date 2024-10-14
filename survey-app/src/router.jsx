import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "./views/Dashboard.jsx";
import Surveys from "./views/Surveys.jsx";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import GuestLayout from "./Components/GuestLayout.jsx";
import DefaulLayout from "./components/DefaultLayout.jsx";
import SurveyView from "./views/SurveyView.jsx";

const router = createBrowserRouter([
    {
        path:'/dashboard',
        element: <Navigate to="/" />
    },
    {
        path:'/',
        element: <DefaulLayout />,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard />
            },
            {
                path:'/',
                element:<Dashboard />
            },
            {
                path:'/surveys',
                element:<Surveys />
            },
            {
                path:'/surveys/create',
                element:<SurveyView />
            }
        ]
    },
    {
        path:'/',
        element: <GuestLayout />,
        children:[
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/sign-up',
                element:<Signup />
            }
        ]
    }
])
export default router;