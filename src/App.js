// This is the first page
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions/action';
import { Form, Button } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleClick() {
        this.props.onClick(this.state.text);
        // searchMovies(this.state.text);
        this.props.history.push('/list');
    }

    // handleChange(e) {
    //     this.props.onChange(this.state.text);
    //     this.setState({
    //         text: e.target.value
    //     });
    //     searchMovies(e.target.value);
    //     this.props.history.push('/list');
    // }

    // handleClick() {
    //     this.props.onClick(this.state.text);
    //     this.props.history.push('/second');
    // }

    render() {
        return (
            <div className='container mt-5'>
                <header className='container'>
                    <h1>React Movie App</h1>
                </header>
                <main className='mt-5'>
                    <Form.Group>
                        <Form.Label>Search movies!</Form.Label>
                        <Form.Control
                            type='text'
                            text={this.state.text}
                            // value={this.state.text}
                            onChange={this.handleChange}
                        ></Form.Control>
                        <Button className='mt-5' onClick={this.handleClick}>
                            Search
                        </Button>
                    </Form.Group>
                </main>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    text: state.text.text
});

function mapDispatchToProps(dispatch) {
    return {
        onClick(text) {
            dispatch(actions.inputText(text));
        }
    };
}

// functions to get movie details
// async function searchMovies(keyword) {
//     let response = await fetch(
//         `http://www.omdbapi.com/?apikey=bfdaf441&s=${keyword}`
//     );
//     let movies = await response.json();
//      .log('movie', movies);

//     await new Promise((resolve, reject) => {
//         setTimeout(() => resolve(), 1000);
//     });

//     return await movies;
// }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
