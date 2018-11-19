import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Frequency from './Frequency';

import { Card } from 'semantic-ui-react'

const HeadingContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin: 8vh;
`

const MainContainer = styled.div`
margin: 5vh 5vw;
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
    const people = response.data.data
    this.alphabetizePeople(people)
  }

  alphabetizePeople = (people) => {
    const alphabetizedPeople = people.sort((a,b) => {
      const lastNameA = a.last_name.toUpperCase()
      const lastNameB = b.last_name.toUpperCase()
      if (lastNameA < lastNameB) {
        return -1;
      }
      if (lastNameA > lastNameB) {
        return 1;
      }
      return 0;
    })
    this.setState({ people: alphabetizedPeople })
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
        <HeadingContainer>
          <Frequency people={this.state.people}/>
        </HeadingContainer>
        <CardContainer>{peopleData}</CardContainer>
      </MainContainer>
    )
  }
}
