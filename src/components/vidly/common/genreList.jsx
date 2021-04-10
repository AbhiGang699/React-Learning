import React, { Component } from "react";
import PropType from "prop-types";
import { getGenres } from "../services/fakeGenreServices";

const GenreList = (props) => {
  const genres = getGenres();
  const { onGenreSelect, currentGenre, valueProperty, textProperty } = props;
  const defaultClass = "list-group-item list-group-item-action";
  const activeClass = defaultClass + " active";
  return (
    <ul className="list-group float-left">
      <li
        onClick={() => onGenreSelect("0")}
        style={{ cursor: "pointer" }}
        className={0 == currentGenre ? activeClass : defaultClass}
      >
        All Movies
      </li>
      {genres.map((_) => (
        <li
          onClick={() => onGenreSelect(_._id)}
          style={{ cursor: "pointer" }}
          key={_[valueProperty]}
          className={_._id == currentGenre ? activeClass : defaultClass}
        >
          {_[textProperty]}
        </li>
      ))}
    </ul>
  );
};

GenreList.propTypes = {
  onGenreSelect: PropType.func.isRequired,
  currentGenre: PropType.string.isRequired,
};

GenreList.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default GenreList;
