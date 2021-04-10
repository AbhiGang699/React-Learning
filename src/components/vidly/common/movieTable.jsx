import React, { Component } from "react";
import Like from "./like";
import TableHeader from "./tableHeader";
class MovieTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock " },
    { path: "dailyRentalRate", label: "Rental Rate" },
    { key: "like" },
    { key: "delete" },
  ];
  render() {
    const { moviesCurrent, onLike, onDelete } = this.props;
    return (
      <table className="table">
        <TableHeader
          onSort={this.props.onSort}
          sortColumn={this.props.sortColumn}
          columns={this.columns}
        />

        <tbody>
          {moviesCurrent.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like onLike={onLike} movie={movie} isLiked={movie.like} />
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie._id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MovieTable;
