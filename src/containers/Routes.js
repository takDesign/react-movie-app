// This is route
import { Route, Switch } from 'react-router';
import React, { Component } from 'react';
import App from '../App';
import MovieList from '../components/MovieList';
import MovieDetail from '../components/MovieDetail';

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact={true} path='/' component={App} />
                    <Route exact={true} path='/list' component={MovieList} />
                    <Route
                        exact={true}
                        path='/detail'
                        component={MovieDetail}
                    />
                </Switch>
            </div>
        );
    }
}
