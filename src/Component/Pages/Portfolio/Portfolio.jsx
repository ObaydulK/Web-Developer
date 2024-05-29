
import DevelopCarry from "./DevelopCarry/DevelopCarry";
import ComforLanguage from "./ComforLanguage/ComforLanguage";
import RecentProject from "./RecentProject/RecentProject"
import Title from "./Title/Titles";
import OpenSourceProject from "./Open-Source-Project/OpenSourceProject";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProgressCountReport from "./ProgressCounterReport/ProgressCountReport";
import PhotoGallary from "./PhotoGallary/PhotoGallary";


const Portfolio = () => {
    return (
        <div className="   " >

            <div className="my-8 rounded-r-2xl rounded-l-3xl shadow-2xl">
                <Title subHeading="Portfolio showcase" Heading="I Fell in Love With Front End Developer (React)" />
            </div>

            <div className="shadow-2xl mb-6 border-4 border-white rounded-tl-3xl rounded-br-3xl">
                <DevelopCarry />
            </div>

            <div className="shadow-2xl mb-6 border-4 border-white rounded-tl-3xl rounded-br-3xl">
                <ComforLanguage />
            </div>

            <div className="shadow-2xl mb-6 border-4 border-white rounded-tl-3xl rounded-br-3xl">
                <PhotoGallary />
            </div>

            {/* <div className="shadow-2xl mb-6 border-4 border-white rounded-tl-3xl rounded-br-3xl">
                <RecentProject />
            </div> */}

            <div className="shadow-2xl mb-6 border-4 border-white rounded-tl-3xl rounded-br-3xl">
                <OpenSourceProject />
            </div>

            <div className="shadow-2xl mb-6 border-4 border-white rounded-tl-3xl rounded-br-3xl">
                <ProgressCountReport />
            </div>
        </div >
    );
};
// 3d?
export default Portfolio;



