import React from "react";
import { Route, Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Bookcase from "./Bookcase";
import Search from "./Search";
//import Error404 from './Error404'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  };

  componentDidMount() {
    this.getBooks();
	}
	
	componentDidUpdate() {
		this.getBooks()
	}

  getBooks() {
    BooksAPI.getAll().then(response => {
      this.setState({ books: response });
    });
  }

  moveBookHandler(value) {
    this.getBooks();
  }

  onCloseSearch() {
    // This is the only way I could get the bookcase to re-render
    // If I don't do this the bookcase renders with no books because the state didn't change
    this.setState({ books: [] });
    this.getBooks();
  }

  render() {
    return (
      <div className="app">
        <Route
					exact
          path="/search"
          render={() => (
            <Search
              onCancelSearch={this.onCloseSearch.bind(this)}
              myBooks={this.state.books}
            />
          )}
        />

        <Route
					exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <Bookcase
                books={this.state.books}
                onBookshelfChange={this.moveBookHandler.bind(this)}
                currentBooks={this.state.books}
              />
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
