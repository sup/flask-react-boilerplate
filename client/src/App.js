import React, { Component } from 'react';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import TodoList from './components/TodoList';


class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <SubHeader/>
            <TodoList/>
        </div>
    );
  }
}


export default App;
