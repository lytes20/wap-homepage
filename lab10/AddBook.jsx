import { useBookContext } from "./BookContext";

function AddBook(props) {
  const { setOpenAddBook } = useBookContext();
  return (
    <div className="add-book" onClick={setOpenAddBook}>
      + Add Book
    </div>
  );
}

export default AddBook;
