import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
     
    const [showInfo, setShowInfo] = useState(false);

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
           <button onClick={()=>setShowInfo(!showInfo)}>{showInfo ? 'Hide' : 'Show'} Info</button>
           {
            showInfo && <Suspense fallback={ <span>Loading...</span>}></Suspense>
           }
        </div>
    );
};
export default User;