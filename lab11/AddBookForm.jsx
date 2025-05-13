import { useState } from "react";
import { useBookContext } from "./BookContext";

function AddBookForm() {
  const { addBook, loading } = useBookContext();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addBook(title, author);
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

export default AddBookForm;
