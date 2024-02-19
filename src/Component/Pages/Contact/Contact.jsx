import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div>
            <div className=" py-8   bg-base-100 text-black  ">
                <div className="  items-center m-auto capitalize  ">
                    <div className="text-center  lg:text-left">
                        <h3 className="   text-emerald-500 font-bold">information</h3>
                        <h1 className="text-3xl font-bold  pb-6 ">Contact Information</h1>
                        {/* <p>Event definition is - somthing that happens occurre How evesnt sentence. <br /> Synonym when an unknown printer took a galley.</p> */}
                        <h1 className="uppercase font-bold">HOme IN : <span className="text-emerald-500 ">Uttara Dhaka</span></h1>
                        <p className="py-2"><span className="">Address  :</span>House#00,Road#9,Uttara sector#4, Dhaka-1230  </p>
                        <p><span className="">Gmail :</span> obaydul00000@gmail.com</p>
                        <p><span className="">Phone :</span> +8801518792691</p>

                    </div>
                    <div className="card shrink-0     ">
                        <form className="card-body ">
                            <div className="from-content shadow-2xl bg-base-100">
                                <input type="text" placeholder="Your Name *" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control shadow-2xl bg-base-100">
                                <input type="email" placeholder="Your email *" className="input input-bordered " required />
                            </div>
                            <div>
                                <input type="text" name="text" placeholder="Your Message *" id="" className="w-full h-36 px-5 border-2 rounded-xl" />
                            </div>
                            <div className="form-control mt-6 items-start">
                               <Link to='/blog' className="btn btn-outline font-bold text-white"> Send Massage </Link> 
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;