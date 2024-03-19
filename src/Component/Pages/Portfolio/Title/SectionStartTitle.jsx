
const SectionStartTitle = ({ SubStartTitle, SectionMainTitle }) => {
    return (
        <div className=" text-black text-start py-10">
            <div>
                <h1 className="lg:text-3xl font-semibold   mb-5  ">|| {SubStartTitle} </h1>
            </div>
            <div>
                <h1 className=" lg:text-5xl font-semibold font-serif "  >{SectionMainTitle}</h1>
            </div>
        </div>
    );
};

export default SectionStartTitle;