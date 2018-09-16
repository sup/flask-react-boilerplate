import React, { Component } from 'react';
import Header from './components/Header';
import SubHeader from './components/SubHeader';

class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <SubHeader/>
        </div>
    );
  }
}

export default App;
