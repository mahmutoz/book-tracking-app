import PropTypes from "prop-types";

const BookList = ({filteredBook, updateShelf}) => {

  const handleChangeShelf = (e) => {
    updateShelf(filteredBook, e.target.value);
  }

  return <li>
          <div className="book">
            <div className="book-top">
              <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                        `url("${filteredBook?.imageLinks?.smallThumbnail}")`,
                  }}
              ></div>
              <div className="book-shelf-changer">
                <select onChange={handleChangeShelf} defaultValue={filteredBook.shelf || "none"}>
                  <option value="" disabled>Move to...</option>
                  <option value="currentlyReading">
                    Currently Reading
                  </option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{filteredBook?.title}</div>
            <div className="book-authors">{filteredBook.authors ? filteredBook.authors.join(", ") : "Unknown Author"}</div>
          </div>
         </li>
}

BookList.propTypes = {
  filteredBook: PropTypes.object.isRequired,
  updateShelf: PropTypes.func.isRequired,
}

export default BookList;
