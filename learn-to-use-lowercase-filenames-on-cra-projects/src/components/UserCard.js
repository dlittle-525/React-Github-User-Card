import React from 'react';

function UserCard(props) {
    if (!props.user) {
        return null;
    }
    return (
        <div className='cards'>
            <div className='card main'>
                <img src = {props.user['avatar_url']} alt='User Avatar' />
                <div className='card-info'>
                    <h2 className='name'>{props.user.name || props.user.login}</h2>
                    <p className='username'>{props.user.login}</p>
                    <p>Location: {props.user.location || 'Not available'}</p>
                    <p>Followers: {props.user.followers}</p>
                    <p>Following: {props.user.following}</p>
                    <p>Bio: {props.user.bio || 'Not available'}</p>
                </div>
            </div>
        </div>
    );
}

export default UserCard;