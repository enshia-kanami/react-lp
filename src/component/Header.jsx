function Header() {
    return (
        <header className="relative bg-white drop-shadow-md ...">
            <div className="flex justify-between items-center pt-0 pb-0">
                <a href="#" className="font-normal text-xl pl-4">Hoge</a>
                    <nav>
                        <ul className="flex">
                            <li><a href="#" className="block py-6 px-4">Home</a></li>
                            <li><a href="#" className="block py-6 px-4">About</a></li>
                            <li><a href="#" className="block py-6 px-4">News</a></li>
                            <li><a href="#" className="block py-6 px-4">Contact</a></li>
                        </ul>
                    </nav>
            </div>
        </header>
    )
}

export default Header;