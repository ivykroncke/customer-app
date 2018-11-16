import React, { Component } from 'react'
import axios from 'axios'

export default class Main extends Component {

  state = {}

  componentDidMount = async () => {
    const peopleData = await axios.get(`/api/people/`)
    console.log(peopleData)
  }

  render() {
    return (
      <div>
        MAIN
      </div>
    )
  }
}
