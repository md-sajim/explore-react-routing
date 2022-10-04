import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetil = () => {
    const friendDetils = useLoaderData()
    const {email,name,phone,username,website} = friendDetils;
    return (
        <div>
            <h1>You wnat to see detail </h1>
            <h6>{name}</h6>
            <p><small>{email}</small></p>
            <p><small>{phone}</small></p>
            <p><small>{username}</small></p>
            <p><small>{website}</small></p>
        </div>
    );
};

export default FriendDetil;