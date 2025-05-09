import { useBookContext } from "./BookContext";

function EditBookForm(props) {
  const { book, setTitle, setAuthor } = props;
  const { title, author, id } = book;
  const { updateBook } = useBookContext();

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

export default EditBookForm;
