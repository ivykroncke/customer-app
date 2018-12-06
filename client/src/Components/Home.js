import React, { Component } from 'react'
import Nav from './Nav';
import Main from './Main';

export default class Home extends Component {

  render() {
    return (
      <div>
        <Nav />
        <Main/>
      </div>
    )
  }
}
