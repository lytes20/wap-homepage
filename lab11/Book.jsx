import { useNavigate } from "react-router";
import { useBookContext } from "./BookContext";

function Book(props) {
  const { book } = props;
  const { deleteBook } = useBookContext();
  let navigate = useNavigate();
  const openEditView = (id) => {
    navigate(`/edit-book/${id}`);
  };

  return (
    <div
      style={{
        marginTop: "10px",
        marginBottom: "10px",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
      <div>
        <button onClick={() => openEditView(book.id)}>Edit</button>
        <button onClick={() => deleteBook(book.id)}>Delete</button>
      </div>
    </div>
  );
}

export default Book;
