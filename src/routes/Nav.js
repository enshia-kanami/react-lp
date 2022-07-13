import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
        <nav>
            <ul>
                <li><Link to="/" className="block py-6 px-4">Home</Link></li>
                <li><Link to="/about" className="block py-6 px-4">About</Link></li>
                <li><Link to="/servise" className="block py-6 px-4">Servise</Link></li>
                <li><Link to="/contact" className="block py-6 px-4">Contact</Link></li>
            </ul>
        </nav>
        </div>
    )
}

export default Nav;
