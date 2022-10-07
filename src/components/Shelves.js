import BookList from "./BookList";
import PropTypes from "prop-types";

const Shelves = ({books, title, updateShelf}) => {
  return <>
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {
          books.length !== 0 ? books?.map(filteredBook =>
              <BookList
                  key={filteredBook?.id}
                  filteredBook={filteredBook}
                  updateShelf={updateShelf}
              />
          ) : <p>You have no books in "{title}" category</p>
        }
      </ol>
    </div>
  </>
}

Shelves.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  updateShelf: PropTypes.func.isRequired,
}

export default Shelves;
