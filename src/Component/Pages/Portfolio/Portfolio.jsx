import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

















const Portfolio = () => {

    var settings = {
        // dots: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
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
        <div className="bg-base-100" >
            <div className="font-serif text-3xl font-bold text-center py-7 border rounded-r-2xl rounded-l-3xl shadow-2xl text-white">
                <h1 className="text-emerald-200   text-3xl"> Portfolio showcase</h1>
                <div className="  ">I Fell in Love With Web Development</div>

            </div>

            {/* love with web development start   */}
            <div className=" text-emerald-200   text-5xl font-bold font-mono text-center py-10 underline" > The journey of web development</div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                        <h1 className="font-mono italic font-bold ">2019</h1>
                        <div className="text-lg font-bold italic text-white ">Shariatpur Polytechnic institute</div>
                        <p>ইঞ্জিনিয়ারিং এর দ্বিতীয় সেমিস্টারে প্রথম বার জানতে পারলাম , যে Html,Css নামে এক ধরনের ল্যাঙ্গুয়েজ আছে । এই ল্যাঙ্গুয়েজ দিয়ে ধরনের ওয়েবসাইট বানানো যায় । তারপর থেকে আমার ভেতর কেমন যেন একটি কিউরিসিটি শুরু হল । যে আমি একদিন এই ডেভলপার হব ।  এই জন্য আমি ওই দিন থেকে কলেজে ক্লাস শুরু করি । কিন্তু কলেজে যেহেতু এই বিষয়ে অনেক বেশি অভিজ্ঞতা সম্পূর্ণ শিক্ষক না থাকায় ।আমি ঠিকভাবে শিখতে পারিনি তাই যতটুকু শিখছি একটু একটু করে বিভিন্ন ধরনের ইউটিউব ভিডিও থেকে.</p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-10">
                        <h1 className="font-mono italic font-bold ">2021</h1>
                        <div className="text-lg font-bold italic text-white ">It-Bari</div>
                        <p>কিছুদিন পর ৬ সেমিস্টারে থাকা  সময় । আমি একটা কোর্স পাই It-Bari ওই কোর্সটা প্রায় পার্ট ছিল চারটি । আমি তিনটা পার্ট কমপ্লিট করলাম । যা থেকে মোটামুটি একটু শিখছি ।তাতে শেখার আগ্রহ আরো বেড়ে গেল । কিন্তু কোর্স  ছিল অনেক আগের তার জন্য বেশি কিছু একটা শিখতে পারিনি । তাও মোটামুটি  যতটুকু শিখছি কিছু সিঙ্গেল সাইড ডিজাইন করছি ।</p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                        <h1 className="font-mono italic font-bold ">2022</h1>
                        <div className="text-lg font-bold italic text-white ">Creative it</div>
                        <p>এরপরে ডিপ্লোমাতে অষ্টম সেমিস্টারে ইন্টারনি  জন্য বিভিন্ন ইন্ডাস্ট্রিতে পাঠানো হয় । তখনো আমি এই ওয়েব ডেভেলপমেন্ট বেছে নিয়েছি ইন্টারনি করার জন্য । ওয়েব ডিজাইনিং ইন্টারনি  হিসেবে আমি ক্রিয়েটিভ আইটি বেছে নিয়েছিলাম । কিন্তু দুর্ভাগ্য আমার এখান থেকেও আমি ভালোভাবে শিখতে পারিনি । তবে মোটামুটি  শিখেছি তবে নতুন কিছু শিখেছি । কিন্তু এই  ওয়েব ডেভেলপমেন্টের চিন্তা আমার মাথা থেকে কখনোই যায় না.</p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end  mb-10">
                        <h1 className="font-mono italic font-bold ">2022</h1>
                        <div className="text-lg font-bold italic text-white ">Programing hero</div>
                        <p> তারপর আমি অন্য একটা চাকরি ধরি । এবং চাকুরীর পাশাপাশি প্রোগ্রামিং হিরোর একটি ওয়েব ডেভেলপমেন্ট কোর্স এনরোলমেন্ট করি । সেখান থেকে দীর্ঘ ছয় মাস অনেক কিছু শিখেছি যেমন Html5 || CCS3 || JavaScript || Es6 || React.js || Tailwind Css || Bootstarp || Flowbite || Mamba UI || Daisy UI || Preline || Jqury || Next.js || Mongodb || Firebase || GitHub || Figma || PSD || শিখে কোর্স কমপ্লিট করে । কিন্তু আমার মনে হচ্ছিল যে আমার আরো অনেক কিছু শেখার দরকার । তাই আমি এখনো এই কোর্সের সাথে নতুন কিছু শেখার চেষ্টা করতেছি । কিন্তু অন্য একটা চাকরির পাশাপাশি এইটা চালাতে কষ্ট হয় । তাও প্রায় দৈনিক পাঁচ থেকে সাত ঘন্টা কোডিং করার চেষ্টা করি ।
                        </p>
                    </div>
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                        <h1 className="font-mono italic font-bold ">2023</h1>
                        <div className="text-lg font-bold italic text-white ">skytech</div>
                        <p>এখন ভেবেছি যে একটা ডেভেলপমেন্ট কোম্পানিতে জব নিয়ে ফুল টাইম কোর্ডিংয়ের পেছনে ব্যয় করব । তাইলে আমি আরো অনেক ভালো কিছু করতে পারবো । কারণ আমি জানি যে আমার ভেতরে কোর্ডিং প্রতি কতটা ভালোবাসা আছে ।</p>
                    </div>
                </li>
            </ul>
            {/* love with web development part   */}




            {/* Comfortable for web base Language part start */}
            <div className="py-10 bg-base-200 shadow-lg">
                <div className="text-center py-10">
                    <h1 className=" text-emerald-200 uppercase lg:text-5xl sm:text-3xl font-bold font-mono text-center py-10 underline  ">  Comfortable for This Language</h1>
                </div>
                <Slider {...settings}>
                    <div>
                        <h3><a href="http://" target="_blank" rel="noopener noreferrer" className="  text-9xl"><img src="https://i.ibb.co/FJTwMxn/html.png" alt="Language image" /></a></h3>
                    </div>
                    <div>
                        <h3> <a href="http://" target="_blank" rel="noopener noreferrer" className="  text-9xl"><img src="https://i.ibb.co/SwsSkxP/css.png" alt="Language image" /></a></h3>
                    </div>
                    <div>
                        <h3>  <a href="http://" target="_blank" rel="noopener noreferrer" className="  text-9xl"><img src="https://i.ibb.co/Fq4G6py/javascript.png" alt="Language image" /></a></h3>
                    </div>
                    <div>
                        <h3>  <a href="http://" target="_blank" rel="noopener noreferrer" className="  text-9xl"><img src="https://i.ibb.co/Qm9bM7s/react.png" alt="Language image" /></a></h3>
                    </div>
                    <div>
                        <h3><a href="http://" target="_blank" rel="noopener noreferrer" className="  text-9xl"><img src="https://i.ibb.co/Qm9bM7s/react.png" alt="Language image" /></a></h3>
                    </div>
                    <div>
                        <h3> <a href="http://" target="_blank" rel="noopener noreferrer" className="  text-9xl"><img src="https://i.ibb.co/0K3wYwN/bootstrap.png" alt="Language image" /></a></h3>
                    </div>
                    <div>
                        <h3><a href="http://" target="_blank" rel="noopener noreferrer" className="  text-9xl"><img src="https://i.ibb.co/YRstSw4/7577995.webp" alt="Language image" /></a></h3>
                    </div>
                    <div>
                        <h3> <a href="http://" target="_blank" rel="noopener noreferrer" className="  text-9xl"><img src="https://i.ibb.co/xmfqcGX/Untitled.jpg" alt="Language image" /></a></h3>
                    </div>
                    <div>
                        <h3><a href="http://" target="_blank" rel="noopener noreferrer" className="  text-9xl"><img src="https://i.ibb.co/kM4qtfW/images.jpg" alt="Language image" /></a></h3>
                    </div>
                    <div>
                        <h3><a href="http://" target="_blank" rel="noopener noreferrer" className="  text-9xl"><img src="https://i.ibb.co/HN2Mtsm/Untitled.png" alt="Language image" /></a></h3>
                    </div>
                    <div>
                        <h3> <a href="http://" target="_blank" rel="noopener noreferrer" className="  text-9xl"><img src="https://i.ibb.co/2Pvt2xn/Untitlesdczxd.png" alt="Language image" /></a></h3>
                    </div>
                    <div>
                        <h3> <a href="http://" target="_blank" rel="noopener noreferrer" className="  text-9xl" ><img src="https://i.ibb.co/Kq2hs9N/fghj.jpg" alt="Language image" /></a></h3>
                    </div>
                    {/* <div>
                        <h3>8</h3>
                    </div>
                    <div>
                        <h3>8</h3>
                    </div> */}
                </Slider>
            </div>

            {/* Comfortable for web base Language part end */}





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
                                        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="   ">
                                        <div>
                                            <h2 className="card-title">Resturent</h2>
                                            <p className=" ">Use for Code: Html,css,JavaScript,react,daysiui,react-router, </p>
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

                    </Slider>
                </div>
            </div>
            {/* My Recent Best Works part end */}



            {/* My Works Active nes part start */}
            <div className="stats shadow w-full md:   py-10 text-center">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Likes</div>
                    <div className="stat-value text-primary">25.6K</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Page Views</div>
                    <div className="stat-value text-secondary">2.6M</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Page Views</div>
                    <div className="stat-value text-secondary">2.6M</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">86%</div>
                    <div className="stat-title">Tasks done</div>
                    <div className="stat-desc text-secondary">31 tasks remaining</div>
                </div>

            </div>
            {/* My Works Active nes part end */}




        </div >


    );
};

export default Portfolio;