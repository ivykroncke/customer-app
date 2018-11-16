import React, { Component } from 'react'
import styled from 'styled-components'

const NavWrapper = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin: 8vh;
`

export default class Nav extends Component {
  render() {
    return (
      <NavWrapper>
        <div>Nav Item 1</div>
        <div>Nav Item 2</div>
      </NavWrapper>
    )
  }
}
