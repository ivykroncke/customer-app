import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavWrapper = styled.div`
background-color: black;
color: white;
margin: 10vw;
display: flex;
justify-content: space-between;
align-items: center;
margin: 0 auto;
padding: 8vh;
`

const StyledLink = styled(Link)`
:hover {
  color: lightgray;
}
`

export default class Nav extends Component {
  render() {
    return (
      <NavWrapper>
        <div>MyPerson</div>
        <StyledLink to="https://developers.salesloft.com/api.html">More Information</StyledLink>
      </NavWrapper>
    )
  }
}
