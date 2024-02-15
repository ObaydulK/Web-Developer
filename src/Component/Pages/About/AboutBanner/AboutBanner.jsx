import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Typewriter from 'react-ts-typewriter';




const AboutBanner = () => {
    return (
        <div className=" ">
            <div className="hero bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse m-0 p-0 ">
                    <img src="https://i.ibb.co/TwWztNX/Obaydul-bg.png" />
                    <div className=" ">
                        <h1 className="text-5xl font-bold font-mono italic">Hello !</h1>
                        <h1 className="text-4xl font-bold uppercase font-serif py-5"> Wellcome my Portfolio  </h1>
                        <h1 className="py-6 text-3xl capitalize" ><Typewriter loop={true} speed={300} text="I'm Obaydul_Kuasha, professional Frontend developer (React) " /> </h1>
                        <div className="flex gap-6 text-emerald-500 my-10">
                            <a href="https://www.facebook.com/obaydul.kuasha.1/" target="_blank" rel="noopener noreferrer" className="p-2 border-2 rounded-full border-emerald-400 text-3xl">  <FaFacebook /> </a>
                            <a href="https://twitter.com/ObaydulKuasha" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-emerald-400 rounded-full text-3xl">  <FaTwitter /> </a>
                            <a href="https://www.instagram.com/obaydul_kuasha/" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-emerald-400 rounded-full text-3xl">  <FaInstagram /> </a>
                            <a href="https://www.linkedin.com/in/obaydulkuasha/" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-emerald-400 rounded-full text-3xl">  <FaLinkedin /> </a>
                            {/* <a href="https://github.com/ObaydulK" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-emerald-400 rounded-full text-3xl target:_blank" > </a> */}
                        </div>
                        <a href="https://github.com/ObaydulK" target="_blank" rel="noopener noreferrer" className="btn  border-3 border-emerald-400 font-bold  uppercase"> View my Github < FaGithub /> </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;