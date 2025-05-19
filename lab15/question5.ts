interface MovieItem {
  id: string;
  title: string;
}

class Movie {
  #movies: Map<String, MovieItem[]> = new Map();
  //key is the genre: string, value is array of movies
  //  example: { thriller: [{ id: '1', title: 'The American'}, { id: '2', title: 'Arcadian'}] }
  add_genre(genre: string): boolean {
    // add genre if genre does not exist
    // return true if the genre is added successfully, false otherwise
    if (this.#movies.has(genre)) {
      console.log(`Genre, ${genre} already exists`);
      return false;
    }
    this.#movies.set(genre, []);
    return true;
  }
  add_movie_in_genre(genre: string, new_movie: MovieItem): boolean {
    // add movie if movie id does not exist
    // return true if the movie is added successfully, false otherwise
    if (this.#movies.has(genre)) {
      const movies = this.#movies.get(genre);
      const movieIndex = movies.findIndex((movie) => movie.id === new_movie.id);
      if (movieIndex === -1) {
        movies.push(new_movie);
        return true;
      }
      console.log("Movie already exists in genre");
      return false;
    }
    this.#movies.set(genre, [new_movie]);
    return true;
  }
  update_movie_title_by_genre_and_movie_id(
    genre: string,
    movie_id: string,
    new_title: string
  ): boolean {
    // update a movie within a certain genre
    // return true if the movie's title is updated successfully, false otherwise
    if (this.#movies.has(genre)) {
      const movies = this.#movies.get(genre);
      const movie = movies.find((m) => m.id === movie_id);
      if (movie) {
        movie.title = new_title;
        return true;
      }
      console.log(
        `Movie with id ${movie_id} does not exist for genre ${genre}`
      );
      return false;
    }
    console.log(`Genre ${genre} does not exist. Please add the genre first`);
    return false;
  }
  delete_movie_by_genre_and_movie_id(genre: string, movie_id: string): boolean {
    // delete movie
    // return true if the movie is delete successfully, false otherwise

    if (this.#movies.has(genre)) {
      const movies = this.#movies.get(genre);
      const movieIndex = movies.findIndex((movie) => movie.id === movie_id);
      if (movieIndex >= 0) {
        movies.splice(movieIndex, 1);
        return true;
      }
      console.log(
        `Movie with id ${movie_id} does not exist for genre ${genre}`
      );
      return false;
    }
    console.log(`Genre ${genre} does not exist`);
    return false;
  }

  get_movie_title_by_id(genre: string, movie_id: string): string | null {
    // return the movie title
    if (this.#movies.has(genre)) {
      const movies = this.#movies.get(genre);
      const movie = movies.find((movie) => movie.id === movie_id);

      return movie ? movie.title : null;
    }
    return null;
  }
}

const app = new Movie();

// Add genres
console.log(app.add_genre("thriller")); // true
console.log(app.add_genre("comedy")); // true
console.log(app.add_genre("comedy")); // false

// Add movie in genre
app.add_movie_in_genre("thriller", { id: "1", title: "The American" });
app.add_movie_in_genre("thriller", { id: "1", title: "The American" }); // Test duplicate addition
app.add_movie_in_genre("thriller", { id: "2", title: "Arcadian" });
app.add_movie_in_genre("comedy", { id: "3", title: "Friday" });
app.add_movie_in_genre("comedy", { id: "4", title: "Next Friday" });

// Update movie title
app.update_movie_title_by_genre_and_movie_id(
  "thriller",
  "1",
  "Captain America"
);

// Delete a movie
app.delete_movie_by_genre_and_movie_id("thriller", "1");
app.delete_movie_by_genre_and_movie_id("thriller", "1");
app.delete_movie_by_genre_and_movie_id("horror", "1");

// Get a movie title
console.log(app.get_movie_title_by_id("thriller", "1")); // null (deleted)
console.log(app.get_movie_title_by_id("thriller", "2")); // Arcadian
