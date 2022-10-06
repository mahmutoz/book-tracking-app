import BookList from "./BookList";

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

export default Shelves;
