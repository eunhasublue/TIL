import React from "react";
import AllTodoList from "./AllTodoList";
import DoneList from "./DoneList";

const ListContainer = () => {
  return (
    <div>
      <AllTodoList />
      <DoneList />
    </div>
  );
};

export default ListContainer;
