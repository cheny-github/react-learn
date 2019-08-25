import React, { Component } from 'react'

import './App.css';
import Search from './components/search/search'
import Main from './components/main/main'

export default class App extends Component {
  state={
    // keywords for search user
    usernameKW:''
  }

  setUserName=(usernameKW)=>{
    this.setState({
      usernameKW
    })
  }
  render() {
    return (
      <div className="container">
        <Search setUserName={this.setUserName}></Search>
        <Main usernameKW={this.state.usernameKW}></Main>
      </div>
    );
  }
}

