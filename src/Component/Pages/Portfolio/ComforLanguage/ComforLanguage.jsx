import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




var settings = {
    // dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0, 
    rows: 2,
    
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};





const ComforLanguage = () => {
    return (
        <div>
            {/* Comfortable for web base Language part start */}
            <div className="py-10 bg-base-200 shadow-lg">
                <div className="text-center py-10">
                    <h1 className=" text-emerald-200 uppercase lg:text-5xl sm:text-3xl font-bold font-mono text-center py-10 underline  ">  Comfortable for This Language</h1>
                </div>
                <Slider {...settings}>
                    <div className=" p-2 ">
                        <div className="bg-emerald-400 rounded-2xl  w-3/4">
                            <h3><a href="http://" target="_blank" rel="noopener noreferrer" className="  "><img src="https://i.ibb.co/FJTwMxn/html.png" alt="Language image" /></a></h3>
                        </div>
                    </div>
                    <div className=" p-2 ">
                        <div className="bg-emerald-400 rounded-2xl  w-3/4">
                            <h3> <a href="http://" target="_blank" rel="noopener noreferrer" className="  "><img src="https://i.ibb.co/SwsSkxP/css.png" alt="Language image" /></a></h3>
                        </div>
                    </div>
                    <div className=" p-2 ">
                        <div className="bg-emerald-400 rounded-2xl  w-3/4">
                            <h3>  <a href="http://" target="_blank" rel="noopener noreferrer" className="  "><img src="https://i.ibb.co/Fq4G6py/javascript.png" alt="Language image" /></a></h3>
                        </div>
                    </div>
                    <div className=" p-2 ">
                        <div className="bg-emerald-400 rounded-2xl  w-3/4">
                            <h3>  <a href="http://" target="_blank" rel="noopener noreferrer" className="  "><img src="https://i.ibb.co/Qm9bM7s/react.png" alt="Language image" /></a></h3>
                        </div>
                    </div>
                    <div className=" p-2 ">
                        <div className="bg-emerald-400 rounded-2xl  w-3/4">
                            <h3><a href="http://" target="_blank" rel="noopener noreferrer" className="  "><img src="https://i.ibb.co/KrVX2KL/nodejs.png" alt="Language image" /></a></h3>
                        </div>
                    </div>
                    <div className=" p-2 ">
                        <div className="bg-emerald-400 rounded-2xl p-3  w-3/4">
                            <h3> <a href="http://" target="_blank" rel="noopener noreferrer" className="  "><img src="https://i.ibb.co/0K3wYwN/bootstrap.png" alt="Language image" /></a></h3>
                        </div>
                    </div>
                    <div className=" p-2 ">
                        <div className="bg-emerald-400 rounded-2xl  w-3/4">
                            <h3><a href="http://" target="_blank" rel="noopener noreferrer" className="  "><img src="https://i.ibb.co/YRstSw4/7577995.webp" alt="Language image" /></a></h3>
                        </div>
                    </div>
                    <div className=" p-2 ">
                        <div className="bg-emerald-400 rounded-2xl w-3/4">
                            <h3><a href="http://" target="_blank" rel="noopener noreferrer" className="  "><img src="https://i.ibb.co/HXcXyRC/mongo-db.png" alt="Language image" /></a></h3>
                        </div>
                    </div>
                    <div className=" p-2 ">
                        <div className="bg-emerald-400 rounded-2xl w-3/4">
                            <h3><a href="http://" target="_blank" rel="noopener noreferrer" className="  "><img src="https://i.ibb.co/zm42z6N/git.png" alt="Language image" /></a></h3>
                        </div>
                    </div>
                    <div className=" p-2 ">
                        <div className="bg-emerald-400 rounded-2xl w-3/4">
                            <h3><a href="http://" target="_blank" rel="noopener noreferrer" className="  "><img src="https://i.ibb.co/zrJn7kp/figma.png" alt="Language image" /></a></h3>
                        </div>
                    </div>
                    <div className="  p-2  ">
                        <div className="bg-emerald-400 rounded-2xl p-3 w-3/4">
                            <h3> <a href="http://" target="_blank" rel="noopener noreferrer" className="   "><img className="rounded-lg drop-shadow-2xl" src="https://i.ibb.co/chcrjNC/firebage-removebg-preview.png" alt="Language image" /></a></h3>
                        </div>
                    </div>
                    <div className=" p-2 ">
                        <div className="bg-emerald-400 rounded-2xl w-3/4">
                            <h3> <a href="http://" target="_blank" rel="noopener noreferrer" className="  " ><img src="https://i.ibb.co/dD0sTFs/visual-studio-code.png" alt="Language image" /></a></h3>
                        </div>
                    </div>
                    {/* <div>
                        <h3>8</h3>
                    </div>
                    





                    <div>
                        <h3>8</h3>
                    </div> */}
                </Slider>
            </div>
            {/* Comfortable for web base Language part end */}
        </div>
    );
};

export default ComforLanguage;