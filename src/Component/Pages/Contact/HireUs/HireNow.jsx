
import emailjs from "emailjs-com"
import { useRef } from "react";


const HireNow = () => {
    const form = useRef();
    function sendEmail(e) {
        e.preventDefault(0);

        emailjs.sendForm('service_sbg81yn', 'template_jzlg2ld', e.target, '0WVt0tFry1HZnBjXS')
            .then(message => alert(" Your message send succesfully Thank you for advice"));
            e.target.reset();
    }


    return (
        <div className="  p-2 rounded-r-2xl rounded-l-3xl shadow-2xl">

            <div className=" bg-slate-300 ">
                <h1 className=" text-center text-3xl font-semibold py-8  ">Hire Now</h1>
            </div>
            <form className="flex flex-col gap-2 px-4" ref={form} onSubmit={sendEmail}>

                <div className="flex flex-col">
                    <label className="text-2xl " htmlFor="">Company Name</label>
                    <input className="outline-none px-3 py-2 rounded-lg  text-black " type="text" name="name" placeholder="Place Type Your Company Name" />
                </div>
                <div className="flex flex-col">
                    <label className="text-2xl " htmlFor="">Company Location</label>
                    <input className="outline-none px-3 py-2 rounded-lg  text-black " type="text" name="Location" placeholder="Place Type Your Company Location" />
                </div>
                <div className="flex flex-col">
                    <label className="text-2xl " htmlFor=""> Contact </label>
                    <input className="outline-none px-3 py-2 rounded-lg  text-black " type="number" name="phone" placeholder="More Information for a Contact " />
                </div>
                <div className="flex flex-col">
                    <label className="text-2xl " htmlFor=""> Email </label>
                    <input className="outline-none px-3 py-2 rounded-lg  text-black " type="email" name="email" placeholder="More Information for a Email " />
                </div>

                <div className="flex flex-col">
                    <label className="text-2xl " htmlFor=""> Type Message</label>
                    <textarea className="outline-none px-3 py-2 rounded-lg  text-black " name="message" id="" cols="4" rows="4" placeholder="Place type advice & task details" ></textarea>
                </div>
                <input type="submit" value="Submit" className="form-control btn btn-primary w-full text-center mt-2" />
            </form>
        </div>
    )
}

export default HireNow