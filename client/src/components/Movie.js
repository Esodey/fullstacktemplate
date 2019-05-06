import React from 'react';

class Movie extends React.Component {
  renderDetails() {
    return this.props.movie.showDetails && (
      <div>
        <div>
          <span>Year: </span>
          <span>{ this.props.movie.year }</span>
        </div>
        <div>
          <span>Runtime: </span>
          <span>{ this.props.movie.runtime }</span>
        </div>
        <div>
          <span>Imdb: </span>
          <span>{ this.props.movie.imdb }</span>
        </div>
        <div>
          <span>Watched: </span>
          <span>{ this.props.isList && <button 
          onClick={ () => { this.props.toggleMovie(this.props.movie.title) } } 
          className={ this.props.movie.watched ? "selected" : undefined }>Watched</button> }</span>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div className='movie' onClick={ () => { this.props.showDetails(this.props.movie.title) } }>
        { this.props.movie.title}
        { this.renderDetails() }
      </div>
      );
  }
}

export default Movie;





// Movies.propTypes = {
//   movie: React.PropTypes.object.isRequired
// };