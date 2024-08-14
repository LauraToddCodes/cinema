import React from "react";
import Navbar from "./components/navbar.js";
import Title from "./components/title.js";
import Footer from "./components/footer.js";
import { Outlet } from "react-router-dom";
import "./style.css";


function App(){
    return(
        <div>
            <Title />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default App;