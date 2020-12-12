import React from 'react';

function FollowerCard(props) {
    return (
        <div className='cards'>
            <div className='card'>
                <img src = {props.followers['avatar_url']} alt="User Avatar" />
                <div classname ='card-info'>
                    <h3 className = 'name'>{props.followers.name || props.followers.login}</h3>
                    <p className='username'>{props.followers.login}</p>
                    <p>Location: {props.followers.location || "Not Available"}</p>
                    <p>Followers: {props.followers.followers}</p>
                    <p>Following: {props.followers.following}</p>
                    <p>Bio: {props.followers.bio || "Not Available"}</p>
                </div>
            </div>
        </div>
    );
}

export default FollowerCard;