import Shelves from "./Shelves";
import GoToSearch from "./GoToSearch";

const BookShelf = ({allBooks, shelfList, updateShelf}) => {
  return <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          {
            shelfList.map(shelf =>
                <Shelves
                    key={shelf.key}
                    books={allBooks.filter(book => book.shelf === shelf.key)}
                    title={shelf.title}
                    updateShelf={updateShelf}
                />
            )}
        </div>
      </div>
    </div>
    <GoToSearch />
  </div>
}

export default BookShelf;
