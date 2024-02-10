 
const Title = ({subHeading, Heading}) => {
    return (
        <div className=" text-center py-10">
           <h1 className=" capitalize lg:text-3xl sm:text-2xl font-bold text-center  ">-----------{subHeading}------------</h1> 
           <div className="text-emerald-200 capitalize lg:text-5xl sm:text-3xl font-bold underline mt-5">{Heading}</div> 
        </div>
    );
};

export default Title;