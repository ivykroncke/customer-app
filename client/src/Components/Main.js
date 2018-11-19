import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Frequency from './Frequency';

import { Card } from 'semantic-ui-react'

const MainContainer = styled.div`
margin: 5vh 5vw;
`

const StyledHeading = styled.h1`
text-align: center;
size: 3rem;
margin: 5vw;
`

const CardContainer = styled.div`
display: flex;
align-items: space-around;
justify-content: space-around;
flex-wrap: wrap;
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
        <Card key={i}>
          <Card.Content>
            <Card.Header> {person.display_name} </Card.Header>
            <Card.Meta> {person.title} </Card.Meta>
            <Card.Description> {person.email_address} </Card.Description>
          </Card.Content>
        </Card>
        )
    })

    return (
      <MainContainer>
        <StyledHeading>All People</StyledHeading>
        <Frequency people={this.state.people}/>
        <CardContainer>{peopleData}</CardContainer>
      </MainContainer>
    )
  }
}
