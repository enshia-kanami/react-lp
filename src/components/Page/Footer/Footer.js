import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="mt-14">
            <footer className="absolute bottom-0 w-full">
                <div className="text-center">
                    <div>
                        <ul className="flex justify-center mb-5">
                            <li className="first:pl-0"><Link to="#">Home</Link></li>
                            <li className="pl-3"><Link to="#">About</Link></li>
                            <li className="pl-3"><Link to="#">News</Link></li>
                            <li className="pl-3"><Link to="#">Contact</Link></li>
                        </ul>
                    </div>
                        <p className="py-2.5">&copy; 2022 React_LP</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;