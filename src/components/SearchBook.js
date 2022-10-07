import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import PropTypes from "prop-types";

const SearchBook = ({getSearchBooks, searchBook, setSearchBook, updateShelf}) => {

  return <div className="search-books">
            <SearchBar getSearchBooks={getSearchBooks} setSearchBook={setSearchBook}/>
            <SearchResults searchBook={searchBook} updateShelf={updateShelf}/>
        </div>
}

SearchBook.propTypes = {
  getSearchBooks: PropTypes.func.isRequired,
  searchBook: PropTypes.array.isRequired,
  setSearchBook: PropTypes.func.isRequired,
  updateShelf: PropTypes.func.isRequired,
}

export default SearchBook;
