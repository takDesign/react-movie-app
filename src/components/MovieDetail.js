import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import * as actions from '../actions/action';

class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            movie: []
        };
    }
    // fetch movies from API
    // componentDidMount() {
    //     fetch(`http://www.omdbapi.com/?apikey=bfdaf441&i=${this.props.movieid}`)
    //         .then(response => response.json())
    //         .then(arrMovies => {
    //             console.log(arrMovies);
    //             this.setState({
    //                 isLoaded: true,
    //                 movie: arrMovies.Search
    //             });
    //         });
    // }
    render() {
        console.log('state deteilpage', this.state);
        console.log('props deteilpage', this.props);
        const { isLoaded, movie } = this.state;
        if (isLoaded) {
            return (
                <div className='container mt-5'>
                    <header className='container'>
                        <h1>Detail for "{this.props.title}"</h1>
                        <a href='/'>Go back</a>
                    </header>
                    <main className='row mt-5'>
                        <div className='col-3'>
                            <div className='card mb-3'>
                                <img
                                    className='card-img-top'
                                    src='...'
                                    alt='Card cap'
                                />
                                <div className='card-body'>
                                    <h5 className='card-title'>Card title</h5>
                                    <p className='card-text'>
                                        This is a wider card with supporting
                                        text below as a natural lead-in to
                                        additional content. This content is a
                                        little bit longer.
                                    </p>
                                    <p className='card-text'>
                                        <small className='text-muted'>
                                            Last updated 3 mins ago
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            );
        } else {
            return '';
        }
    }
}
const mapStateToProps = state => ({
    // text: state.text,
    movieid: state.selectedMovieId,
    title: state.selectedMovieTitle
});

function mapDispatchToProps(dispatch) {
    return {
        onClick(movieid, title) {
            // dispatch(actions.inputText(text));
            dispatch(actions.movieId(movieid));
            dispatch(actions.movieTitle(title));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
