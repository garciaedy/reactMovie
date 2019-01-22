import React, { Component } from 'react';
import Result from './Result'


class Results extends Component {
    render() {
        return (
            <div>
                {this.props.movieList.map((movie, i) => (
                    <div key={i}><Result movieList={movie}/></div>
                ))}
            </div>
        );
    }
}

export default Results;