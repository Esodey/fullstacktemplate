import React from 'react';
import exampleMovies from '../../../data/exampleMovies.js'

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value : ''
    }
  }

  handleChange(e) {
     this.setState({
       value: e.target.value
     });
  }


  render () {
    return (
      <div
       
       >
      <label type='text' search='search'>
        Search:
      </label>
        <input 
          className='form-control'
          type='text'
          onChange={e => this.handleChange(e)}
          value={this.state.value}
          />
        <button onClick={this.props.handleSubmit}>Submit</button>
      </div>
    )
  }
}

{/* <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form> */}

export default Search;