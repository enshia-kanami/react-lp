import React from "react";
import { Link } from "react-router-dom";
import Search from "../Home/Search";

function Header() {
    return (
        // <header className="relative w-full bg-white drop-shadow-md ...">
        //     <div className="flex justify-between items-center pt-0 pb-0">
        //         <a href="#" className="font-normal text-xl pl-4">Hoge</a>
        //         <Nav/>
        //     </div>
        // </header>
        <header className="top-0 fixed z-50 w-full bg-white drop-shadow-md ...">
            <div className="sm:flex justify-between items-center pt-0 pb-0">
                <Link to="/" className="font-normal text-xl pl-8 hidden sm:block">Hoge</Link>
                    <nav className="bg-white">
                        {/* <ul className="sm:flex sm:justify-center block"> */}
                        <ul className="flex justify-center">
                            <li className="relative group hover:bg-sky-100">
                                <Link to="/" className="block py-6 px-4">Home</Link>
                                <ul className="absolute invisible group-hover:visible bg-sky-50">
                                    <li className="px-3 py-3 z-40"><Link to="">Home1</Link></li>
                                    <li className="px-3 py-3"><Link to="">Home2</Link></li>
                                    <li className="px-3 py-3"><Link to="">Home3</Link></li>
                                </ul>
                            </li>
                            <li className="relative group hover:bg-sky-100">
                                <Link to="/CompanyInfoDetail" className="block py-6 px-4">Company Info</Link>
                                <ul className="absolute invisible group-hover:visible bg-sky-50">
                                    <li className="px-3 py-3"><Link to="">Company1</Link></li>
                                    <li className="px-3 py-3"><Link to="">Company2</Link></li>
                                    <li className="px-3 py-3"><Link to="">Company3</Link></li>
                                </ul>
                            </li>
                            <li className="relative group hover:bg-sky-100">
                                <Link to="/serviseDetail" className="block py-6 px-4">Servise</Link>
                                <ul className="absolute invisible group-hover:visible bg-sky-50">
                                    <li className="px-3 py-3"><Link to="">Servise1</Link></li>
                                    <li className="px-3 py-3"><Link to="">Servise2</Link></li>
                                    <li className="px-3 py-3"><Link to="">Servise3</Link></li>
                                </ul>
                            </li>
                            <li className="relative group hover:bg-sky-100">
                                <Link to="/newsDetail" className="block py-6 px-4">News</Link>
                                <ul className="absolute invisible group-hover:visible bg-sky-50"> 
                                    <li className="px-3 py-3"><Link to="">News1</Link></li>
                                    <li className="px-3 py-3"><Link to="">News2</Link></li>
                                    <li className="px-3 py-3"><Link to="">News3</Link></li>
                                </ul>
                            </li>
                            <li className="relative py-6">
                                <Search/>
                            </li>
                        </ul>
                    </nav>
                    {/* <Hamburger/> */}
            </div>
        </header>
    )
}

export default Header;