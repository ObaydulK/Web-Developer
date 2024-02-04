import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const RecentProject = () => {
    var Works = {
        // dots: true,
        infinite: true,
        autoplay: true,
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
                <div>
                    <h1 className="text-emerald-200 uppercase text-5xl font-bold font-mono text-center py-10 underline" >My Recent Works</h1>
                </div>
                <div>
                    <Slider {...Works}>

                        <div className="">
                            <div className="px-2">
                                <div className="card p-2 font-mono font-bold  bg-yellow-50 text-black shadow-xl">
                                    <figure className=" ">
                                        <img src="https://i.ibb.co/G7NR84Q/Screenshot-2024-01-23-at-21-20-06-New-Project-Vercel.png" alt=" " className="rounded-xl" />
                                    </figure>
                                    <div className="   ">
                                        <div>
                                            <h2 className="card-title">Car-Doctor </h2>
                                            <p className=" ">Use for Code: Html,css,JavaScript,React, Tailwind css,Daysiui,React-Router,React Icone </p>
                                        </div>
                                        <div className=" text-center ">
                                            <div className="collapse bg-base-200">
                                                <input type="checkbox" className="peer" />
                                                <div className="collapse-title text-center font-bold bg-primary w-full text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-2xl">
                                                    Show project link
                                                </div>
                                                <div className="collapse-content    bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                                    <a href="https://github.com/ObaydulK/Car-Doctor" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black">Push Github</a><br />
                                                    <a href="https://car-doctor-sigma.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black my-2">Push Live link</a><br />
                                                    {/* <a href="" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black"> Push Sorch file</a> */}
                                                    {/* <a href="http://" >  </a> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="px-2">
                                <div className="card p-2 font-mono font-bold  bg-yellow-50 text-black shadow-xl">
                                    <figure className=" ">
                                        <img src="https://i.ibb.co/Pxt0JPf/Screenshot-2024-01-23-at-21-31-46-New-Project-Vercel.png" alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="   ">
                                        <div>
                                            <h2 className="card-title">Technology IT Solutions</h2>
                                            <p className=" ">Use for Code:  Html,css,JavaScript,React, Tailwind css,Daysiui,React-Router, GitHub, vercel</p>
                                        </div>
                                        <div className=" text-center ">
                                            <div className="collapse bg-base-200">
                                                <input type="checkbox" className="peer" />
                                                <div className="collapse-title text-center font-bold bg-primary w-full text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-2xl">
                                                    Show project link
                                                </div>
                                                <div className="collapse-content    bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                                    <a href="https://github.com/ObaydulK/Technology-It-Solutions" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black">Push Github</a><br />
                                                    <a href="https://technology-it-solutions.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black my-2">Push Live link</a><br />
                                                    {/* <a href="{blog}" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black"> Push Sorch file</a> */}
                                                    {/* <a href="http://" > </a> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="px-2">
                                <div className="card p-2 font-mono font-bold  bg-yellow-50 text-black shadow-xl">
                                    <figure className=" ">
                                        <img src="https://i.ibb.co/j350HQW/Screenshot-2024-01-23-at-21-40-35-Vite-React.png" alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="   ">
                                        <div>
                                            <h2 className="card-title">Professional Web Developer</h2>
                                            <p className=" ">Use for Code:  Html,css,JavaScript,React, Tailwind css,Daysiui,React-Router,React Icone, Github, Vercel </p>
                                        </div>
                                        <div className=" text-center ">
                                            <div className="collapse bg-base-200">
                                                <input type="checkbox" className="peer" />
                                                <div className="collapse-title text-center font-bold bg-primary w-full text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-2xl">
                                                    Show project link
                                                </div>
                                                <div className="collapse-content    bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                                    <a href="https://github.com/ObaydulK/professional-web-developer " target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black">Push Github</a><br />
                                                    <a href="https://professional-web-developer.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black my-2">Push Live link</a><br />
                                                    {/* <a href="" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black"> Push Sorch file</a> */}
                                                    {/* <a href="http://" ></a> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="px-2">
                                <div className="card p-2 font-mono font-bold  bg-yellow-50 text-black shadow-xl">
                                    <figure className=" ">
                                        <img src="https://i.ibb.co/DDs8PD2/Screenshot-2024-01-23-at-21-48-22-New-Project-Vercel.png" alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="   ">
                                        <div>
                                            <h2 className="card-title">Home Press Real Estate</h2>
                                            <p className=" ">Use for Code:  Html,css,JavaScript,React, Tailwind css,Daysiui,React-Router,React Icone,React-Slick Github, Vercel </p>
                                        </div>
                                        <div className=" text-center ">
                                            <div className="collapse bg-base-200">
                                                <input type="checkbox" className="peer" />
                                                <div className="collapse-title text-center font-bold bg-primary w-full text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-2xl">
                                                    Show project link
                                                </div>
                                                <div className="collapse-content    bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                                    <a href="https://github.com/ObaydulK/HomePress-Real-Estate" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black">Push Github</a><br />
                                                    <a href=" https://home-press-real-estate-cfcb.vercel.app/  " target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black my-2">Push Live link</a><br />
                                                    {/* <a href="" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black"> Push Sorch file</a> */}
                                                    {/* <a href="http://" ></a> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="px-2">
                                <div className="card p-2 font-mono font-bold  bg-yellow-50 text-black shadow-xl">
                                    <figure className=" ">
                                        <img src="https://i.ibb.co/fSMgmpv/Screenshot-2024-01-23-at-21-52-52-Dashboard.png" alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="   ">
                                        <div>
                                            <h2 className="card-title">Resturent</h2>
                                            <p className=" ">Use for Code: Html,css,JavaScript,React, Tailwind css,Daysiui,React-Router,React Icone,React-Slick Github, Vercel </p>
                                        </div>
                                        <div className=" text-center ">
                                            <div className="collapse bg-base-200">
                                                <input type="checkbox" className="peer" />
                                                <div className="collapse-title text-center font-bold bg-primary w-full text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-2xl">
                                                    Show project link
                                                </div>
                                                <div className="collapse-content    bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                                    <a href="https://github.com/programming-hero-web-course-4/b8a9-event-management-ObaydulK" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black">Push Github</a><br />
                                                    <a href="https://b8a9-event-management-obaydul-k.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black my-2">Push Live link</a><br />
                                                    {/* <a href="" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black"> Push Sorch file</a> */}
                                                    {/* <a href="http://" ></a> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="">
                            <div className="px-2">
                                <div className="card p-2 font-mono font-bold  bg-yellow-50 text-black shadow-xl">
                                    <figure className=" ">
                                        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="   ">
                                        <div>
                                            <h2 className="card-title">Resturent</h2>
                                            <p className=" ">Use for Code: Html,css,JavaScript,react,daysiui,  react-router, </p>
                                        </div>
                                        <div className=" text-center ">
                                            <div className="collapse bg-base-200">
                                                <input type="checkbox" className="peer" />
                                                <div className="collapse-title text-center font-bold bg-primary w-full text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-2xl">
                                                    Show project link
                                                </div>
                                                <div className="collapse-content    bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                                    <a href="https://preview.themeforest.net/item/kufa-personal-portfolio-template/full_screen_preview/25595557?_ga=2.248850053.386497631.1705310892-363274324.1705055523" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black">Push Github</a><br />
                                                    <a href="" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black my-2">Push Live link</a><br />
                                                    <a href="" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black"> Push Sorch file</a>
                                                    <a href="http://" ></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="px-2">
                                <div className="card p-2 font-mono font-bold  bg-yellow-50 text-black shadow-xl">
                                    <figure className=" ">
                                        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="   ">
                                        <div>
                                            <h2 className="card-title">Resturent</h2>
                                            <p className=" ">Use for Code: Html,css,JavaScript,react,daysiui,  react-router, </p>
                                        </div>
                                        <div className=" text-center ">
                                            <div className="collapse bg-base-200">
                                                <input type="checkbox" className="peer" />
                                                <div className="collapse-title text-center font-bold bg-primary w-full text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-2xl">
                                                    Show project link
                                                </div>
                                                <div className="collapse-content    bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                                    <a href="https://preview.themeforest.net/item/kufa-personal-portfolio-template/full_screen_preview/25595557?_ga=2.248850053.386497631.1705310892-363274324.1705055523" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black">Push Github</a><br />
                                                    <a href="" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black my-2">Push Live link</a><br />
                                                    <a href="" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black"> Push Sorch file</a>
                                                    <a href="http://" ></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="px-2">
                                <div className="card p-2 font-mono font-bold  bg-yellow-50 text-black shadow-xl">
                                    <figure className=" ">
                                        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="   ">
                                        <div>
                                            <h2 className="card-title">Resturent</h2>
                                            <p className=" ">Use for Code: Html,css,JavaScript,react,daysiui,  react-router, </p>
                                        </div>
                                        <div className=" text-center ">
                                            <div className="collapse bg-base-200">
                                                <input type="checkbox" className="peer" />
                                                <div className="collapse-title text-center font-bold bg-primary w-full text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-2xl">
                                                    Show project link
                                                </div>
                                                <div className="collapse-content    bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                                    <a href="https://preview.themeforest.net/item/kufa-personal-portfolio-template/full_screen_preview/25595557?_ga=2.248850053.386497631.1705310892-363274324.1705055523" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black">Push Github</a><br />
                                                    <a href="" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black my-2">Push Live link</a><br />
                                                    <a href="" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-black"> Push Sorch file</a>
                                                    <a href="http://" ></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </Slider>
                </div>
            </div>
            {/* My Recent Best Works part end */}
        </div>
    );
};

export default RecentProject;