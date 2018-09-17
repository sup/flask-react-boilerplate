import React, { Component } from 'react';
import { Grid, Jumbotron, Button } from 'react-bootstrap';


class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
        }
    }
    
    componentDidMount() {
        fetch('/api/todo')
            .then(response => {return response.json()})
            .then(data => this.setState({ todos: data }));
    }

    render () {
        const todos = this.state.todos.map((todo) =>
            <li>{todo.title}</li>
        );
        return (
            <Grid>
                <h1>Todo List</h1>
                <ul>{todos}</ul>
            </Grid>
        );
    }
}


export default TodoList;
