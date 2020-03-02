import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component {
    // fetch movies from API
    getMovieList() {
        let movies = fetch(
            `http://www.omdbapi.com/?apikey=bfdaf441&s=${this.props.text.text}`
        )
            .then(response => response.json())
            .then(arrMovies => {
                console.log(arrMovies);
                const listItems = arrMovies.Search.map(movie => {
                    console.log(movie.Title);
                    return `<li style="background-image: url(${movie.Poster})"><a href="#">${movie.Title}</a></li>`;
                });
                console.log(listItems);
                return listItems;
            });
        return movies;
    }

    render() {
        return (
            <div className='container mt-5'>
                <header className='container'>
                    <h1>Search Result for "{this.props.text.text}"</h1>
                    <a href='/'>Home</a>
                </header>
                <main className='mt-5'>
                    <ul>{this.getMovieList()}</ul>
                </main>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    text: state.text
});

export default connect(mapStateToProps)(MovieList);
