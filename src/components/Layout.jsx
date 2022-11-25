import React, {
    useContext, useEffect,
} from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Projects } from "../pages/Projects/Projects";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import ThemeContext from "../context/themeContext";
import {Preloader} from "./Preloader/Preloader";
import SingleProject from "../pages/Projects/SingleProject";
import { useRef } from "react";

const Layout = () => {
    const { theme, footerHeight, menuOpen } = useContext(ThemeContext);

   
    return (
        <BrowserRouter basename="/">
            <main className={`layout ${theme == 'dark' ? 'dark-theme': 'light-theme'} ${menuOpen ? 'fixed-screen':''}`} style={{paddingBottom:footerHeight}}>
                <Header />
            
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" exact element={<Projects />} />
                    <Route path="project/:id" element={<SingleProject />} />
                </Routes >
                <Footer/>

                <Preloader />
            </main>


        </BrowserRouter>
    )
}


export default Layout;