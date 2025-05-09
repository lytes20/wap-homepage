import { useState } from "react";
import { useBookContext } from "./BookContext";

function AddBookForm() {
  const { addBook } = useBookContext();
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
        <div>
          <input
            type="text"
            placeholder="Enter book title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Author's name"
            value={author}
            onChange={handleAuthorChange}
          />
        </div>
        <div>
          <input type="submit" value="Save Book" />
        </div>
      </form>
    </div>
  );
}

export default AddBookForm;
