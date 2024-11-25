import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Liked from "../pages/Favourites";
import Card from "../components/Cart";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";


const router = createBrowserRouter([
    
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'favourites',
                element: <Liked />
            },
            {
                path: 'cart',
                element: <Card />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
]);
export default router;