import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    const {id} = useParams()
    const [post, setPost] = useState({})

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
        .catch(err => {
             console.log(err)
        })
    },[])
    const {title, body} = post
    return (
        <div>
            <h1>I am a Post details {id}</h1>
            <h2>{title}</h2>
            <p>Body : {body}</p>
            <h3>Comments</h3>
            <Comments postId={id}/>

        </div>
    );
};

export default PostDetails;