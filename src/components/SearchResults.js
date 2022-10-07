import BookList from "./BookList";
import PropTypes from "prop-types";

const SearchResults = ({searchBook, updateShelf}) => {
  return <div className="search-books-results">
    <ol className="books-grid">
      {
        searchBook.length !== 0 ? searchBook?.map(book =>
          <BookList
            key={book?.id}
            filteredBook={book}
            updateShelf={updateShelf}
          />
        ) : <p>No Books Available...</p>
      }
    </ol>
  </div>
}

SearchResults.propTypes = {
  searchBook: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
}

export default SearchResults
