import React from 'react';
import MovieList from './MovieList.js';
import Search from './Search.js';
import { isUndefined, isNullOrUndefined } from 'util';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search : undefined,
      movieList: {},
      viewer : 'toWatch'
    };
  }

  handleSubmit(inputValue) {
    this.setState({
      search : inputValue,
      viewer : undefined
    })
  }

  handleNewMovie(inputMovie) {
    if (this.props.movies.some((movie) => movie.title === inputMovie)) {
      var current = this.state.movieList;
      current[title] = { title, watched: false }
      this.setState({
        movieList: current
      })
    }
  } 

  renderList()  {
    if (this.state.search) {
      var movies =  this.props.movies.filter(movie => movie.title.includes(this.state.search));
      return <MovieList movies={ movies } />
    } else {
      var movies;
      if  (this.state.viewer === "watch") {

      } else {

      }
      return <MovieList movies={ this.state.watchedMovies } />
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
          className={this.state.viewer === 'watch' ? "selected" : undefined}
          onClick={() => this.setState({
            viewer : 'watch',
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
