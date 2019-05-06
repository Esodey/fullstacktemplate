import React from 'react';
import MovieList from './MovieList.js';
import Search from './Search.js';
import $ from 'jQuery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchMovies : undefined,
      movieList: {},
      viewer : 'toWatch'
    };
  }

  handleSubmit(inputValue) {
    $.get("https://api.themoviedb.org/3/search/movie",{
      api_key: "d347d222dac21304befba112f8b4d228",
      query: inputValue
    }).done((resp) => {
      this.setState({
        searchedMovies: resp.results,
        viewer: undefined
      })
    })
  }

  handleNewMovie(inputMovie) {
    Object.values(this.props.movies).forEach(movie => {
      if (movie.title === inputMovie) {
        var current = this.state.movieList;
        current[inputMovie] = movie;
        this.setState({
          movieList: current,
        })
      }
    })
  } 

  toggleMovie(title) {
    var current = Object.assign({}, this.state.movieList);
    current[title].watched = !current[title].watched;
    this.setState({
      movieList: current,
    })
  }

  showDetails(title) {
    var current = Object.assign({}, this.state.movieList);
    current[title].showDetails = !current[title].showDetails;
    this.setState({
      movieList: current,
    })
  }

  renderList()  {
    if (this.state.searchedMovies) {
      return <MovieList movies={ this.state.searchedMovies } isList={ false } />
    } else {
      var movies = [];
      if  (this.state.viewer === "watched") {
        Object.values(this.state.movieList).forEach(movie => {
          if (movie.watched) {
            movies.push(movie)
          }
        });
      } else {
        Object.values(this.state.movieList).forEach(movie => {
          if (!movie.watched) {
            movies.push(movie);
          }
        })

      }
      return (
        <MovieList
          movies={ movies }
          isList={ true } 
          toggleMovie={ this.toggleMovie.bind(this) } 
          showDetails={ this.showDetails.bind(this) }
        />
      );
    }
  }

  render() {
    return (
      <div>
        <h1 className="title">Movie List!</h1>
        <br />
        <div>
          <div>
            <Search
            handleSubmit={this.handleSubmit.bind(this)}
            handleNewMovie={this.handleNewMovie.bind(this)}
            />
            
          </div>
          <button 
          className={this.state.viewer === 'watched' ? "selected" : undefined}
          onClick={() => this.setState({
            viewer : 'watched',
            search: undefined
          })}
          >Watch</button>
          <button 
          className={this.state.viewer === "toWatch" ? "selected" : undefined}
          onClick={() => this.setState({
            viewer : 'toWatch',
            search: undefined
          })}
          >ToWatch</button>
          { this.renderList() } 
          
        </div>
      </div>
    );
  }
}

export default App;
