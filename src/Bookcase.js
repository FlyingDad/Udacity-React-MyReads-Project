import React, { Component } from "react"
import Bookshelf from "./Bookshelf";

class Bookcase extends Component {
  render() {
    return (
      <div className="list-books-content">
        <div>
          <Bookshelf books={this.props.books} shelfType="reading"/>
					<Bookshelf books={this.props.books} shelfType="wantToRead"/>
					<Bookshelf books={this.props.books} shelfType="read"/>
        </div>
      </div>
    );
  }
}

export default Bookcase;
