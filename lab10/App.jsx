import { useEffect, useState } from "react";
import BookList from "./BooksList";
import "./global.css";
import { BookProvider } from "./BookContext";

function App() {
  return (
    <BookProvider>
      <div className="App">
        <BookList />
      </div>
    </BookProvider>
  );
}

export default App;
