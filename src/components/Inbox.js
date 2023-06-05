import React, { useState, useRef } from "react";

const Inbox = (props) => {

  const [newTask, setNewTask] = useState(false);
 
  const taskName = useRef(null);
  const taskDate = useRef(null);

  const clearTask = () => {
    taskName.current.value = "";
    taskDate.current.value = "";
    setNewTask(false);
  }

  return (
    <div>
      <h3>Inbox</h3>
      {!newTask && (
        <button className="new" onClick={() => {setNewTask(true)}} id='add-new'>
          +Add New
        </button>
      )}
      {newTask && (
        <form className="newtask-box">
          <input type="text" id="title" ref={taskName}></input>
          <div className="buttons">
            <button className="new" id="add-list" 
            onClick={() => {  setNewTask(false);
                              props.append({
                              number: props.list.length + 1,
                              title: taskName.current.value,
                              date: new Date(taskDate.current.value),
                            })
                          }
                          }
            >Add Task
            </button>
            <button className="new" onClick={clearTask}>
              Cancel
            </button>
            <input
              type="date"
              ref={taskDate}
              defaultValue="2023-06-05"
              id="date"
            ></input>
          </div>
        </form>
      )}
      <div id="inbox">
        {props.list.map((list) => {
          return (
            <div className="box" key={list.number}>
              <div className="task">
                {list.title} ({list.date.toLocaleDateString()})
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Inbox;
