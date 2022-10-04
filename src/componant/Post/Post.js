import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PostDetail from '../PostDetail/PostDetail';

const Post = () => {
    const post = useLoaderData()
    return (
        <div>
            {
                post.map(p => <PostDetail key={p.id} post={p}></PostDetail>)
            }
        </div>
    );
};

export default Post;