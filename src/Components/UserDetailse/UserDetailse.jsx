import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetailse = () => {
    const user = useLoaderData();
    //  console.log(user);
        
    const { website, name } = user;

    // const params = useParams();
    // console.log(params);

    const {userID} = useParams();
    console.log(userID);
    return (
        <div>
            <h3>User Details here</h3>
            <h5>Name:{name}</h5>
            <p>Website:{website}</p>
        </div>
    );
};

export default UserDetailse;