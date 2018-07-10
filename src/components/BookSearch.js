import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookItem from "./BookItem";
import * as BooksAPI from "../BooksAPI";

class BookSearch extends Component {
  state = {
    books: []
  };

  updateQuery(query) {
    if (query) {
      BooksAPI.search(query).then(res => {
        if (res.error) this.setState({ books: [] });
        else {
          res.map(b => {
            let shelvedBook = this.props.shelvedBooks.find(
              shelved => shelved.id === b.id
            );

            if (shelvedBook) b.shelf = shelvedBook.shelf;
            else b.shelf = BooksAPI.SHELF_NONE;
          });

          this.setState({ books: res });
        }
      });
    } else {
      this.setState({ books: [] });
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {" "}
            {this.state.books.map(b => (
              <li key={b.id}>
                <BookItem
                  book={b}
                  onUpdateBookShelf={this.props.onUpdateBookShelf}
                />
              </li>
            ))}{" "}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookSearch;
