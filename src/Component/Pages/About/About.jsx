
import AboutEducation from "./AboutEducation/AboutEducation";
import AboutBanner from "./AboutBanner/AboutBanner";
import SpecialSkills from "./SpecialSkills/SpecialSkills";
 const About = () => {
    return (
        <div className=" grid grid-flow-row gap-y-6  pb-8 ">

            <div className=" shadow-2xl  rounded-xl " >
                <AboutBanner />
            </div>

            <div className=" shadow-2xl  rounded-xl " >
                <AboutEducation />
            </div>

            <div className=" shadow-2xl  rounded-xl " >
                <SpecialSkills />
            </div>
 
        </div>
    );
};

export default About;
