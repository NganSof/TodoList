import React from "react";
import Sang from "./Sang/Sang";
import { useSelector } from "react-redux";
import moment from "moment";

const Todo = (props) => {
  const { todoList } = useSelector((state) => {
    return state.SangTodo;
  });

  return (
    <div
      style={{
        maxWidth: 1280,
        margin: "auto",
        textAlign: "center",
        width: 450,
      }}
    >
      <h1
        style={{
          margin: 10,
          color: "#9DF4DE",
          marginBottom: 20,
          wordSpacing: 3,
        }}
      >
        TODO LIST {moment().format("DD-MM-yyyy")}
      </h1>
      <Sang List={todoList} />
    </div>
  );
};

export default Todo;
