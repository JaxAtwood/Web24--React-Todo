import React from "react";
import "./Todo.css";
  
  const Todo = (props) => {
    return (
      <div className= {`item${props.item.selected ? ' selected' : ''}`}
      onClick= {() => props.toggleList(props.item.id)} style={{ textDecoration: !props.item.selected ? 'line-through' : 'none'}}>
        <p>{props.item.name}</p>
      </div>
    );
  };

  export default Todo;