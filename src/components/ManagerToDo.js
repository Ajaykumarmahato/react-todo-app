import React, { Component } from "react";
import "../components/ToDo.css";
import ToDoContent from "./ToDoContent";

export default class ManagerToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Manager",
      itemList: ["Manager existing"],
      count: 1,
    };
  }
  render() {
    return (
      <div>
        <ToDoContent
          title={this.state.title}
          itemList={this.state.itemList}
          count={this.state.count}
        />
      </div>
    );
  }
}
