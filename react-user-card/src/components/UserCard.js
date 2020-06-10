import React from 'react';
import { CardStyle } from './StylesForCard'

function UserCard(props) {
    let { img, name, username, bio, company, location, email, website, profile, twitter, 
        followingCount, followersCount } = props;
    if(bio === null)
        bio = `${name}`;
    return (
        <CardStyle className='card'>
            <img src={img} alt={name}/>
            <div className='card-details'>
                <h3>{name}</h3>
                <br></br>
                <div className='username'>{username}</div>
                <div>Bio: {bio}</div>
                <div>company: {company}</div>
                <div>Location: {location}</div>
                <div>Email: {email}</div>
                <div>Wdbsite: {website}</div>
                <div>Profile: {profile}</div>
                <div>Twitter: {twitter}</div>
                <div>Followers: {followersCount}</div>
                <div>Following: {followingCount}</div>
            </div>
        </CardStyle>
    );
}

export default UserCard;