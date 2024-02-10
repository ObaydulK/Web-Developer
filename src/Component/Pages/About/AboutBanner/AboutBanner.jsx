import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";



const AboutBanner = () => {
    return (
        <div className=" ">
            <div className="hero bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse m-0 p-0">
                    <img src="https://i.ibb.co/TwWztNX/Obaydul-bg.png" />
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
                        <a href="https://professional-web-developer-y2fk.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn  border-3 border-emerald-400 font-bold  uppercase">See Portfolios</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;