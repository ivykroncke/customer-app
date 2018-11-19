import React, { Component } from 'react'
import styled from 'styled-components'

import { Dropdown, Segment, Icon } from 'semantic-ui-react'

const ShowFreqContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const StyledFreq = styled.div`
text-align: center;
`

export default class ShowFrequency extends Component {
  render() {

    const frequencyList = this.props.frequency.map((freq, i) => {
        return(
            <div key={i}>
                <StyledFreq> {freq[1]} - {freq[0]} </StyledFreq>
            </div>
        )
    })

    return (
      <ShowFreqContainer>
        <h4>Frequency of Characters in Email Addresses</h4>
        <Dropdown placholder="Select to view" fluid selection options={frequencyList}></Dropdown>
        <div onClick={this.props.toggleButtonShows}><Icon name="close"/> Close </div>
      </ShowFreqContainer>
    )
  }
}
