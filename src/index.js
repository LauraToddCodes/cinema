import React from "react";
import App from "./App";
import { RouterProvider} from "react-router-dom";
import { ListingsProvider } from "./ListingsContext.js";
import { createRoot } from 'react-dom/client';
import router from "./router"

createRoot(document.getElementById("root")).render(
    <ListingsProvider>
        <RouterProvider router={router}>
            <App/>
        </RouterProvider>
    </ListingsProvider>
)
