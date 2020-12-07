import React, {useState, useEffect} from 'react';

const Comments = ({postId}) => {
    const [comments, setComments] = useState([])

    useEffect(()=>{

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComments(data))
        .catch(err=> {
            console.log(err)
        })
    },[])

    return (
        <div>
            <ul>
                {
                    comments.map(c => <li key={c.id}>{c.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Comments;