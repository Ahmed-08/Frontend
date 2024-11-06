import {createBrowserRouter} from "react-router-dom";
import Root from "../../shared/ui/Root/Root";
import Service from "../../pages/Service/Service";
import Home from "../../pages/Home/Home";
import Price from "../../pages/Price/Price";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'service',
                element: <Service />
            },
            {
                path: 'price',
                element: <Price />
            }
        ]
    }
]);

export default router;