import { Helmet } from "react-helmet";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Service from "../Pages/Service/Service"; 


const Home = () => {
    return (
        <div className="   ">
            <Helmet>
                <title> Home</title>
                {/* <link rel="icon" href="https://i.ibb.co/x51wWmN/Whats-App-Image-2024-01-18-at-13-12-22-37dcd2ba-removebg-preview-Copy.png" /> */}
            </Helmet>

           
            <About/>
            <Portfolio   />
            <Service />
            <Contact />
        </div>
    );
};

export default Home;