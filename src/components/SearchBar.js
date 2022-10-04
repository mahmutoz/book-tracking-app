const SearchBar = () => {
  return <div className="search-books-bar">
    <div className="search-books-input-wrapper">
      <input
          type="text"
          placeholder="Search by title, author, or ISBN"
      />
    </div>
  </div>
}

export default SearchBar
