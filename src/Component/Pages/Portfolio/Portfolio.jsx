
import DevelopCarry from "./DevelopCarry/DevelopCarry";
import ComforLanguage from "./ComforLanguage/ComforLanguage";
import RecentProject from "./RecentProject/RecentProject";
import CodeReviwe from "./CodeReviwe/CodeReviwe";

const Portfolio = () => {


    return (
        <div className="bg-base-100" >
            <div className="font-serif text-3xl font-bold text-center py-7 border rounded-r-2xl rounded-l-3xl shadow-2xl text-white">
                <h1 className="text-emerald-200   text-3xl"> Portfolio showcase</h1>
                <div className="  ">I Fell in Love With Back End Developer</div>

            </div>
            <ComforLanguage />
            <DevelopCarry />
            
            <RecentProject />
            <CodeReviwe />
        </div >
    );
};

export default Portfolio;



