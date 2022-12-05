import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ItemsByStatus } from "../components/itemsByStatus";
import Root from "../components/Root";
import ItemDetailContainer from "../Containers/ItemDetailContainer";
import ItemListContainer from "../Containers/ItemListContainer";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <h1>No encontrado</h1>,
        children: [
            {
                path: "/",
                element: <ItemListContainer />,
            },
            {
                path: "/category/:categoryId",
                element: <ItemListContainer />,
            },
            {
                path: "/category/detail/:name",
                element: <ItemDetailContainer/>,
            },

           /* {
                path: "/category/status/:status",
                element: <ItemsByStatus/>,
            },*/
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;