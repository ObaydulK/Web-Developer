import { Outlet } from "react-router-dom";
import Footer from "../Header/Footer/Footer/Footer";
import Header from "../Header/Header/Header";


const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;