import React, { Component } from 'react'
import axios from 'axios'

export default class Main extends Component {

  state = {
    people: []
  }

  componentDidMount = async () => {
    const response = await axios.get(`/api/people/`)
    this.setState({ people: response.data.data})
    console.log(this.state.people)
  }

  render() {

    const peopleData = this.state.people.map((person, i) => {
      return (<div key={i}>
        <div> {person.first_name} </div>
        <div> {person.title} </div>
        <div> {person.email_address} </div>
      </div>)
    })

    return (
      <div>
        <div>These are our customers:</div>
        <div>{peopleData}</div>
      </div>
    )
  }
}
