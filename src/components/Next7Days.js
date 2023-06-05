import React from "react";
import ListRender from "./ListRender";

const Next7Days = (props) => {

  const today = new Date("9/28/2022");

  const withinWeek = (date) => {
    const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    console.log(nextWeek)
    if(nextWeek >= date && date >= today){
        return true;
    }
    return false;
}

  return (
    <div id="next-list">
      <ListRender list={props.list.filter((e) => {
        return (withinWeek(e.date));
      })}/>
    </div>
  );
};

export default Next7Days;
