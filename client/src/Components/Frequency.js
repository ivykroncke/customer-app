import React, { Component } from 'react'
import axios from 'axios';
import ShowFrequency from './ShowFrequency';
import styled from 'styled-components'

const FreqWrapper = styled.div`
text-align: center;
`

const StyledButton = styled.div`
background-color: darkgray;
border-radius: 2rem;
color: white;
padding: 3vh;
margin: 5vh;
`

export default class Frequency extends Component {
    state = {
        frequency: [],
        buttonShows: true
    }

componentDidMount = async () => {
    const response = await axios.get('/api/people')
    const personData = response.data.data
    this.extractEmails(personData)
}

sortTheCharacters = (sortableArray) => {
    const frequencyInIndexOneArray = sortableArray.map((char) => {
        return (char.reverse())
    })
    const sortedArray = frequencyInIndexOneArray.sort(function(a, b) {
        return a[0] - b[0]
    })
    sortedArray.reverse()
    this.setState({ frequency: sortedArray})
}

makeCharactersSortable = (countTheChars) => {
    const sortableArray = []
    for (let character in countTheChars) {
        const keysIntoIndices = [character, countTheChars[character]]
        sortableArray.push(keysIntoIndices)
    }
    this.sortTheCharacters(sortableArray)
}

countCharacters = (allChars) => {
    const countTheChars = allChars.reduce((allChars, char) => {
            if(char in allChars) {
                allChars[char]++
            }
            else {
                allChars[char] = 1
            }
            return allChars
        },
        {}
    )
    this.makeCharactersSortable(countTheChars)
}

splitCharacters = (allEmails) => {
    const personCharArray = allEmails.map((email) => {
        return ( email.split('') )
    })
    const allChars = personCharArray.flat()
    this.countCharacters(allChars)
}

extractEmails = (personData) => {
    let allEmails = []
    personData.forEach((person) => {
        const singleEmail = person.email_address
        allEmails.push(singleEmail)
    })
    this.splitCharacters(allEmails)
}

toggleButtonShows = () => {
    this.setState({ buttonShows: !this.state.buttonShows })
}

  render() {
    
    return (       
      <FreqWrapper>
        {this.state.buttonShows ? 

        (<StyledButton onClick={this.toggleButtonShows}>
            Click Here To Show Frequency of Characters In Emails
        </StyledButton>)
        :
        (<ShowFrequency 
            frequency={this.state.frequency}
            toggleButtonShows={this.toggleButtonShows}/>)
        
        }
      </FreqWrapper>
    )
  }
}
