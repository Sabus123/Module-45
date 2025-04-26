import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <h2>This is Header.</h2>
            {/* <Outlet></Outlet> */}
            <nav>
                {/* <a href="/">Home</a>
                <a href="/laptops">Laptops</a>
                <a href="/mobiles">Mobiles</a>
                <a href=""></a> */}
              <NavLink to="/">Home</NavLink>
              <NavLink to="/laptops">Laptops</NavLink>
              <NavLink to="/mobiles">Mobiles</NavLink>
              <NavLink to="/">Home</NavLink>
            </nav>
        </div>
    );
};

export default Header;