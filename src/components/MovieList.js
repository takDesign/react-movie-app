import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions/action';

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            movies: [],
            selectedMovieId: '',
            selectedMovieTitle: ''
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log(e.target.getAttribute('movieid'));
        const movieId = e.target.getAttribute('movieid');
        const movieTitle = e.target.getAttribute('title');
        this.setState({
            selectedMovieId: movieId,
            selectedMovieTitle: movieTitle
        });
        console.log('list page state', this.state);
        this.props.onClick(
            this.state.selectedMovieId,
            this.state.selectedMovieTitle
        );
        this.props.history.push('/detail');
    }

    // fetch movies from API
    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=bfdaf441&s=${this.props.text}`)
            // fetch('movies.json')
            .then(response => response.json())
            .then(arrMovies => {
                console.log(arrMovies);
                this.setState({
                    isLoaded: true,
                    movies: arrMovies.Search
                });
            });
    }
    render() {
        const { isLoaded, movies } = this.state;
        if (isLoaded) {
            return (
                <div className='container mt-5'>
                    <header className='container'>
                        <h1>Search Result for "{this.props.text}"</h1>
                        <Link to='/'>Go back</Link>
                    </header>
                    <main className='row mt-5'>
                        {movies.map(movie => (
                            <div className='col-3' key={movie.imdbID}>
                                <div className='card'>
                                    <img
                                        className='card-img-top'
                                        src={movie.Poster}
                                        alt={movie.Title}
                                    />
                                    <div className='card-body'>
                                        <h5 className='card-title'>
                                            {movie.Title}
                                        </h5>
                                        <p className='card-text'>
                                            {movie.Year}
                                        </p>
                                        <Link
                                            to='/detail'
                                            onClick={this.handleClick}
                                            movieid={movie.imdbID}
                                            title={movie.Title}
                                        >
                                            Show Detail
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </main>
                </div>
            );
        } else {
            return '';
        }
    }
}

const mapStateToProps = state => ({
    text: state.text.text,
    movieid: state.selectedMovieId,
    title: state.selectedMovieTitle
});

function mapDispatchToProps(dispatch) {
    return {
        onClick(text, movieid, title) {
            dispatch(actions.inputText(text));
            dispatch(actions.movieId(movieid));
            dispatch(actions.movieTitle(title));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
