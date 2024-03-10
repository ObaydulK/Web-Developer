
const AboutEducation = () => {
    return (
        <div>
            {/* About us part start */}
            <div className="bg-base-100 py-5 ">
                <div className="text-center">
                    <h1 className="text-3xl text-emerald-500 font-bold">Introduction</h1>
                    <h1 className="text-5xl py-5 font-bold">About Me</h1>
                    <p className=" px-3 text-justify ">Hello, I'm Obaydul_Kuasha, a Computer Science Engineering (BSE) student currently in the program. My academic journey involves delving into algorithms, data structures, and various programming languages. I'm passionate about software engineering, engaging in hands-on projects that enhance my problem-solving abilities. As a part of my curriculum, I'm immersed in diverse subjects like machine learning  and databases . This comprehensive education equips me with the skills needed to navigate the ever-evolving field of computer science. I am dedicated to staying current with industry trends, ensuring that I contribute effectively to the advancements in technology and innovation.</p>
                </div>

                <div className="grid grid-flow-row lg:grid-cols-2 sm:grid p-4 " style={{ justifyItems: 'center' }} >
                    <div className=" " >
                        <img src="https://themebeyond.com/html/kufa/img/banner/banner_img2.png" className="max-w-sm  " data-aos="fade-right" data-aos-duration="500" />
                    </div>
                    <div className="capitalize   ">
                        <h1 className="text-5xl font-bold">Education</h1>
                        <div >
                            <div className=" flex flex-row gap-5 items-center    py-5" data-aos="zoom-out-right" data-aos-duration="2000">
                                {/* <h1 className="text-emerald-400 text-2xl font-bold">2023 to 2027</h1> */}
                                <p>------</p>
                                <div className="font-bold">
                                    <p className="text-2xl">BSc in computer Science and Engineering</p>
                                    <p className=""> World University Of Bangaldesh, Uttara </p>
                                    {/* <p className="text-2xl">0.00 Out of 4</p> */}
                                    <progress className="progress w-full" value="40" max="100"></progress>
                                </div>
                            </div>
                            <div className=" flex flex-row gap-5 items-center   py-5" data-aos="zoom-out-left" data-aos-duration="2000">
                                {/* <h1 className="text-emerald-400 text-2xl font-bold">2018 to 2022</h1> */}
                                <p>------</p>
                                <div className="font-bold">
                                    <p className="text-2xl">Diploma in computer Science</p>
                                    <p>Shariatpur polytechnic institute, Shariatpur</p>
                                    {/* <p className="text-2xl"> 3.50 out of 4</p> */}
                                    <progress className="progress w-full" value="100" max="100"></progress>
                                </div>
                            </div>
                            <div className=" flex flex-row gap-5 items-center   py-5" data-aos="zoom-out-right" data-aos-duration="2000">
                                {/* <h1 className="text-emerald-400 text-2xl font-bold">2016 to 2018</h1> */}
                                <p>------</p>
                                <div className="font-bold">
                                    <p className="text-2xl">SSC in Electrical Engineering</p>
                                    <p>Idipur Pilot High School, Goshairhat</p>
                                    {/* <p className="text-2xl">4.86 out of 5</p> */}
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