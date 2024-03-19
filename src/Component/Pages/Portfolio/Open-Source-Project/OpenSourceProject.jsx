// import Slider from "react-slick";
import Title from "../Title/Titles";
// import RecentprojectTitle from "../Title/RecentprojectTitle";

const OpenSourceProject = () => {
    // var Works = {
    //     // dots: true,
    //     infinite: true,
    //     autoplay: true,
    //     arrows: false,
    //     speed: 2000,
    //     autoplaySpeed: 2000,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     initialSlide: 0,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 // dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 initialSlide: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // };


    return (
        <div>
            {/* My Recent Best Works part start */}
            <div >
                <div className="my-8 rounded-r-2xl rounded-l-3xl shadow-2xl">
                    <Title subHeading="'Open Source Project'" />
                </div>
                
                <div className="text-center">
                   +++++Upcoming soon+++
                </div>
            </div>
            {/* My Recent Best Works part end */}
        </div>
    );
};

export default OpenSourceProject;