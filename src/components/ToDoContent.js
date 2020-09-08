import React, { Component } from "react";

export default class ToDoContent extends Component {
  // static getDerivedStateFromProps(PrevProps, PrevState) {
  //   return {
  //     title: PrevProps.title,
  //   };
  // }

  state = {
    name: [],
    email: [],
    newItem: "",
    title: this.props.title + " " + "ToDo App",
    itemsList: this.props.itemList,
    count: this.props.count + 1,
    buttonStatus: "-",
    isHidden: false,
    defaultBgColor: "default",
    bgColorOptions: ["red", "teal", "green", "default"],
  };

  getInput(userInput) {
    this.setState({
      newItem: userInput,
    });
  }
  addItem(userInput) {
    this.setState({
      itemsList: [...this.state.itemsList, userInput],
      newItem: "",
    });
  }
  removeItem(removedItem) {
    let itemArray = this.state.itemsList;
    itemArray.splice(removedItem, 1);
    this.setState({
      itemList: itemArray,
    });
  }
  showHideTodo(showHideValue) {
    if (showHideValue === false) {
      this.setState({
        isHidden: true,
        buttonStatus: "+",
      });
    } else {
      this.setState({
        isHidden: false,
        buttonStatus: "-",
      });
    }
  }
  changeBgColor(bgColor) {
    this.setState({
      defaultBgColor: bgColor,
    });
  }

  shouldComponentUpdate(props, state) {
    if (state.count >= 1) {
      return true;
    }
  }

  render() {
    return (
      <div className={`todo-form bg-${this.state.defaultBgColor}`}>
        <div className="todo-header">
          <br></br>
          {this.state.bgColorOptions.map((bgColor) => (
            <button
              onClick={() => this.changeBgColor(bgColor)}
              className={`bg-${bgColor}`}
            >
              {bgColor}
            </button>
          ))}{" "}
          <br></br>
          <br></br>
          <h1>{this.state.title}</h1>
          <button onClick={() => this.showHideTodo(this.state.isHidden)}>
            <b>{this.state.buttonStatus}</b>
          </button>
          <br></br>
          <br></br>
        </div>
        <div className={this.state.isHidden ? "hide-todo" : "show-todo"}>
          <form onSubmit={() => this.addItem(this.state.newItem)}>
            <input
              type="text"
              className="text-input"
              value={this.state.newItem}
              placeholder="Add New Item"
              onChange={(e) => this.getInput(e.target.value)}
            />
            <button
              className="add-button"
              onClick={() => this.addItem(this.state.newItem)}
              disabled={!this.state.newItem}
            >
              + ADD
            </button>
          </form>
          <p>
            <b>{this.state.newItem}</b>
          </p>
          <div className="todo-items">
            <ul>
              {this.state.itemsList.map((value, valkey) => (
                <li key={valkey}>
                  <button
                    className="remove-button"
                    onClick={() => this.removeItem(valkey)}
                  >
                    X
                  </button>{" "}
                  &nbsp;
                  {value} &nbsp; <br></br> <br></br>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
