import React,{useState, useEffect} from 'react';
import Post from '../Post/Post';

const Posts = () => {
    const [posts, setPosts] = useState([])


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
        .catch(err => {
            console.log(err)
        })

    },[])


    return (
        <div>
            {
                posts.map(p => <Post key={p.id} post={p}/>)
            }
        </div>
    );
};

export default Posts;