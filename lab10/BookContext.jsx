import React, { createContext, useContext, useState, useEffect } from "react";

const BookContext = createContext(null);

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openAddBook, setOpenAddBook] = useState(false);
  const [openEditBook, setOpenEditBook] = useState(false);
  const [refetch, setRefetch] = useState(1);

  const getBooks = async function () {
    setLoading(true);
    await fetch("https://67d17ef590e0670699ba5929.mockapi.io/books")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((json) => {
        setBooks(json);
        setLoading(false);
      });
  };
  useEffect(() => {
    getBooks();
  }, [refetch]);

  // Implement CRUD functions and useEffect here
  function addBook(title, author) {
    const submitBook = async function () {
      setLoading(true);
      await fetch("https://67d17ef590e0670699ba5929.mockapi.io/books", {
        method: "POST",
        body: JSON.stringify({ title, author }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        //   return response.json();
        setOpenAddBook(false);
        setRefetch((prev) => prev + 1);
        setLoading(false);
      });
      // .then((json) => console.log(json));
    };

    submitBook();
  }
  function updateBook(title, author, id) {
    setLoading(true);
    const editBook = async function () {
      await fetch(`https://67d17ef590e0670699ba5929.mockapi.io/books/${id}`, {
        method: "PUT",
        body: JSON.stringify({ title: title, author: author, id }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        setOpenEditBook(false);
        setRefetch((prev) => prev + 1);
        setLoading(false);
        // return response.json();
      });
      // .then((json) => console.log(json));
    };
    editBook();
  }
  function deleteBook(id) {
    setLoading(true);
    const handleDelete = async function () {
      await fetch(`https://67d17ef590e0670699ba5929.mockapi.io/books/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        setRefetch((prev) => prev + 1);
        setLoading(false);
        // return response.json();
      });
      // .then((json) => console.log(json));
    };

    handleDelete();
  }

  return (
    <BookContext.Provider
      value={{
        books,
        addBook,
        updateBook,
        deleteBook,
        loading,
        error,
        openAddBook,
        setOpenAddBook,
        openEditBook,
        setOpenEditBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
export const useBookContext = () => useContext(BookContext);
