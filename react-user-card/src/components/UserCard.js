import React from 'react';

function UserCard(props) {
    let { img, name, username, bio, company, location, email, website, profile, twitter, 
        followingCount, followersCount } = props;
    if(bio === null)
        bio = `${name} must fill this in on their github`;
    return (
        <div className='card'>
            <img src={img} alt={name}/>
            <div className='card-info'>
                <h3>{name}</h3>
                <br></br>
                <div className='username'>{username}</div>
                <div>Bio: {bio}</div>
                <div>company: {company}</div>
                <div>Location: {location}</div>
                <div>Email: {email}</div>
                <div>Wdbsite: {website}</div>
                <div>Profile: <a href={profile} target='_blank' rel='noopener noreferrer'>{profile}</a></div>
                <div>Twitter: {twitter}</div>
                <div>Followers: {followersCount}</div>
                <div>Following: {followingCount}</div>
            </div>
        </div>
    );
}

export default UserCard;