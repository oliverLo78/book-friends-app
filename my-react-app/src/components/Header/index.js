import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">Father Thoughts</h1>
          </Link>
          <p className="m-0">Get into the mind of Brian Heilig.</p>
        </div>
        <div>
        <div className="d-flex align-items-center">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/browse-books">
                    Browse Books
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shopping-cart">
                    Shopping Cart
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
