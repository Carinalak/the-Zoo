import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { animalLoader, animalsLoader } from "./loaders/animalLoader";
import { Animals } from "./pages/Animals";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Animal } from "./pages/Animal";
import { Suspense } from "react";
import { Spinner } from "./assets/components/Spinner";
import { feedAnimalLoader } from "./loaders/feedAnimalLoader";


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
                element: <Suspense fallback={<Spinner></Spinner>}><Animals></Animals></Suspense>,
                loader: animalsLoader,
            },
            {
                path: "/animal/:id",
                element: <Animal></Animal>,
                loader: animalLoader,
            },
            {
                path: "/feed-animal/:id",
                loader: feedAnimalLoader,
            },
        ],
    },
]);
