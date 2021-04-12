import React, { Component } from "react";
import Page from "./common/pagination";
import { paginate } from "./utils/paginate";
import GenreList from "./common/genreList";
import MovieTable from "./common/movieTable";
import _ from "lodash";
import { getMovies } from "./services/fakeMovieServices";

class Movies extends Component {
  state = {
    movies: getMovies(),
    currentPage: 1,
    pageSize: 4,
    currentGenre: "0",
    sortColumn: { path: "title", order: "asc" },
  };

  handlePageChange = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  handleDelete = (id) => {
    console.log(id);
    let list = this.state.movies;
    let index = 0,
      req = 0;
    for (; index < list.length; index++) {
      if (list[index]._id === id) {
        req = index;
        break;
      }
    }
    list.splice(req, 1);
    this.setState({
      movies: list,
    });
  };
  handleLike = (movie) => {
    let movies = [...this.state.movies];
    let index = this.state.movies.indexOf(movie);
    movies[index].like ^= true;
    this.setState({ movies });
  };

  handleGenreSelect = (id) => {
    this.setState({
      currentGenre: id,
      currentPage: 1,
    });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  render() {
    if (this.state.movies.length == 0) return <h3>No movies to Show</h3>;
    const {
      currentPage,
      movies,
      pageSize,
      currentGenre,
      sortColumn,
    } = this.state;

    const currentGenreMovies =
      this.state.currentGenre === "0"
        ? movies
        : movies.filter((movie) => movie.genre._id === currentGenre);

    const sorted = _.orderBy(
      currentGenreMovies,
      [sortColumn.path],
      [sortColumn.order]
    );
    const moviesCurrent = paginate(sorted, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-2">
          <GenreList
            currentGenre={currentGenre}
            onGenreSelect={this.handleGenreSelect}
            textProperty="name"
            valueProperty="_id"
            sortColumn={sortColumn}
          />
        </div>
        <div className="col">
          <p>Showing {currentGenreMovies.length} movies in the database</p>
          <MovieTable
            moviesCurrent={moviesCurrent}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />
          <Page
            itemsCount={currentGenreMovies.length}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
