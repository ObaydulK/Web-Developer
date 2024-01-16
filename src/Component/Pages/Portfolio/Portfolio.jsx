
const Portfolio = () => {
    return (
        <div className="bg-base-100">
            <div>
                <div className="text-center py-10">
                    <h1 className="text-emerald-200 uppercase text-3xl"> Portfolio showcase</h1>
                    <h1 className="text-emerald-200 uppercase text-5xl font-bold"> My Recent Best Works</h1>
                </div>
            </div>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body hover:text-4xl overflow-y-auto ">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>


 

        </div>
    );
};

export default Portfolio;