import { Button} from '@material-ui/core';
import React from 'react';
import {Link} from "react-router-dom"

const Post = ({post}) => {
    const {title, id, userId} = post;
    return (
        <div style={{border:"1px solid red", padding:"10px", margin:"10px"}}>
            <h2>{title}</h2>
            <p>Id: {id}</p>
            <p>userId: {userId}</p>
            <Link to={`/posts/${id}`}><Button variant="contained" color="primary">See details</Button></Link>
        </div>
    );
};

export default Post;