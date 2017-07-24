import React from 'react';
import {Navigation } from './components/NavigationComponents/Navigation.jsx'
import {Container } from './components/NavigationComponents/Container.jsx'


class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Container />
      </div>
    );
  }
}

export default App;
