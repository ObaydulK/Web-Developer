import { Outlet } from "react-router-dom";
import Footer from "../Header/Footer/Footer/Footer";
import Header from "../Header/Header/Header";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Main = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='container m-auto font-serif bg-base-300 '>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;