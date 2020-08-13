import React from "react";

export default function Square(props) {
  if (props.points) {
    if (props.points.some((point) => point === props.value)) {
      return (
        <button
          className="square"
          style={{ color: "green" }}
          onClick={() => props.onClick()}
        >
          {props.value}
        </button>
      );
    } else
      return (
        <button className="square" onClick={() => props.onClick()}>
          {props.value}
        </button>
      );
  } else
    return (
      <button className="square" onClick={() => props.onClick()}>
        {props.value}
      </button>
    );
}
