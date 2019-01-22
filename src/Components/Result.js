import React, { Component } from 'react'

class Result extends Component {

  render() {
      return (
          <div>
              {this.props.movieList.name}
              <img src={this.props.movieList.image} alt={this.props.movieList.name} />
          </div>
      )
  }
}


export default Result