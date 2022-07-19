import React  from "react"
import { Link } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";
import SimpleSlider from "../Main/SimpleSlider";
import Search from "./Search";
import News from "../News/News" ;
import Service from "../Service/Service";
import CompanyInfo from "../Company/CompanyInfo";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

function Home() {
    return (
        <div className="text-base bg-slate-50">
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
            <main className="mt-[72px]">
                <SimpleSlider/>
            </main>
            <div className="mx-5 sm:mx-10">
                <div className="sm:flex justify-around">
                    <CompanyInfo/>
                    <Service/>
                </div>
            {/* <about>
            <h3 className="text-center m-14 text-3xl">About</h3>
                <div className="flex justify-center">
                    <div className="p-3 bg-orange-100 w-32 h-32 sm:w-3/12 sm:h-3/12">
                        <p>img</p>
                    </div>
                    <div className="p-3 bg-white w-32 h-32 sm:w-3/12 sm:h-3/12">
                        <h4 className="text-xl">Hoge1</h4>
                        <p className="break-words whitespace-pre-wrap">texttexttexttexttexttexttexttext</p>
                    </div>
                </div>
                <div className="flex justify-center flex-row-reverse mt-5"> 
                    <div className="p-3 bg-orange-100 w-32 h-32 sm:w-3/12 sm:h-3/12">
                        <p>img</p>
                    </div>
                    <div className="p-3 bg-white w-32 h-32 sm:w-3/12 sm:h-3/12">
                        <h4 className="text-xl">Hoge2</h4>
                        <p className="break-words whitespace-pre-wrap">texttexttexttexttexttexttexttext</p>
                    </div>
                </div>
                <div className="flex justify-center mt-5">
                    <div className="p-3 bg-orange-100 w-32 h-32 sm:w-3/12 sm:h-3/12">
                        <p>img</p>
                    </div>
                    <div className="p-3 bg-white w-32 h-32 sm:w-3/12 sm:h-3/12">
                        <h4 className="text-xl">Hoge3</h4>
                        <p className="break-words whitespace-pre-wrap">texttexttexttexttexttexttexttext</p>
                    </div>
                </div>
            </about> */}
            <news>
                <News
                 title1={"News1"}
                 text1={"news text news text news text news text news text news text news text news text news text news text"}
                 date1={"2022.2.10"}
                 title2={"News2"}
                 text2={"news text news text news text news text news text news text news text news text news text news text"}
                 date2={"2022.1.5"}
                 title3={"News3"}
                 text3={"news text news text news text news text news text news text news text news text news text news text"}
                 date3={"2021.12.11"}
                />
            </news>
            <contact className="bg-slate-200">
                <Contact/>
            </contact>
            <footer className="absolute bottom-0 w-full">
                <Footer/>
            </footer>
        </div>
        </div>
    )
}

export default Home;