import React, { Component } from "react";
const Like = (props) => {
  let iconClass;
  if (props.isLiked == true) iconClass = "fa fa-heart";
  else iconClass = "fa fa-heart-o";
  return (
    <i
      onClick={() => props.onLike(props.movie)}
      style={{ cursor: "pointer" }}
      className={iconClass}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
