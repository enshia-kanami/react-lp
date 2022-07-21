import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
            <footer className="bottom-0 w-full">
                <div className="text-center mt-14">
                    <div>
                        <ul className="flex justify-center mb-5">
                            <li className="first:pl-0"><Link to="#">Home</Link></li>
                            <li className="pl-3"><Link to="../About/AboutDetail.js">About</Link></li>
                            <li className="pl-3"><Link to="../News/NewsDetail.js">News</Link></li>
                            <li className="pl-3"><Link to="../Contact/Contact.js">Contact</Link></li>
                        </ul>
                    </div>
                        <p className="py-2.5">&copy; 2022 React_LP</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;