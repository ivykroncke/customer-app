import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Frequency from './Frequency';

const MainContainer = styled.div`
margin: 5vh 5vw;
`

const StyledHeading = styled.h1`
text-align: center;
size: 3rem;
margin: 5vw;
`

const ContactContainer = styled.div`
background-color: lightgray;
border-radius: 5rem;
margin: 2vh;
padding: 5vh 7vw;
`

export default class Main extends Component {

  state = {
    people: []
  }

  componentDidMount = async () => {
    const response = await axios.get(`/api/people/`)
    this.setState({ people: response.data.data})
  }

  render() {

    const peopleData = this.state.people.map((person, i) => {
      return (
        <ContactContainer key={i}>
          <div> {person.display_name} </div>
          <div> {person.title} </div>
          <div> {person.email_address} </div>
        </ContactContainer>
        )
    })

    return (
      <MainContainer>
        <StyledHeading>All </StyledHeading>
        <Frequency people={this.state.people}/>
        <div>{peopleData}</div>
      </MainContainer>
    )
  }
}
