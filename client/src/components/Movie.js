import React from 'react';

var Movie = (props) => (
  <div className='movie'>
    {props.movie.title}
    <button
      className={ props.viewer === "watch" ? "selected" : undefined}
    >
      {'Watch'}
    </button>
  </div>
);

export default Movie;





// Movies.propTypes = {
//   movie: React.PropTypes.object.isRequired
// };