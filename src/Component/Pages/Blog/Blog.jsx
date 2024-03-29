import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 

const Blog = () => {

    const [blogs, setBlogs] = useState([]);

    // useEffect(() => {
    //     const getBlog = async () => {
    //         const res = await fetch('blog.json');
    //         setBlogs(await res.json());

    //     }
    //     getBlog();
    // }, [])


    useEffect(() => {
        const getBlog = async () => {
            const res = await fetch('blog.json');
            setBlogs(await res.json());
        }
        getBlog();
    }, [])



    return (
        <>
            <div className="grid grid-flow-row grid-cols-3 gap-3">
                {
                    blogs.map((blog) => {
                        return (
                            <>
                                <div className="card  bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title">{blog.name}</h2>
                                        <p>{blog.email}</p>
                                        <div className="card-actions justify-end">
                                            <Link to="/blog/aboutus" className="btn btn-primary" >Show Now</Link>
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>


        </>
    );
};

export default Blog;

