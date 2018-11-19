import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavWrapper = styled.div`
margin: 0 auto;
`

const InfoBar = styled.div`
height: 8vh;
padding: 2vh 2vw;
background-color: rgb(23, 48, 73);
color: white;
text-align: right;
`

const StyledLink = styled(Link)`
:hover {
  color: lightgray;
}
`

const TitleWrapper = styled.div`
height: 92vh;
background-image: url('https://images.unsplash.com/photo-1539250844530-3094062fb83b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7c2122d16570fffac7d860f4644fcf88&auto=format&fit=crop&w=1584&q=80');
background-size: cover;
`

const TextWrapper = styled.div`
background-color: rgb(70, 140, 210, .3);
width: 100%;
height: 100%;
display: flex;
align-items: center;
flex-direction: column;
`

const Title = styled.div`
color: rgb(7, 15, 22);
text-shadow: .35rem .35rem .75rem rgba(7, 15, 22, .25);
font-family: "Oswald";
font-size: 5rem;
margin: 18vh;
`

export default class Nav extends Component {
  render() {
    return (
      <NavWrapper>
        <InfoBar><StyledLink to="https://developers.salesloft.com/api.html">Learn More</StyledLink></InfoBar>
        <TitleWrapper>
          <TextWrapper>
            <Title>The People App</Title>
          </TextWrapper>
        </TitleWrapper>
      </NavWrapper>
    )
  }
}
