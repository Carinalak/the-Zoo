import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { animalsLoader } from "./loaders/animalLoader";
import { Animals } from "./pages/Animals";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/animals",
                element: <Animals></Animals>,
                loader: animalsLoader,
            }
        ],
    },
]);