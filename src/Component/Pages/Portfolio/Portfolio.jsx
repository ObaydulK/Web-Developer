
import DevelopCarry from "./DevelopCarry/DevelopCarry";
import ComforLanguage from "./ComforLanguage/ComforLanguage";
import RecentProject from "./RecentProject/RecentProject";
import CodeReviwe from "./CodeReviwe/CodeReviwe";
import Title from "./Title/Titles";

const Portfolio = () => {


    return (
        <div className="  " >

            <div className="text-3xl font-bold text-center py-7 border rounded-r-2xl rounded-l-3xl shadow-2xl ">
                <Title subHeading="Portfolio showcase" Heading="I Fell in Love With Front End Developer (React)" />
            </div>
            <ComforLanguage />
            <DevelopCarry />
            <RecentProject />
            <CodeReviwe />
        </div >
    );
};
// 3d?
export default Portfolio;



