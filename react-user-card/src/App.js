import React, { Component } from 'react';
import UserCard from './components/UserCard';
import Header from './components/header'
import './App.css';
import axios from 'axios';

export default class App extends Component {
  state = {
    userCardArray: [],
    followingArray: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/RyanMersmann')
      .then(response => {
        console.log("my profile", response);
        
        this.setState({
          userCardArray: [{
            img: response.data.avatar_url,
            name: response.data.name,
            username: response.data.login,
            bio: response.data.bio,
            company: response.data.company,
            location: response.data.location,
            email: response.data.email,
            website: response.data.website,
            profile: response.data.html_url,
            twitter: response.data.twitter,
            followersCount: response.data.followers,
            followingCount: response.data.following,
          }]
        });
      })
      .catch(err => console.log('Error with Mounting my profile from the API: ', err));

    this.createUserCard();
  }

  createUserCard = () => {
    axios.get('https://api.github.com/users/RyanMersmann/following')
      .then(response => {
        console.log("the people I follow", response);
        this.setState({ followingArray: response.data });
        const followingLinks = this.state.followingArray.map(user => {
          return user.url;
        })
        followingLinks.forEach(el => {
          axios.get(el)
            .then(response => {
              this.setState({
                userCardArray: [...this.state.userCardArray, {
                  img: response.data.avatar_url,
                  name: response.data.name,
                  username: response.data.login,
                  bio: response.data.bio,
                  company: response.data.company,
                  location: response.data.location,
                  email: response.data.email,
                  website: response.data.website,
                  profile: response.data.html_url,
                  twitter: response.data.twitter,
                  followersCount: response.data.followers,
                  followingCount: response.data.following,
                }]
              })
            })
            .catch(err => console.log('Error with the UserCard 1: ', err));
        })
      })
      .catch(err => console.log('Error with the UserCard 2 ', err));

  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className='container'>
          {this.state.userCardArray.map(card => {
            return <UserCard
              key={card.username}
              img={card.img}
              name={card.name}
              username={card.username}
              bio={card.bio}
              company={card.company}
              location={card.location}
              email={card.email}
              website={card.website}
              profile={card.profile}
              twitter={card.twtitter}
              followersCount={card.followersCount}
              followingCount={card.followersCount}
            />
          })}
        </div>
      </div>
    );
  }
}