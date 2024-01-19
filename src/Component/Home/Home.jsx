import { Helmet } from "react-helmet";
import About from "../Pages/About/About";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import Portfolio from "../Pages/Portfolio/Portfolio";
// import Service from "../Pages/Service/Service";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Portfolio/Home</title>
                <link rel="icon" href="https://i.ibb.co/x51wWmN/Whats-App-Image-2024-01-18-at-13-12-22-37dcd2ba-removebg-preview-Copy.png" />
            </Helmet>
            <About />
            <AboutUs />
            {/* <Service/> */}
            <Portfolio />
            <Contact />
        </div>
    );
};

export default Home;