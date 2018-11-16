import React, { Component } from 'react'
import axios from 'axios';

export default class Frequency extends Component {

componentDidMount = async () => {
    const response = await axios.get('/api/people')
    const personData = response.data.data
    this.extractEmails(personData)
}

splitCharacters = (allEmails) => {
    const personCharArray = allEmails.map((email) => {
        return ( email.split('') )
    })
    const allCharsArray = personCharArray.flat()
    console.log(allCharsArray)
}

extractEmails = (personData) => {
    let allEmails = []
    personData.forEach((person) => {
        const singleEmail = person.email_address
        allEmails.push(singleEmail)
    })
    this.splitCharacters(allEmails)
}

  render() {
    
    return (
        
      <div>
        content
      </div>
    )
  }
}
