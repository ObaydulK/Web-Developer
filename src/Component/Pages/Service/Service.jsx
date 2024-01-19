
import { FaReact  } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

const Service = () => {
    return (
        <div className="bg-base-200">
            <div>
                <div className="p-10 text-white">
                    <div className="text-center py-10">
                        <h1 className="text-emerald-200 uppercase text-3xl"> What We Do</h1>
                        <h1 className="text-emerald-200 uppercase text-5xl font-bold"> Services and solutions</h1>
                    </div>

                    <div className="grid grid-flow-row grid-cols-3">
                        <div className='  flex gap-5 items-center py-10'>
                            <div className='text-3xl text-blue-500'><FaReact /> </div>
                            <div>
                                <h1 className="uppercase font-bold text-3xl" >Unlimited Features</h1>
                                <p className='opacity-40'>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, <br /> omnis. ipsum dolor sit amet consectetur adipisicing elit. Non, assumenda.</p>
                            </div>
                        </div>
                        <div className='  flex gap-5 items-center py-10'>
                            <div className='text-3xl text-blue-500'><BiSupport /> </div>
                            <div>
                                <h1 className="uppercase font-bold text-3xl" >Creative Design</h1>
                                <p className='opacity-40'>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,  <br /> omnis. ipsum dolor sit amet consectetur adipisicing elit. Non, assumenda.</p>
                            </div>
                        </div>
                        <div className='  flex gap-5 items-center py-10'>
                            <div className='text-3xl text-blue-500'><FaReact /> </div>
                            <div>
                                <h1 className="uppercase font-bold text-3xl" >Ultra Responsive</h1>
                                <p className='opacity-40'>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, <br /> omnis. ipsum dolor sit amet consectetur adipisicing elit. Non, assumenda.</p>
                            </div>
                        </div>
                        <div className='  flex gap-5 items-center py-10'>
                            <div className='text-3xl text-blue-500'><FaReact /> </div>
                            <div>
                                <h1 className="uppercase font-bold text-3xl" >Creative Ideas</h1>
                                <p className='opacity-40'>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, <br /> omnis. ipsum dolor sit amet consectetur adipisicing elit. Non, assumenda.</p>
                            </div>
                        </div>
                        <div className='  flex gap-5 items-center py-10'>
                            <div className='text-3xl text-blue-500'><FaReact /> </div>
                            <div>
                                <h1 className="uppercase font-bold text-3xl" >Easy Customization</h1>
                                <p className='opacity-40'>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, <br /> omnis. ipsum dolor sit amet consectetur adipisicing elit. Non, assumenda.</p>
                            </div>
                        </div>
                        <div className='  flex gap-5 items-center py-10'>
                            <div className='text-3xl text-blue-500'><FaReact /> </div>
                            <div>
                                <h1 className="uppercase font-bold text-3xl" >Supper Support</h1>
                                <p className='opacity-40'>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, <br /> omnis. ipsum dolor sit amet consectetur adipisicing elit. Non, assumenda.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;