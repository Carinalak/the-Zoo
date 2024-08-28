import { createBrowserRouter } from "react-router-dom";
import { Animals } from "./pages/animals";
import { Home } from "./pages/home";
import { Layout } from "./pages/Layout";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            
            {
                path: "/animals",
                element: <Animals></Animals>,
            }
        ],
    },
]);