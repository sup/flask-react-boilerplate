import React, { Component } from 'react';
import { Grid, Jumbotron, Button } from 'react-bootstrap';


class SubHeader extends Component {
    constructor() {
        super();
        this.state = {
            data: "Nobody...",
        }
    }
    
    componentDidMount() {
        fetch('/api/')
            .then(response => {return response.json()})
            .then(data => this.setState({ data: data.hello }));
    }

    render () {
        return (
            <Jumbotron>
                <Grid>
                    <h1>Welcome to React {this.state.data}</h1>
                    <p>
                        <Button
                        bsStyle="success"
                        bsSize="large"
                        href="http://react-bootstrap.github.io/components.html"
                        target="_blank">
                        View React Bootstrap Docs
                        </Button>
                    </p>
                </Grid>
            </Jumbotron>
        );
    }
}


export default SubHeader;