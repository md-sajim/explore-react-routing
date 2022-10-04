import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostInfo = () => {
    const data = useLoaderData()
    const { id, title, body, userId } = data
    const navigat = useNavigate()
    const hendalAuthor = () => {
        navigat(`/friend/${userId}`)
    }
    return (
        <div>
            <h1>This is post DetalisId:{id}</h1>
            <p>{title}</p>
            <p>{body}</p>
            <button onClick={hendalAuthor}>Author</button>
        </div>
    );
};

export default PostInfo;