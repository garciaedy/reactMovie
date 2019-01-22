
import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
    <div>
        <form className="search-form" onSubmit={this.props.onSubmitQuery}>
            <input type='text' placeholder='Enter a movie name' onChange={this.props.onSearchInput}/>
            <input type='submit' value='Search' />
        </form>
                
    </div>
        );
    }
}

export default Search;