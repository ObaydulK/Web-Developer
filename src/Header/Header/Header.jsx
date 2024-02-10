
import { Link } from 'react-router-dom';

const Header = () => {
    const Navber =
        <>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/About">About</Link> </li>
            <li> <Link to="/portfolio">Portfolio</Link> </li>
            <li> <Link to="/service">Service</Link> </li>
            <li> <Link to="/blog">Blog</Link> </li>
            <li> <Link to="/contact">Contact</Link> </li>
        </>
    return (
        <div>
            <div className="navbar text-black bg-slate-200    ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm text-white  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box text-bold text-2xl ">
                            {Navber}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"> <span className='font-serif text-emerald-700 text-3xl italic'>T</span>ay<span className='font-serif text-emerald-700 text-3xl italic'>F</span>ur</a>
                </div>
                <div className="navbar-end hidden   lg:flex"  >
                    <ul className="menu menu-horizontal px-1   text-bold text-2xl">
                        {Navber}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;