import React from "react";
import Nav from "./Nav";

function Header() {
    return (
        <header className="relative bg-white drop-shadow-md ...">
            <div className="flex justify-between items-center pt-0 pb-0">
                <a href="#" className="font-normal text-xl pl-4">Hoge</a>
                <Nav/>
            </div>
        </header>
    )
}

export default Header;