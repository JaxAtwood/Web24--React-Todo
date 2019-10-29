import React, { Component } from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import { Box } from "./components/TodoComponents/Styles";

const listData = [
  {
    task: "",
    id: null,
    completed: "",
  }
];

class App extends Component {
  constructor() { 
    super(); 
    this.state = { 
      name: "Jackie",
      list: listData
    };
    console.log("HERE", listData);
  };

  toggleList = id => {
    console.log(id);

    this.setState({
      list: this.state.list.map(item => {
        if (item.id === id) {
          return{
            ...item,
            selected: !item.selected
          };
        } else {
          return item
        }
      })
    });
  };

  addList = listName => {
    const newList = {
      name: listName,
      id: Date.now(),
      selected: true
    };
    this.setState({
      list: [...this.state.list, newList]
    });
  };

  clearSelected = () => {
    this.setState({
      list: 
      this.state.list.filter(item => item.selected)
    });
  };

  render() { 
    return ( 
        <Box>
          <h2>Task List</h2>
          <TodoForm 
              addList={this.addList}
            />
            <TodoList 
              list={this.state.list}
              toggleList={this.toggleList}
              clearSelected={this.clearSelected}
              listData={this.state.listData}
            />
          
      </Box>
    );
  };
}

export default App;