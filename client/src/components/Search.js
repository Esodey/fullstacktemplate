import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value : '',
      input : ''
    }
  }

  handleChange(e) {
     this.setState({
       value: e.target.value
     });
  }

  handleAdd(e) {
    this.setState({
      input: e.target.value
    });
 }


  render () {
    return (
      <div>
        <div>
          <input
            className='add-movie'
            type='text'
            placeholder='Add Movies'
            onChange={e => this.handleAdd(e)}
            value={this.state.input}
            />
            <button onClick={() => {this.props.handleNewMovie(this.state.input);
            this.setState({
              input : ''
            })}}>
            ADD
          </button>
        </div>
          <div> 
            
          <div>
            <label type='text' search='search' />
            <input 
            className='search-control'
            type='text'
            placeholder='Search'
            onChange={e => this.handleChange(e)}
            value={this.state.value}
            />
            <button onClick={() => {this.props.handleSubmit(this.state.value);
              this.setState({
                value : ''
              })}
            }>
          Submit</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;