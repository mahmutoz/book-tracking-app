import "./App.css";
import {useEffect, useState} from "react";
import * as BookAPI from "./api/BooksAPI";
import { Routes, Route } from "react-router-dom";
import {routes} from './routes';
import BookShelf from "./components/BookShelf";
import SearchBook from "./components/SearchBook";

function App() {
  const {homePage, searchPage} = routes
  const [allBooks, setAllBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [searchBook, setSearchBook] = useState([]);

  useEffect(() => {
    BookAPI.getAll().then((response) => setAllBooks(response));
  }, []);

  const updateShelf = (book, shelfCategory) => {
    BookAPI.update(book, shelfCategory).then(() => setSelectedCategory(shelfCategory));

    if (shelfCategory === "none") {
      setAllBooks([allBooks.filter(b => b.id !== book.id).concat(book)]);
    } else {
      book.shelf = shelfCategory;
      const newBook = allBooks.filter(b => b.id !== book.id).concat(book);
      setAllBooks([...allBooks, newBook]);
    }
  }

  const getSearchBooks = (query, maxResults) => {
    query === ''
        ? setSearchBook([])
        : BookAPI.search(query, maxResults).then((response) =>
            setSearchBook(response.error ? [] : response)
         );
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
        <Routes>
          <Route exact element={<BookShelf shelfList={shelfList} updateShelf={updateShelf}/>} path={homePage.path}/>
          <Route exact element={<SearchBook getSearchBooks={getSearchBooks} searchBook={searchBook} setSearchBook={setSearchBook} updateShelf={updateShelf} />} path={searchPage.path}/>
        </Routes>
      </div>
  );
}

export default App;
