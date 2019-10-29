// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


import React from "react";
import Todo from "./Todo";
import { Box3 } from "./Styles";


const TodoList = props => {
    return (
        <Box3>
            {props.list.map(item => (
                <Todo
                    key={item.id}
                    item={item}
                    toggleList={props.toggleList}
                    />
            ))}
            <button onClick={props.clearSelected}>
                Clear Selected 
            </button>
        </Box3>
    )
}

export default TodoList;