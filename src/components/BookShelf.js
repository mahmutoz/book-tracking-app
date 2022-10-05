import Shelves from "./Shelves";
import {Link} from "react-router-dom";

const BookShelf = ({shelfList, updateShelf}) => {
  return <div className="list-books">
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
}

export default BookShelf;
