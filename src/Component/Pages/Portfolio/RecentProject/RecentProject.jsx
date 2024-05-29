import Slider from "react-slick";
import Title from "../Title/Titles";
import RecentprojectTitle from "../Title/RecentprojectTitle";
import { Link } from "react-router-dom";


const RecentProject = () => {
    var Works = {
        // dots: true,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div>
            {/* My Recent Best Works part start */}
            <div>
                <div className=" mb-4 rounded-r-2xl rounded-l-3xl shadow-2xl">
                   <Title subHeading="'  Recent Works'" /> 
                </div>
                
                <div>
                    <Slider {...Works}>

                        <div>
                            <div className="m-2 shadow-2xl rounded-2xl border-4 border-white  ">
                                <div className=" p-2   font-bold  text-black ">
                                    <Link className=" shadow-2xl   ">
                                        <img src="https://i.ibb.co/G7NR84Q/Screenshot-2024-01-23-at-21-20-06-New-Project-Vercel.png" alt=" " className="rounded-xl  h-44 border-4 w-full" />
                                    </Link>
                                    <div className="   ">
                                        <div className="h-[150px] py-4">
                                            <RecentprojectTitle ProjectTitle="Car-Doctor Rifat" porjectDiscripiton="Use for Code: Html,css,JavaScript,React, Tailwind css,Daysiui,React-Router,React Icone" />
                                        </div>
                                        <div className="  text-center ">
                                            <div className="grid grid-flow-row grid-cols-2 gap-2 border-2 border-white shadow-2xl py-2  rounded-xl ">
                                              <Link to="https://car-doctor-sigma.vercel.app/"target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black " >Live

                                              </Link>
                                              <Link to="https://github.com/ObaydulK/Car-Doctor" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black" >Github</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="m-2 shadow-2xl rounded-2xl border-4 border-white">
                                <div className="p-2   font-bold  text-black ">
                                    <figure className=" shadow-2xl  ">
                                        <img src="https://i.ibb.co/Pxt0JPf/Screenshot-2024-01-23-at-21-31-46-New-Project-Vercel.png" alt="Shoes" className="rounded-xl h-44 border-4 w-full" />
                                    </figure>
                                    <div className="   ">
                                        <div className="h-[150px] py-4">
                                            <RecentprojectTitle ProjectTitle=" IT Solutions" porjectDiscripiton="Use for Code:  Html,css,JavaScript,React, Tailwind css,Daysiui,React-Router, GitHub, vercel" />
                                        </div>
                                        <div className="  text-center ">
                                            <div className="grid grid-flow-row grid-cols-2 gap-2 border-2 border-white shadow-2xl py-2  rounded-xl ">
                                                <div>
                                                    <a href="https://github.com/ObaydulK/Technology-It-Solutions" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black ">Live</a><br />
                                                </div>
                                                <div>
                                                    <a href="https://technology-it-solutions.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black">Github</a><br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="m-2 shadow-2xl rounded-2xl border-4 border-white">
                                <div className="p-2  font-bold  text-black ">
                                    <figure className=" shadow-2xl  ">
                                        <img src="https://i.ibb.co/j350HQW/Screenshot-2024-01-23-at-21-40-35-Vite-React.png" alt="Shoes" className="rounded-xl h-44 border-4 w-full" />
                                    </figure>
                                    <div className="   ">
                                        <div className="h-[150px] py-4">
                                            <RecentprojectTitle ProjectTitle="Portfolio React js" porjectDiscripiton="Use for Code:  Html,css,JavaScript,React, Tailwind css,Daysiui,React-Router,React Icone, Github, Vercel" />
                                        </div>
                                        <div className="  text-center ">
                                            <div className="grid grid-flow-row grid-cols-2 gap-2 border-2 border-white shadow-2xl py-2  rounded-xl ">
                                                <div>
                                                    <a href="https://github.com/ObaydulK/professional-web-developer" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black ">Live</a><br />
                                                </div>
                                                <div>
                                                    <a href="https://professional-web-developer.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black">Github</a><br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="m-2 shadow-2xl rounded-2xl border-4 border-white  ">
                                <div className=" p-2   font-bold  text-black ">
                                    <figure className="  shadow-2xl   ">
                                        <img src="https://i.ibb.co/G7NR84Q/Screenshot-2024-01-23-at-21-20-06-New-Project-Vercel.png" alt=" " className="rounded-xl  h-44 border-4 w-full" />
                                    </figure>
                                    <div className="   ">
                                        <div className="h-[150px] py-4">
                                            <RecentprojectTitle ProjectTitle="Car-Doctor" porjectDiscripiton="Use for Code: Html,css,JavaScript,React, Tailwind css,Daysiui,React-Router,React Icone" />
                                        </div>
                                        <div className="  text-center ">
                                            <div className="grid grid-flow-row grid-cols-2 gap-2 border-2 border-white shadow-2xl py-2  rounded-xl ">
                                                <div>
                                                    <a href="https://car-doctor-sigma.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black ">Live</a><br />
                                                </div>
                                                <div>
                                                    <a href="https://github.com/ObaydulK/Car-Doctor" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black">Github</a><br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="m-2 shadow-2xl rounded-2xl border-4 border-white">
                                <div className="p-2   font-bold  text-black ">
                                    <figure className=" shadow-2xl  ">
                                        <img src="https://i.ibb.co/Pxt0JPf/Screenshot-2024-01-23-at-21-31-46-New-Project-Vercel.png" alt="Shoes" className="rounded-xl h-44 border-4 w-full" />
                                    </figure>
                                    <div className="   ">
                                        <div className="h-[150px] py-4">
                                            <RecentprojectTitle ProjectTitle=" IT Solutions" porjectDiscripiton="Use for Code:  Html,css,JavaScript,React, Tailwind css,Daysiui,React-Router, GitHub, vercel" />
                                        </div>
                                        <div className="  text-center ">
                                            <div className="grid grid-flow-row grid-cols-2 gap-2 border-2 border-white shadow-2xl py-2  rounded-xl ">
                                                <div>
                                                    <a href="https://github.com/ObaydulK/Technology-It-Solutions" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black ">Live</a><br />
                                                </div>
                                                <div>
                                                    <a href="https://technology-it-solutions.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black">Github</a><br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="m-2 shadow-2xl rounded-2xl border-4 border-white">
                                <div className="p-2  font-bold  text-black ">
                                    <figure className=" shadow-2xl  ">
                                        <img src="https://i.ibb.co/j350HQW/Screenshot-2024-01-23-at-21-40-35-Vite-React.png" alt="Shoes" className="rounded-xl h-44 border-4 w-full" />
                                    </figure>
                                    <div className="   ">
                                        <div className="h-[150px] py-4">
                                            <RecentprojectTitle ProjectTitle="Portfolio React js" porjectDiscripiton="Use for Code:  Html,css,JavaScript,React, Tailwind css,Daysiui,React-Router,React Icone, Github, Vercel" />
                                        </div>
                                        <div className="  text-center ">
                                            <div className="grid grid-flow-row grid-cols-2 gap-2 border-2 border-white shadow-2xl py-2  rounded-xl ">
                                                <div>
                                                    <a href="https://github.com/ObaydulK/professional-web-developer" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black ">Live</a><br />
                                                </div>
                                                <div>
                                                    <a href="https://professional-web-developer.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black">Github</a><br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="m-2 shadow-2xl rounded-2xl border-4 border-white">
                                <div className="p-2   font-bold  text-black ">
                                    <figure className=" shadow-2xl  ">
                                        <img src="https://i.ibb.co/DDs8PD2/Screenshot-2024-01-23-at-21-48-22-New-Project-Vercel.png" alt="Shoes" className="rounded-xl h-44 border-4 w-full" />
                                    </figure>
                                    <div className="   ">
                                        <div className="h-[150px] py-4">
                                            <RecentprojectTitle ProjectTitle="Home  Real Estate" porjectDiscripiton="Use for Code:  Html,css,JavaScript,React, Tailwind css,Daysiui,React-Router,React Icone,React-Slick Github, Vercel" />
                                        </div>
                                        <div className="  text-center ">
                                            <div className="grid grid-flow-row grid-cols-2 gap-2 border-2 border-white shadow-2xl py-2  rounded-xl ">
                                                <div>
                                                    <a href="https://github.com/ObaydulK/HomePress-Real-Estate" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black ">Live</a><br />
                                                </div>
                                                <div>
                                                    <a href="https://home-press-real-estate-cfcb.vercel.app/  " target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black">Github</a><br />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="m-2 shadow-2xl rounded-2xl border-4 border-white">
                                <div className="p-2   font-bold  text-black ">
                                    <figure className=" ">
                                        <img src="https://i.ibb.co/fSMgmpv/Screenshot-2024-01-23-at-21-52-52-Dashboard.png" alt="Shoes" className="rounded-xl h-44 border-4 w-full" />
                                    </figure>
                                    <div className=" shadow-2xl    ">
                                        <div className="h-[150px] py-4">
                                            <RecentprojectTitle ProjectTitle="Resturent" porjectDiscripiton="Use for Code: Html,css,JavaScript,React, Tailwind css,Daysiui,React-Router,React Icone,React-Slick Github, Vercel" />
                                        </div>
                                        <div className="  text-center ">
                                            <div className="grid grid-flow-row grid-cols-2 gap-2 border-2 border-white shadow-2xl py-2  rounded-xl ">
                                                <div>
                                                    <a href="https://github.com/programming-hero-web-course-4/b8a9-event-management-ObaydulK" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black ">Live</a><br />
                                                </div>
                                                <div>
                                                    <a href="https://b8a9-event-management-obaydul-k.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black">Github</a><br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
            {/* My Recent Best Works part end */}
        </div>
    );
};

export default RecentProject;