import "./App.css";
import {useEffect, useState} from "react";
import Shelves from "./components/Shelves";
import * as BookAPI from "./api/BooksAPI";
import {Link} from "react-router-dom";

function App() {
  const [allBooks, setAllBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    BookAPI.getAll().then((response) => setAllBooks(response));
  }, []);

  const updateShelf = (book, shelfCategory) => {
    BookAPI.update(book, shelfCategory).then(() => setSelectedCategory(shelfCategory));

    if (shelfCategory !== "none") {
      book.shelf = shelfCategory;
      const newBook = allBooks.filter(b => b.id !== book.id);
      setAllBooks([...allBooks, newBook]);
    }
  }

  const shelfList = [
    {
      key: "currentlyReading",
      title: "Currently Reading",
      books: allBooks?.filter(book => book.shelf === "currentlyReading")
    },
    {
      key: "wantToRead",
      title: "Want to Read",
      books: allBooks?.filter(book => book.shelf === "wantToRead")
    },
    {
      key: "read",
      title: "Read",
      books: allBooks?.filter(book => book.shelf === "read")
    }
  ]

  return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                {
                  shelfList.map(shelf => <Shelves
                      key={shelf.key}
                      books={shelf?.books}
                      title={shelf.title}
                      updateShelf={updateShelf}
                  />)
                }
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      </div>
  );
}

export default App;
