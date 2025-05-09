import { useState } from "react";
import AddBook from "./AddBook";
import BookForm from "./AddBookForm";
import Book from "./Book";
import EditBookForm from "./EditBookForm";
import { useBookContext } from "./BookContext";

function BookList() {
  const { books, loading, openAddBook, openEditBook, setOpenEditBook } =
    useBookContext();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [id, setId] = useState("");

  function handleEdit(id) {
    const bookToEdit = books.find((book) => book.id === id);
    setTitle(bookToEdit.title);
    setAuthor(bookToEdit.author);
    setId(id);
    setOpenEditBook(true);
  }

  return (
    <div>
      {loading ? (
        <p>Loading... </p>
      ) : (
        <>
          <div className="books">
            {books.map((book) => (
              <Book key={book.id} book={book} handleEdit={handleEdit} />
            ))}
            <AddBook />
          </div>
          {openAddBook && <BookForm />}

          {openEditBook && (
            <EditBookForm
              book={{ title, author, id }}
              setTitle={setTitle}
              setAuthor={setAuthor}
            />
          )}
        </>
      )}
    </div>
  );
}

export default BookList;
