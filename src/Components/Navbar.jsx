import { Link } from "react-router-dom";

function Navbar({title}) {
    return ( 
        <nav className="navbar">
            <h1 className="logo">{title}</h1>

            <ul>
                <li><Link to='/'className= "navLink">Home</Link></li>
                <li><Link to='about'className= "navLink">About</Link></li>
                <li><Link to='post'className= "navLink">Post</Link></li>
            </ul>
        </nav>
     );
}

export default Navbar;