import React, { Component } from "react";
import PropTypes from 'prop-types';
import Book from "./Book";

class Bookshelf extends Component {
  state = {
    filteredBooks: []
  };
	
	componentWillReceiveProps(nextprops) {
		this.filteredBooks(nextprops.books)
	}

  filteredBooks(props) {
	
    let books = props.books.filter(book => {
      return book.shelf === this.props.shelfType;
    });
    this.setState({ filteredBooks: books });
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.state.filteredBooks.map(book => {
              return (
                <li key={book.title}>
                  <Book book={book} bookshelf={this.props.shelfType}/>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

Bookshelf.propTypes = {
	book: PropTypes.object,
	shelfType: PropTypes.string.isRequired,
	shelfName: PropTypes.string.isRequired
}

export default Bookshelf;
