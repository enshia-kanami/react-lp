import React from "react";

function Footer() {
    return (
        <footer>
            <div className="text-center">
                <div>
                    <ul className="flex justify-center mb-5">
                        <li className="first:pl-0"><a href="#">Home</a></li>
                        <li className="pl-3"><a href="#">About</a></li>
                        <li className="pl-3"><a href="#">News</a></li>
                        <li className="pl-3"><a href="#">Contact</a></li>
                    </ul>
                </div>
                    <p className="py-2.5">&copy; 2022 React_LP</p>
            </div>
        </footer>
    )
}

export default Footer;