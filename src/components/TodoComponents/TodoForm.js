import React, { Component } from "react";
import { Box2 } from "./Styles";


class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
           item: "" 
        };
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
            // item: e.target.value
        });
    };

    submitList = e => {
        e.preventDefault();
        this.props.addList(this.state.item);
        // this.setState({ item: "TEST" });
        // this.setState({item: e.target.value})
    };

    removeList = e => {
        e.preventDefault();
        this.props.clearSelected(this.state.item);
    };

    render() {
        return (
            <Box2>
            <form onSubmit={this.submitList}>
                <input 
                    required
                    type="text"
                    value={this.item}
                    name="item"
                    onChange={this.handleChanges}
                />
                <button>
                        Add to List
                </button>
            </form>
            </Box2>
        );
    }
}
export default TodoForm;