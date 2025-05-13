import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useBookContext } from "./BookContext";

function EditBookForm() {
  const { id } = useParams();
  const { updateBook, book, getBook, loading } = useBookContext();

  const [title, setTitle] = useState(book?.title);
  const [author, setAuthor] = useState(book?.author);

  useEffect(() => {
    getBook(id);
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    updateBook(title, author, id);
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleAuthorChange(e) {
    setAuthor(e.target.value);
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter book title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Author's name"
            value={author}
            onChange={handleAuthorChange}
          />
        </div>
        <div className="input-container">
          <input
            type="submit"
            value={loading ? "Saving .." : "Save Book"}
            disabled={loading}
          />
        </div>
      </form>
    </div>
  );
}

export default EditBookForm;
