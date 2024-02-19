 
const Title = ({subHeading, Heading }) => {
    return (
        <>
          <div className=" text-center py-10 text-black">
           <h1 className=" capitalize lg:text-3xl font-bold text-center  ">-----------{subHeading}------------</h1> 
           <div className=" capitalize lg:text-5xl font-bold  mt-5">{Heading}</div> 
        </div>
        
       
        </>
      
    );
};

export default Title;