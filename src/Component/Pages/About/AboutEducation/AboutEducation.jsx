
const AboutEducation = () => {
    return (
        <div>
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

export default AboutEducation;