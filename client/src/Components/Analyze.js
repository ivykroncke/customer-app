import React, { Component } from 'react'
import axios from 'axios';
import ShowFrequency from './ShowFrequency';
import styled from 'styled-components'

import { Button } from 'semantic-ui-react'
import Duplicates from './Duplicates';

const FreqWrapper = styled.div`
width: 75%;
`

const StyledContent = styled.div`
padding-bottom: 2vh;
`

export default class Analyze extends Component {
    state = {
        frequency: [],
        buttonShows: true,
        emails: []
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
    this.setState({emails: allEmails})
}

toggleButtonShows = () => {
    this.setState({ buttonShows: !this.state.buttonShows })
}

  render() {
    
    return (       
      <FreqWrapper>
        {this.state.buttonShows ? 

        (<div className="ui raised segment" >
            <StyledContent>
                <h3>Welcome to the People App</h3>
                <p>Below are all of the contacts in your network.</p>
                <div>Click the button below to launch Analyze mode where you can view character count in all emails and suggested duplicates.</div>
            </StyledContent>
            <Button basic color="grey" onClick={this.toggleButtonShows}>
                Analyze
            </Button>
        </div>)
        :
        (
        <div>
            <div className="ui raised segment" >
                <ShowFrequency 
                    frequency={this.state.frequency}
                    toggleButtonShows={this.toggleButtonShows}/>
                </div>
            <div className="ui raised segment" >
                <Duplicates 
                    emails={this.state.emails}/>
            </div>
        </div>)
        }
      </FreqWrapper>
    )
  }
}
