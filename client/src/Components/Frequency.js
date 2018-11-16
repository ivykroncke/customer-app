import React, { Component } from 'react'
import axios from 'axios';

export default class Frequency extends Component {

componentDidMount = async () => {
    const response = await axios.get('/api/people')
    const personData = response.data.data
    this.extractEmails(personData)
}

extractEmails = (personData) => {
    let allEmails = []
    personData.forEach((person) => {
        const singleEmail = person.email_address
        allEmails.push(singleEmail)
    })
    console.log(allEmails)
}

  render() {
    
    return (
        
      <div>
        content
      </div>
    )
  }
}
