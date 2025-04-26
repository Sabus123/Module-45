import React, { use } from 'react';

const Users2 = ({userPromiseData}) => {

    const users = use(userPromiseData);
    console.log("This is users2 data", users);
    return (
        <div>
            <h2>This is users 2 section</h2>
        </div>
    );
};

export default Users2;