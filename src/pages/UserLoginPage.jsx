import React from 'react';
import LoginForm from "../components/LoginForm.jsx";
import AppNavBar from "../components/AppNavBar.jsx";
import Footer from "../components/footer/Footer.jsx"

const UserLoginPage = () => {
    return (
        <>
            <AppNavBar/>
            <LoginForm/>

            <Footer/>
        </>
    );
};

export default UserLoginPage;