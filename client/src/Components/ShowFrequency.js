import React, { Component } from 'react'
import styled from 'styled-components'

const ShowFreqContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const CharContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Char = styled.div`
width: 10vw;
background-color: lightgray;
margin: 1vh .5vw;
padding: 3vw;
`

export default class ShowFrequency extends Component {
  render() {

    const frequencyList = this.props.frequency.map((freq, i) => {
        return(
            <CharContainer key={i}>
                <Char> {freq[1]} </Char>
                <Char> {freq[0]} </Char>
            </CharContainer>
        )
    })

    return (
      <ShowFreqContainer>
        <h3>Frequency of Characters in Email Addresses</h3>
        <div>
            <div>character/frequency</div>
            {frequencyList}
        </div>
        <button onClick={this.props.toggleButtonShows}>Back</button>
      </ShowFreqContainer>
    )
  }
}
