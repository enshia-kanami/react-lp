import React from "react";

const Nav = (props) => {
    return (
        <nav>
            <ul className="flex">
                <li><a href="#" className="block py-6 px-4">Home</a></li>
                <li><a href="#" className="block py-6 px-4">About</a></li>
                <li><a href="#" className="block py-6 px-4">Servise</a></li>
                <li><a href="#" className="block py-6 px-4">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav;
