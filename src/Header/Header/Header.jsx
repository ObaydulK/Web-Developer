
import { Link } from 'react-router-dom';

const Header = () => {
    const Navber =
        <>
            <li> <Link to="/home">Home</Link> </li>
            <li> <Link to="/About">About</Link> </li>
            <li> <Link to="/service">Service</Link> </li>
            <li> <Link to="/portfolio">Portfolio</Link> </li>
            <li> <Link to="/blog">Blog</Link> </li>
            <li> <Link to="/contact">Contact</Link> </li>
        </>
    return (
        <div>
            <div className="navbar text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Navber}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Navber}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Header;