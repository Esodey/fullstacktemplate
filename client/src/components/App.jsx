import React from 'react';
import MovieList from './MovieList.js';
import Search from './Search.js';
import exampleMovies from '../../../data/exampleMovies.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies : exampleMovies
    };
  }

  render() {
    return (
      <div>
        <h1 className="title">Movie List!</h1>
        <br />
        <div>
          <div>
            <Search movies={this.state.movies}/>
          </div>
          <MovieList movies={this.state.movies} /> 
        </div>
      </div>
    );
  }
}

export default App;
