
import DevelopCarry from "./DevelopCarry/DevelopCarry";
import ComforLanguage from "./ComforLanguage/ComforLanguage";
import RecentProject from "./RecentProject/RecentProject";
// import CodeReviwe from "./CodeReviwe/CodeReviwe";
import Title from "./Title/Titles";
import OpenSourceProject from "./Open-Source-Project/OpenSourceProject";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProgressCountReport from "./ProgressCounterReport/ProgressCountReport";


const Portfolio = () => {


    return (
        <div className="  " >

            <div className="py-7 rounded-r-2xl rounded-l-3xl shadow-2xl bg-black bg-opacity-30 ">
                <Title subHeading="Portfolio showcase" Heading="I Fell in Love With Front End Developer (React)" />
            </div>
            <ComforLanguage />
            <DevelopCarry />
            <OpenSourceProject/>
            <RecentProject />
            {/* <CodeReviwe /> */}
            <ProgressCountReport/>
        </div >
    );
};
// 3d?
export default Portfolio;



