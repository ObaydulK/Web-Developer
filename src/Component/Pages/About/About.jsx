import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const About = () => {
    return (
        <div>
            
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse m-0 p-0">
                    <img src="https://i.ibb.co/cJD4Rbb/Whats-App-Image-2024-01-18-at-13-12-22-37dcd2ba-removebg-preview.png" />
                    <div>
                        <h1 className="text-5xl font-bold font-mono italic">Hello !</h1>
                        <h1 className="text-5xl font-bold uppercase font-serif">I'm ObayduR Kuasha</h1>
                        <p className="py-6 capitalize">I'm Obaydul_Kuasha, professional Frontend developer (React) with long time experience in this field​. and more this social media</p>
                        <div className="flex gap-6 text-emerald-500 mb-10">
                            <a href="https://www.facebook.com/obaydul.kuasha.1/" target="_blank" rel="noopener noreferrer" className="p-2 border-2 rounded-full border-emerald-400 text-3xl">  <FaFacebook /> </a>
                            <a href="https://twitter.com/ObaydulKuasha" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-emerald-400 rounded-full text-3xl">  <FaTwitter /> </a>
                            <a href="https://www.instagram.com/obaydul_kuasha/" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-emerald-400 rounded-full text-3xl">  <FaInstagram /> </a>
                            <a href="https://www.linkedin.com/in/obaydulkuasha/" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-emerald-400 rounded-full text-3xl">  <FaLinkedin /> </a>
                            <a href="https://github.com/ObaydulK" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-emerald-400 rounded-full text-3xl target:_blank" >< FaGithub /> </a>
                        </div>
                        <button className="btn  border-3 border-emerald-400 font-bold  uppercase">See Portfolios</button>
                    </div>
                </div>
            </div>
            {/* About us part start */}
            <div className="hero  bg-base-100 py-5">
                <div className="hero-content flex-col lg:flex-row sm:flex-col">
                    <div className="flex-1">
                        <img src="https://themebeyond.com/html/kufa/img/banner/banner_img2.png" className="max-w-sm  " />
                    </div>
                    <div className=" flex-1 ">
                        <h1 className="text-3xl text-emerald-500 font-bold">Introduction</h1>
                        <h1 className="text-5xl py-5 font-bold">About Me</h1>
                        <p className="  ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className="py-6">
                            <h1 className="text-5xl font-bold">Education</h1>
                            <div className=" flex flex-row gap-5 items-center   py-5">
                                <h1 className="text-emerald-400 text-2xl font-bold">2023 to 2027</h1>
                                <p>------</p>
                                <div className="font-bold">
                                    <p className="text-2xl">BSc in computer Science</p>
                                    <p className=""> World University of Bangladeshi, Uttara</p>
                                    <p className="text-2xl">0.00 Out of 4</p>
                                    <progress className="progress w-full" value="20" max="100"></progress>
                                </div>
                            </div>
                            <div className=" flex flex-row gap-5 items-center  py-5">
                                <h1 className="text-emerald-400 text-2xl font-bold">2018 to 2022</h1>
                                <p>------</p>
                                <div className="font-bold">
                                    <p className="text-2xl">Diploma in computer Science</p>
                                    <p>Shariatpur polytechnic institute, Shariatpur</p>
                                    <p className="text-2xl"> 3.50 out of 4</p>
                                    <progress className="progress w-full" value="100" max="100"></progress>
                                </div>
                            </div>
                            <div className=" flex flex-row gap-5 items-center  py-5">
                                <h1 className="text-emerald-400 text-2xl font-bold">2016 to 2018</h1>
                                <p>------</p>
                                <div className="font-bold">
                                    <p className="text-2xl">SSC in Electrical Engineering</p>
                                    <p>Idipur Pilot High School, Goshairhat</p>
                                    <p className="text-2xl">4.86 out of 5</p>
                                    <progress className="progress w-full" value="100" max="100"></progress>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* About us part end */}


        </div>
    );
};

export default About;
