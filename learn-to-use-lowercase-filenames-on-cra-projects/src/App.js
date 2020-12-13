import React, { Component } from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';
import './App.css';

class App extends Component {
constructor() {
  super();
  this.state ={
    user: [],
    followers: [],
    login: ""
  };
}

handleChanges = e => {
  this.setState({
    ...this.state,
    login: e.target.value
  })
}

fetchUser = () => {
  axios
  .get(`https://api.github.com/users/${this.state.login}`)
  .then(res => {this.setState({user: res.data})
    console.log("user: ", this.state.user);
  })
  .catch(err => console.error(err))

axios
  .get(`https://api.github.com/users/${this.state.login}/followers`)
  .then(res => {this.setState({followers: res.data})
    console.log("followers: ", this.state.followers)
  let followerArray = this.state.followers.map(follower => follower.login)

  followerArray.forEach(followerLogin => 
    {axios.get(`http://api.github.com/users/${followerLogin}`)
    .then(res => {this.setState({followers: res.data, login: ""})
  });
})
});
}

componentDidMount() {
  axios
    .get('https://api.github.com/users/dlittle-525')
    .then(res => {this.setState({user: res.data})
      console.log("user: ", this.state.user);
    })
    .catch(err => console.error(err))

  axios
    .get('https://api.github.com/users/dlittle-525/followers')
    .then(res => {this.setState({followers: res.data})
      console.log("followers: ", this.state.followers)
    let followerArray = this.state.followers.map(follower => follower.login)

    followerArray.forEach(followerLogin => 
      {axios.get(`http://api.github.com/users/${followerLogin}`)
      .then(res => {this.setState({followers: res.data})
    });
  })
  });
}


  render() {
    return (
      <div className="container">
        <div className="header">
        <input
        placeholder="user login"
        value={this.state.login}
        type="text"
        onChange={this.handleChanges}
        />
        <button onClick={this.fetchUser}>Get User</button>
        </div>
        <UserCard user={this.state.user} />
        <FollowerCard followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
