import {Link} from "react-router-dom";
import {routes} from '../routes';
import PropTypes from "prop-types";

const SearchBar = ({getSearchBooks, setSearchBook}) => {
  const {homePage} = routes;

   return <div className="search-books-bar">
    <div className="search-books-input-wrapper">
      <Link to={homePage.path} onClick={() => setSearchBook([])} className="close-search"/>
      <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          onChange={(e) => getSearchBooks(e.target.value, 20)}
      />
    </div>
  </div>
}

SearchBar.propTypes = {
  getSearchBooks: PropTypes.func.isRequired,
  setSearchBook: PropTypes.func.isRequired,
}

export default SearchBar
