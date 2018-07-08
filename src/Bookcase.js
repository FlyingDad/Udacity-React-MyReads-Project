import React, { Component } from "react"
import PropTypes from 'prop-types';
import Bookshelf from "./Bookshelf";

class Bookcase extends Component {

	state = {
		books: []
	}

componentWillReceiveProps(nextProps) {
	this.setState({books: nextProps})
}

  render() {
    return (
      <div className="list-books-content">
        <div>
          <Bookshelf books={this.state.books} shelfType="currentlyReading" shelfName="Currently Reading"/>
					<Bookshelf books={this.state.books} shelfType="wantToRead" shelfName="Want to Read"/>
					<Bookshelf books={this.state.books} shelfType="read" shelfName="Read"/>
        </div>
      </div>
    );
  }
}

Bookcase.propTypes = {
	books: PropTypes.array
}

export default Bookcase;
