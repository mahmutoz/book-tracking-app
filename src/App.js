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

    book.shelf = shelfCategory;
    const books = allBooks.filter(b => b.id !== book.id);
    setAllBooks([...books, book]);
  }

  const getSearchBooks = (query, maxResults) => {
    query === ''
        ? setSearchBook([])
        : BookAPI.search(query, maxResults).then((books) =>
            setSearchBook(books.error ? [] : books)
         );
  }

  const shelfList = [
    {
      key: "currentlyReading",
      title: "Currently Reading"
    },
    {
      key: "wantToRead",
      title: "Want to Read"
    },
    {
      key: "read",
      title: "Read"
    }
  ]

  return (
      <div className="app">
        <Routes>
          <Route exact element={<BookShelf allBooks={allBooks} shelfList={shelfList} updateShelf={updateShelf}/>} path={homePage.path}/>
          <Route exact element={<SearchBook getSearchBooks={getSearchBooks} searchBook={searchBook} setSearchBook={setSearchBook} updateShelf={updateShelf} />} path={searchPage.path}/>
        </Routes>
      </div>
  );
}

export default App;
