import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Frined/Friend';
import "./Frinds.css"

const Frinds = () => {
    const friends = useLoaderData()
    return (
        <div>
            <h1>My total Frind:{friends.length}</h1>
            <div className='friends'>
                {
                    friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
                }
            </div>
        </div>
    );
};

export default Frinds;