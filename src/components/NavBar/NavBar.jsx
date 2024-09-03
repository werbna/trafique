import { Link } from 'react-router-dom';
import { AuthedUserContext } from '../../App';
import { useContext, useState } from 'react';

const NavBar = ({ handleSignout }) => {
  const user = useContext(AuthedUserContext);
  const [showNav, setShowNav] = useState(false);

  const handleToggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <button className="nav-toggle" onClick={handleToggleNav}>
        {showNav ? 'Hide' : 'Show'}
      </button>
      {showNav && (
        <nav>
          <ul>
            {user ? (
              <>
                <li>
                  <Link to="/">Dashboard</Link>
                </li>
                <li>
                  <Link to="/Trips">View Trips</Link>
                </li>
                <li>
                  <Link to="/Trips/New">Create Trip</Link>
                </li>
                <li>
                  <Link to="" onClick={handleSignout}>
                    Sign Out
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/signin">Sign In</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavBar;