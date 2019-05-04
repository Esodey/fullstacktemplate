import React from 'react';

var Movie = (props) => (
  <div className='movie'>
    {props.movie.title}
  </div>
);

// Movies.propTypes = {
//   movie: React.PropTypes.object.isRequired
// };
export default Movie;