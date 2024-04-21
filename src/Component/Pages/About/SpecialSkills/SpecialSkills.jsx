import { Link } from "react-router-dom";
import SectionStartTitle from "../../Portfolio/Title/SectionStartTitle";
import { Progress } from "flowbite-react";



const SpecialSkills = () => {
    return (
        <div className="p-10  ">
            <div className="grid lg:grid-flow-col lg:grid-cols-2 gap-10 items-center px-4">
                <div className="">
                    <SectionStartTitle SubStartTitle="Special Skills" SectionMainTitle="My special Skill Field Here." />
                    {/* <Link className="btn btn-outline text-black hover:bg-black hover:bg-opacity-25 hover:text-white rounded-full" to="/blog" > Get Resume **</Link> */}
                    {/* <Link className="btn btn-outline text-black hover:bg-black hover:bg-opacity-25 hover:text-white rounded-full" to="/https://chat.openai.com/c/3f5aa448-201a-4606-ac93-36bc0cf40f7f" > Get Resume **</Link> */}
                     
                </div>
                <div className="grid grid-flow-row gap-6 text-white">
                    <div className="bg-[#343a40] px-4 py-6 rounded">
                        <div className="text-base font-medium dark:text-white font-serif capitalize py-2" >communication</div>
                        <Progress className="bg-white text-black"  textLabel=" Communication Proficient  " size="xxl" labelProgress labelText />
                    </div>
                    <div className="bg-[#343a40] px-4 py-6 rounded">
                        <div className="flex justify-between">
                            <div className="text-base font-medium dark:text-white font-serif capitalize py-2" >Leadership</div>
                        </div>

                        <Progress className="bg-white text-black" textLabel="Leadership Proficient  " size="xxl" labelProgress labelText />
                    </div>
                    <div className="bg-[#343a40] px-4 py-6 rounded">
                        <div className="text-base font-medium dark:text-white font-serif capitalize py-2" >Teamwork</div>
                        <Progress className="bg-white text-black"  textLabel="Teamwork Mastery   " size="xxl" labelProgress labelText />
                    </div>
                    <div className="bg-[#343a40] px-4 py-6 rounded">
                        <div className="text-base font-medium dark:text-white font-serif capitalize py-2" >Flexibility</div>
                        <Progress className="bg-white text-black"    textLabel="Flexibility Intermediate  " size="xxl" labelProgress labelText />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SpecialSkills;