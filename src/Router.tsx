import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { animalLoader } from "./loaders/animalLoader";
import { Animals } from "./pages/Animals";
import { Home } from "./pages/Home";


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
                loader: animalLoader,
            }
        ],
    },
]);