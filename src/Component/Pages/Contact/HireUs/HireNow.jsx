
import emailjs from "emailjs-com"
import { useRef } from "react";


const HireNow = () => {
    const form = useRef();
    function sendEmail(e) {
        e.preventDefault(0);

        emailjs.sendForm('service_sbg81yn', 'template_jzlg2ld', e.target, '0WVt0tFry1HZnBjXS')
            .then(message =>alert(" Your message send succesfully Thank you for advice")  ) ;
    }


    return (
        <div className="  p-2 rounded-r-2xl rounded-l-3xl shadow-2xl">

            <div className="">
                <h1 className=" text-center text-3xl font-semibold   ">Hire Now</h1>
            </div>
            <form className="flex flex-col gap-4 px-4"ref={form} onSubmit={sendEmail}>

                <div className="flex flex-col gap-1">
                    <label className="text-3xl " htmlFor="">Company Name</label>
                    <input className="outline-none p-3 rounded-lg  text-2xl text-black " type="text" name="name" placeholder="Place Type Your Company Name" />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-3xl " htmlFor="">Company Location</label>
                    <input className="outline-none p-3 rounded-lg  text-2xl text-black " type="text" name="Location" placeholder="Place Type Your Company Location" />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-3xl " htmlFor=""> Contact </label>
                    <input className="outline-none p-3 rounded-lg  text-2xl text-black " type="number" name="phone" placeholder="More Information for a Contact " />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-3xl " htmlFor="">Good People type Message</label>
                    <textarea className="outline-none p-3 rounded-lg  text-2xl text-black " name="message" id="" cols="4" rows="4"
                        placeholder="Place type for me any good advice & task details"
                    ></textarea>
                </div>
                <input type="submit" value="Submit" className="form-control btn btn-primary w-full text-center mt-10" />



            </form>






        </div>
    )
}

export default HireNow