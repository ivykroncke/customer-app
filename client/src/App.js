import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import Home from './Components/Home';


const AppContainer = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
`

class App extends Component {
  render() {
    return (
      <AppContainer>
          <Router>
              <Switch>
                  <Route exact path="/" component={Home} />
              </Switch>
          </Router>
      </AppContainer>
      
    )
  }
}

export default App;