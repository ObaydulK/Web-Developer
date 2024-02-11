
import { FaReact  } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import Title from "../Portfolio/Title/Titles";

const Service = () => {
    return (
        <div className=" text-black">
            <div>
                <div className="p-10 ">
                    <div  >
                        <Title subHeading=" 'What we Do' " Heading="Services and solutions"/>
                    </div>

                    <div className="lg:grid grid-flow-row grid-cols-3 gap-10 ">
                        <div className='bg-white bg-opacity-50 rounded-2xl shadow-2xl p-5 grid grid-flow-col gap-5 text-white  items-center py-10'>
                            <div className='text-3xl text-blue-500'><FaReact /> </div>
                            <div>
                                <h1 className="uppercase font-bold text-3xl" >Unlimited Features</h1>
                                <p className=' '>Any work that will be done from me. They will be done very nicely. And multiple options will be kept while doing these tasks. So that if you don't like a thumbnail you can use another one just in that case you click on that thumbnail then automatically new Dhamrail will be connected.</p>
                            </div>
                        </div>
                        <div className='bg-white bg-opacity-50 rounded-2xl shadow-2xl p-5 grid grid-flow-col gap-5 text-white  items-center py-10'>
                            <div className='text-3xl text-blue-500'><BiSupport /> </div>
                            <div>
                                <h1 className=" font-bold text-3xl" >Creative Design</h1>
                                <p className=''>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,  omnis. ipsum dolor sit amet consectetur adipisicing elit. Non, assumenda.</p>
                            </div>
                        </div>
                        <div className='bg-white bg-opacity-50 rounded-2xl shadow-2xl p-5 grid grid-flow-col gap-5 text-white  items-center py-10'>
                            <div className='text-3xl text-blue-500'><FaReact /> </div>
                            <div>
                                <h1 className=" font-bold text-3xl" > Responsive</h1>
                                <p className=''>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,  omnis. ipsum dolor sit amet consectetur adipisicing elit. Non, assumenda.</p>
                            </div>
                        </div>
                        <div className='bg-white bg-opacity-50 rounded-2xl shadow-2xl p-5 grid grid-flow-col gap-5 text-white  items-center py-10'>
                            <div className='text-3xl text-blue-500'><FaReact /> </div>
                            <div>
                                <h1 className=" font-bold text-3xl" >Creative Ideas</h1>
                                <p className=''>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,  omnis. ipsum dolor sit amet consectetur adipisicing elit. Non, assumenda.</p>
                            </div>
                        </div>
                        <div className='bg-white bg-opacity-50 rounded-2xl shadow-2xl p-5 grid grid-flow-col gap-5 text-white  items-center py-10'>
                            <div className='text-3xl text-blue-500'><FaReact /> </div>
                            <div>
                                <h1 className=" font-bold text-3xl" >Easy Customization</h1>
                                <p className=''>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,  omnis. ipsum dolor sit amet consectetur adipisicing elit. Non, assumenda.</p>
                            </div>
                        </div>
                        <div className='bg-white bg-opacity-50 rounded-2xl shadow-2xl p-5 grid grid-flow-col gap-5 text-white  items-center py-10'>
                            <div className='text-3xl text-blue-500'><FaReact /> </div>
                            <div>
                                <h1 className=" font-bold text-3xl" >Supper Support</h1>
                                <p className=''>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,  omnis. ipsum dolor sit amet consectetur adipisicing elit. Non, assumenda.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;