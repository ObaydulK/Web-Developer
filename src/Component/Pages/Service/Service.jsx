
import { FaReact } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import Title from "../Portfolio/Title/Titles";

const Service = () => {
    return (
        <div className=" text-black">
            <div>
                <div className="p-10 ">
                    <div  >
                        <Title subHeading=" 'What we Do' " Heading="Services and solutions" />
                    </div>

                    <div className="lg:grid grid-flow-row grid-cols-3 gap-10 bg-white bg-opacity-50 rounded-2xl p-5  ">
                        <div className='bg-white bg-opacity-50 rounded-2xl shadow-2xl p-5 grid lg:grid-flow-col lg:gap-5 text-black  lg:items-center text-center py-10'>
                            <div className='text-5xl text-blue-500 '><FaReact /> </div>
                            <div>
                                <h1 className=" font-bold text-3xl" >Unlimited Features</h1>
                                <p className='text-justify '>Front-end development offers unlimited possibilities with its rich set of features, enabling dynamic and responsive user interfaces. Harnessing technologies like HTML5, CSS3, and JavaScript, developers can create visually stunning and interactive websites. From seamless animations to intuitive user experiences, front-end development empowers creativity, accessibility, and functionality.</p>
                            </div>
                        </div>
                        <div className='bg-white bg-opacity-50 rounded-2xl shadow-2xl p-5 grid lg:grid-flow-col lg:gap-5 text-black  lg:items-center text-center py-10'>
                            <div className='text-5xl  stroke-2 text-blue-500'> <FaReact /></div>
                            <div>
                                <h1 className=" font-bold text-3xl" >Creative Design</h1>
                                <p className='text-justify'>Creative website design captivates audiences with innovative layouts, vibrant color schemes, and unique typography. Striking visuals, intuitive navigation, and engaging multimedia elements create a memorable user experience. Thoughtful use of whitespace, dynamic animations, and responsive design further elevate the site, leaving a lasting impression on visitors.</p>
                            </div>
                        </div>
                        <div className='bg-white bg-opacity-50 rounded-2xl shadow-2xl p-5 grid lg:grid-flow-col lg:gap-5 text-black  lg:items-center text-center py-10'>
                            <div className='text-5xl text-blue-500'><FaReact /> </div>
                            <div>
                                <h1 className=" font-bold text-3xl" > Responsive</h1>
                                <p className='text-justify'>Responsive design ensures optimal user experience across devices by adapting layouts and content seamlessly. Fluid grids, flexible images, and media queries enable websites to adjust to various screen sizes, enhancing accessibility. This approach guarantees a consistent and efficient interface, catering to the diverse landscape of desktops, tablets, and smartphones.</p>
                            </div>
                        </div>
                        <div className='bg-white bg-opacity-50 rounded-2xl shadow-2xl p-5 grid lg:grid-flow-col lg:gap-5 text-black  lg:items-center text-center py-10'>
                            <div className='text-5xl text-blue-500'><FaReact /> </div>
                            <div>
                                <h1 className=" font-bold text-3xl" >Creative Ideas</h1>
                                <p className='text-justify'>Explore unconventional materials in product design, merging sustainability and innovation. Infuse data visualization with artistry, transforming complex information into visually compelling narratives. Combine tactile and digital elements in interactive print media. Design inclusive spaces by incorporating diverse cultural motifs. Foster community through collaborative digital art installations, transcending traditional boundaries with boundary-pushing creativity.</p>
                            </div>
                        </div>
                        <div className='bg-white bg-opacity-50 rounded-2xl shadow-2xl p-5 grid lg:grid-flow-col lg:gap-5 text-black  lg:items-center text-center py-10'>
                            <div className='text-5xl text-blue-500'><FaReact /> </div>
                            <div>
                                <h1 className=" font-bold text-3xl" >Easy Customization</h1>
                                <p className='text-justify'>Experience effortless customization with user-friendly interfaces, drag-and-drop functionalities, and intuitive settings. Simplify personalization through modular design, allowing users to tailor layouts, colors, and content without coding. Enhance user autonomy with flexible templates and easily adaptable features, ensuring a seamless and hassle-free customization process for a personalized and unique user experience.</p>
                            </div>
                        </div>
                        <div className='bg-white bg-opacity-50 rounded-2xl shadow-2xl p-5 grid lg:grid-flow-col lg:gap-5 text-black  lg:items-center text-center py-10'>
                            <div className='text-5xl text-blue-500'> <BiSupport /></div>
                            <div>
                                <h1 className=" font-bold text-3xl" >Supper Support</h1>
                                <p className='text-justify'>Elevate your React development with outstanding support - round-the-clock assistance, expert guidance, and rapid issue resolution. Access a wealth of resources, from detailed documentation to community forums. Our committed team ensures you receive superlative assistance, empowering you to build exceptional and robust React applications with confidence and efficiency.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;