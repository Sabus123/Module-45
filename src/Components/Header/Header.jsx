import React from 'react';
import { Outlet } from 'react-router';

const Header = () => {
    return (
        <div>
            <h2>This is Header.</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;