import React, { Component } from "react";
import Book from "./Book";

class Bookshelf extends Component {
  state = {
    filteredBooks: []
  };

  componentDidMount() {
    this.filteredBooks();
  }

  filteredBooks() {
    let books = this.props.books.filter(book => {
      return book.bookshelf === this.props.shelfType;
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
                  <Book book={book} />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
