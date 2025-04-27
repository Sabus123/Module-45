import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {id,name, email, phone} = user;
    // style used.
    const userStyle = {
        border: '2px solid green',
        borderRadius: '20px',
        padding: '10px',
        margin: '10px'
    }
    return (
        <div style={userStyle}>
           <h2>{name}</h2>
           <h5>Email: {email}</h5>
           <p>Phone: {phone}</p>
           <Link to={`/users/${id}`}>Show Detailse</Link>
        </div>
    );
};
export default User;