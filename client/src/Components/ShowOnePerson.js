import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import { Icon, Segment, Button } from 'semantic-ui-react'

const ShowOnePersonContainer = styled.div`
margin: 5vh 5vw;
`

const StyledHeading = styled.div`
text-align: center;
`

const ShowOneContainer = styled.div`
height: 100%;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
`

export default class ShowOnePerson extends Component {

    state = {
        person: {}
    }

    componentDidMount = async () => {
        const personId = this.props.idForShow
        const response = await axios.get(`/api/people/${personId}`)
        const thisPerson = response.data.data
        this.setState({ person: thisPerson})
    }

    swapView = (event) => {
        console.log('swapView Works')
        event.preventDefault()
        this.props.exitShowOnePerson()
    }

  render() {
    return (
        <ShowOnePersonContainer>
            <Segment raised>
                <StyledHeading>
                    <Icon name="user circle" size="huge"/>
                    <h3>{this.state.person.display_name}</h3>
                </StyledHeading>

                <ShowOneContainer>
                    <div>{this.state.person.email_address}</div>
                    <div>{this.state.person.phone}</div>
                </ShowOneContainer>

                <Button basic color="grey" onClick={this.swapView}>Back</Button>
        
            </Segment>
        </ShowOnePersonContainer>

    )
  }
}
