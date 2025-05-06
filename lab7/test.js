class Exercise3 {
  #movies = new Map();
  add_genre(genre) {
    if (this.#movies.has(genre)) {
      return false;
    }
    this.#movies.set(genre, []);
    return true;
  }
  add_movie_in_genre(genre, new_movie) {
    if (!this.#movies.has(genre)) {
      return false;
    }
    const genreMovies = this.#movies.get(genre);
    for (const movie of genreMovies) {
      if (movie.id === new_movie.id) {
        return false;
      }
    }
    genreMovies.push(new_movie);
    return true;
  }
  update_movie_title_by_genre_and_movie_id(genre, movie_id, new_title) {
    if (!this.#movies.has(genre)) {
      return false;
    }
    const genreMovies = this.#movies.get(genre);
    for (const movie of genreMovies) {
      if (movie.id === movie_id) {
        movie.title = new_title;
        return true;
      }
    }
    return false;
  }
  delete_movie_by_genre_and_movie_id(genre, movie_id) {
    if (!this.#movies.has(genre)) {
      return false;
    }
    const genreMovies = this.#movies.get(genre);
    const originalLength = genreMovies.length;
    const updatedMovies = genreMovies.filter((movie) => movie.id !== movie_id);
    this.#movies.set(genre, updatedMovies);
    return updatedMovies.length !== originalLength;
  }
  get_movie_title_by_id(genre, movie_id) {
    if (!this.#movies.has(genre)) {
      return "";
    }
    const genreMovies = this.#movies.get(genre);
    for (const movie of genreMovies) {
      if (movie.id === movie_id) {
        return movie.title;
      }
    }
    return "";
  }
}
const movieManager = new Exercise3();
console.log("Add action:", movieManager.add_genre("action"));
console.log("Add action again:", movieManager.add_genre("action"));
console.log(
  "Add Die Hard:",
  movieManager.add_movie_in_genre("action", { id: "1", title: "Die Hard" })
);
console.log(
  "Add Die Hard again:",
  movieManager.add_movie_in_genre("action", { id: "1", title: "Die Hard" })
);
console.log(
  "Add Mission Impossible:",
  movieManager.add_movie_in_genre("action", {
    id: "2",
    title: "Mission Impossible",
  })
);
console.log(
  "Update Die Hard:",
  movieManager.update_movie_title_by_genre_and_movie_id(
    "action",
    "1",
    "Die Hard 2"
  )
);
console.log(
  "Update unknown:",
  movieManager.update_movie_title_by_genre_and_movie_id(
    "action",
    "99",
    "Unknown"
  )
);
console.log("Get Die Hard:", movieManager.get_movie_title_by_id("action", "1"));
console.log("Get unknown:", movieManager.get_movie_title_by_id("action", "99"));
console.log(
  "Delete Mission Impossible:",
  movieManager.delete_movie_by_genre_and_movie_id("action", "2")
);
console.log(
  "Delete again:",
  movieManager.delete_movie_by_genre_and_movie_id("action", "2")
);
