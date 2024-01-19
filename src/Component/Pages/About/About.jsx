import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const About = () => {
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse m-0 p-0">
                    <img src="https://i.ibb.co/cJD4Rbb/Whats-App-Image-2024-01-18-at-13-12-22-37dcd2ba-removebg-preview.png" />
                    <div>
                        <h1 className="text-5xl font-bold font-mono italic">Hello !</h1>
                        <h1 className="text-5xl font-bold uppercase font-serif">I am Tayfur</h1>
                        <p className="py-6">I'm Tayfur, professional web developer with long time experience in this field​. and more this Sociel midea</p>
                        <div className="flex gap-6 text-emerald-500 mb-10">
                            <a href="https://www.facebook.com/obaydul.kuasha.1/" target="_blank" rel="noopener noreferrer" className="p-2 border-2 rounded-full border-emerald-400 text-3xl">  <FaFacebook /> </a>
                            <a href="https://twitter.com/ObaydulKuasha" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-emerald-400 rounded-full text-3xl">  <FaTwitter /> </a>
                            <a href="https://www.instagram.com/obaydul_kuasha/" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-emerald-400 rounded-full text-3xl">  <FaInstagram /> </a>
                            <a href="https://www.linkedin.com/in/obaydulkuasha/" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-emerald-400 rounded-full text-3xl">  <FaLinkedin /> </a>
                            <a href="https://github.com/ObaydulK"  target="_blank" rel="noopener noreferrer"  className="p-2 border-2 border-emerald-400 rounded-full text-3xl target:_blank" >< FaGithub /> </a>
                        </div>
                        <button className="btn  border-3 border-emerald-400 font-bold  uppercase">See Portfolios</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
