import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link to='/users'>Users</Link>
            <Link to='/about'>About</Link>
            <Link to='/footer'>Footer</Link>
        </div>
    );
};

export default Header;