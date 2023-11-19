import React from 'react';
import {GetToken} from "./utility/TokenHelper.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductListPage from "./pages/ProductListPage.jsx";
import Home from "./pages/HomePage.jsx";
import Team from "./pages/TeamPage.jsx"
import Service from "./pages/ServicePage.jsx"
import Project from "./pages/ProjectPage.jsx"
import Testimonial from "./pages/TestimonialPage.jsx"
import Contact from "./pages/ContactPage.jsx"
import UserLoginPage from "./pages/UserLoginPage.jsx";
import OTPPage from "./pages/OTPPage.jsx";

const App = () => {


    if(GetToken()){

        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/team" element={<Team/>}/>
                    <Route path="/service" element={<Service/>}/>
                    <Route path="/project" element={<Project/>}/>
                    <Route path="/Testimonial" element={<Testimonial/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
    else {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/team" element={<Team/>}/>
                    <Route path="/service" element={<Service/>}/>
                    <Route path="/project" element={<Project/>}/>
                    <Route path="/Testimonial" element={<Testimonial/>}/>
                    <Route path="/login" element={<UserLoginPage/>}/>
                    <Route path="/otp" element={<OTPPage/>}/>
                </Routes>
            </BrowserRouter>
        );
    }


};

export default App;