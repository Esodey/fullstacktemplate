import React from 'react';
import Movie from './Movie.js';

var MovieList = (props) => (
  <div className='movie-list'>
  <h3>Movies:</h3>
    {props.movies.map(movie => {
      return <Movie 
      key={movie.title}
      movie={movie} 
      />
    })}
  </div>
);

// MovieList.propTypes = {
//   movies: React.PropTypes.array.isRequired
// };

export default MovieList;