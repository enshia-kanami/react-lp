import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul className='flex'>
                <li><Link to="/" className="block py-6 px-4">Home</Link></li>
                <li><Link to="/aboutdetail" className="block py-6 px-4">About</Link></li>
                <li><Link to="/servicedetail" className="block py-6 px-4">Servise</Link></li>
                <li><Link to="/contact" className="block py-6 px-4">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;
