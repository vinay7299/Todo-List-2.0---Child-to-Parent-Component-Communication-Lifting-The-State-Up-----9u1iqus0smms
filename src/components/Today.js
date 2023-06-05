import React from "react";
import ListRender from "./ListRender";

const Today = (props) => {
  console.log(props.list)

  const today = new Date("9/28/2022");

  return (
    <div id="today-list">
      <ListRender list={props.list.filter((e) => {
        return e.date.getDate() === today.getDate() &&
              e.date.getMonth() === today.getMonth() &&
              e.date.getFullYear() === today.getFullYear();
      })} />
    </div>
  );
};

export default Today;
