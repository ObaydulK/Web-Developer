import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Typewriter from 'react-ts-typewriter';




const AboutBanner = () => {
    return (
        <div className=" container " >
            <div className="     " >
                <div className="   grid grid-flow-row lg:grid-cols-2  " style={{ justifyItems: 'center' }}>
                    <div>
                        <div className="w-full">
                            <img src="https://i.ibb.co/TwWztNX/Obaydul-bg.png" />
                        </div>
                    </div>
                    <div data-aos="zoom-out-right" data-aos-duration="2000">
                        <div className=" my-10 min-[320px]:text-center lg:text-start capitalize  "  >
                            <h1 className="text-5xl font-bold font-mono italic">Hello !</h1>
                            <h1 className="text-4xl font-bold uppercase font-serif py-5"> Wellcome my Portfolio  </h1>
                            <h1 className="text-3xl font-bold  font-serif  "> I'm Obaydul_Kuasha  </h1>
                            <h1 className="py-3 text-3xl capitalize" > <Typewriter loop={true} speed={300} text=" Frontend developer (React) " /> </h1>
                            <div className="   "  >
                                <div className="  grid grid-flow-col gap-6 text-emerald-500 my-4 justify-between  text-center ">
                                    {/* <a href="https://www.facebook.com/obaydul.kuasha.1/" target="_blank" rel="noopener noreferrer" className="p-2 border-2 rounded-full border-emerald-400 text-3xl">  <FaFacebook /> </a> */}
                                    <a href="https://twitter.com/ObaydulKuasha" target="_blank" rel="noopener noreferrer" className="  me-auto p-4 border-2 border-emerald-400 rounded-full text-3xl   ">  <FaTwitter /> </a>
                                    <a href="https://www.instagram.com/obaydul_kuasha/" target="_blank" rel="noopener noreferrer" className="  me-auto p-4 border-2 border-emerald-400 rounded-full text-3xl  ">  <FaInstagram /> </a>
                                    <a href="https://www.linkedin.com/in/obaydulkuasha/" target="_blank" rel="noopener noreferrer" className="  me-auto p-4 border-2 border-emerald-400 rounded-full text-3xl ">  <FaLinkedin /> </a>
                                    {/* <a href="https://github.com/ObaydulK" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-emerald-400 rounded-full text-3xl target:_blank" > </a> */}
                                </div>
                            </div>
                            <a href="https://github.com/ObaydulK" target="_blank" rel="noopener noreferrer" className="btn  border-3 border-emerald-400 font-bold  uppercase"> View my Github < FaGithub /> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;