 
import HireNow from "./HireUs/HireNow";

const Contact = () => {

    return (
        <div>
            <div className=" shadow-2xl " data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <div className=" grid grid-flow-row lg:grid-cols-2 items-center m-auto capitalize  ">
                    <div className="text-center ">
                        <h3 className="   text-emerald-500 font-bold">information</h3>
                        <h1 className="text-3xl font-bold  pb-6 ">Contact Information</h1>
                        {/* <p>Event definition is - somthing that happens occurre How evesnt sentence. <br /> Synonym when an unknown printer took a galley.</p> */}
                        <h1 className="uppercase font-bold">HOme IN : <span className="text-emerald-500 ">Uttara Dhaka</span></h1>
                        <p className="py-2"><span className="">Address  :</span>House#00,Road#9,Uttara sector#4, Dhaka-1230  </p>
                        <p><span className="">Gmail :</span> obaydul00000@gmail.com</p>
                        <p><span className="">Phone :</span> +8801518792691</p>

                    </div>
                    <div className=" p-4    ">
                    
                        <HireNow />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Contact;