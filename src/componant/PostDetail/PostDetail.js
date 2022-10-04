import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PostDetail = ({post}) => {
    const {body,id,title,userId} = post;
const navegate = useNavigate()

const handle=()=>{
    navegate(`/postinfo/${id}`)

}
    return (
        <div>
            <p>{body}</p>
            <p>{title}</p>
            <Link to={`/postinfo/${id}`}>Vesite me</Link>
            <Link to={`/postinfo/${id}`}>
                <button>Post Info</button>
            </Link>
            <button onClick={handle}>Post Info use Onclick</button>
        </div>
    );
};

export default PostDetail;