import React, { Component } from "react";
import Book from "./Book";

class Bookshelf extends Component {
  state = {
    filteredBooks: []
  };
	
	componentWillReceiveProps(nextprops) {
		this.filteredBooks(nextprops.books)
	}

  filteredBooks(props) {
		//console.log('filtering',props)
    let books = props.books.filter(book => {
			//console.log(book)
      return book.shelf === this.props.shelfType;
    });
    this.setState({ filteredBooks: books });
  }

  render() {
		//console.log('shlef render', this.state.filteredBooks)
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
