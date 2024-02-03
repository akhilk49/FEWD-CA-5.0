import { Link } from 'react-router-dom';
import './App.css'
import image from './assets/logoKB.png'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='logo'>
        <Link to="/">
          <img src={image} alt="Logo" id="logo"/>
        </Link>
      </div>
      <div className='pages'>
        <div>
          <Link to="/registration" className="nav-link">
            <h1>Register now</h1>
          </Link>
        </div>
        <div>
          <Link to="/contacts" className="nav-link">
            <h1>Contacts</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;