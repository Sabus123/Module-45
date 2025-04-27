import React from 'react';
import { Link, useNavigate } from 'react-router';
// import { useLoaderData } from 'react-router';

const Post = ({post}) => {

    const {id, title} = post;
    const navigate = useNavigate();

    const navigateHandler = () =>{
        navigate(`/posts/${id}`)
    }
    
    return (
        <div style={{border:'2px solid green'}}>
            <h3>{title}</h3>
            <Link to={`/posts/${id}`}>
            <button>Show Detailse</button>
            </Link>
            <button onClick={navigateHandler}>Details of: {id}</button>
        </div>
    );
};

export default Post;