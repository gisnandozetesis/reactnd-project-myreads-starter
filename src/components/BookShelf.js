import React, { Component } from "react";
import BookItem from "./BookItem";
import "../App.css";

class BookShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(b => (
              <li key={b.id}>
                <BookItem
                  book={b}
                  onUpdateBookShelf={this.props.onUpdateBookShelf}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
