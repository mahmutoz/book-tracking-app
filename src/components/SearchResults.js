import BookList from "./BookList";

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

export default SearchResults
