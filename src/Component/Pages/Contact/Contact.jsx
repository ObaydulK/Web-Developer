
const Contact = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-100 text-white items-center">
                <div className="hero-content flex-cols  ">
                    <div className="text-center flex-1 lg:text-left">
                        <h3 className="  uppercase text-emerald-500 font-bold">information</h3>
                        <h1 className="text-3xl font-bold uppercase pb-6 ">Contact Information</h1>
                        <p>Event definition is - somthing that happens occurre How evesnt sentence. <br /> Synonym when an unknown printer took a galley.</p>
                        <h1 className="uppercase font-bold">OFFICE IN <span className="text-emerald-500">NEW YORK</span></h1>
                        <p className="py-2"><span className="uppercase">Address:</span> Dhaka-1230, Uttara sector#4,Road#9,House#00 </p>
                        <p><span className="uppercase">Phome:</span> +8801518792691</p>

                    </div>
                    <div className="card shrink-0 flex-1 w-full max-w-sm ">
                        <form className="card-body ">
                            <div className="from-content shadow-2xl bg-base-100">
                                <input type="text" placeholder="Your Name *" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control shadow-2xl bg-base-100">
                                <input type="email" placeholder="Your email *" className="input input-bordered " required />
                            </div>
                            <div>
                                <input type="text" name="text" placeholder="Your Message *" id="" className="w-full h-36" />
                            </div>
                            <div className="form-control mt-6 items-start">
                                <button className="btn btn-outline font-bold text-white">Send Massage</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;