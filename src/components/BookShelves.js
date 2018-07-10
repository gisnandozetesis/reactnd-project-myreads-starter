import React, { Component } from "react";
import BookShelf from "./BookShelf";
import "../App.css";
import * as BooksAPI from "../BooksAPI";
import { Link } from "react-router-dom";

class BookShelves extends Component {
  render() {
    const { books, onUpdateBookShelf } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              title="Want to Read"
              books={books.filter(b => b.shelf === BooksAPI.SHELF_WANT_TO_READ)}
              onUpdateBookShelf={onUpdateBookShelf}
            />

            <BookShelf
              title="Currently Reading"
              books={books.filter(
                b => b.shelf === BooksAPI.SHELF_CURRENTLY_READING
              )}
              onUpdateBookShelf={onUpdateBookShelf}
            />

            <BookShelf
              title="Read"
              books={books.filter(b => b.shelf === BooksAPI.SHELF_READ)}
              onUpdateBookShelf={onUpdateBookShelf}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default BookShelves;
