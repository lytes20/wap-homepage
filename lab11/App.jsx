import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router";

import BookList from "./BooksList";
import "./global.css";
import { BookProvider } from "./BookContext";
import AddBookForm from "./AddBookForm";
import EditBookForm from "./EditBookForm";

function App() {
  return (
    <BrowserRouter>
      <BookProvider>
        <div className="App">
          <nav>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Books
            </NavLink>
            <Link to="/add-book">Add Book</Link>
          </nav>
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/add-book" element={<AddBookForm />} />
            <Route path="/edit-book/:id" element={<EditBookForm />} />
          </Routes>
        </div>
      </BookProvider>
    </BrowserRouter>
  );
}

export default App;
