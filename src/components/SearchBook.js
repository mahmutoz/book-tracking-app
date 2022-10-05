import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const SearchBook = ({getSearchBooks, searchBook, setSearchBook, updateShelf}) => {

  return <div className="search-books">
            <SearchBar getSearchBooks={getSearchBooks} setSearchBook={setSearchBook}/>
            <SearchResults searchBook={searchBook} updateShelf={updateShelf}/>
        </div>
}

export default SearchBook;
