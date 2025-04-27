import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetailse = () => {
     const user =useLoaderData();
     console.log(user);

    return (
        <div>
            <h1>User Detailse</h1>
        </div>
    );
};

export default UserDetailse;