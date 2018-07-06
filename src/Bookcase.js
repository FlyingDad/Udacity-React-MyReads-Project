import React, { Component } from "react"
import Bookshelf from "./Bookshelf";

class Bookcase extends Component {
  render() {
    return (
      <div className="list-books-content">
        <div>
          <Bookshelf books={this.props.books} shelfType="reading" shelfName="Currently Reading"/>
					<Bookshelf books={this.props.books} shelfType="wantToRead" shelfName="Want to Read"/>
					<Bookshelf books={this.props.books} shelfType="read" shelfName="Read"/>
        </div>
      </div>
    );
  }
}

export default Bookcase;
