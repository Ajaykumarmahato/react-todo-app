import React, { Component } from "react";
import "../components/ToDo.css";
import ToDoContent from "./ToDoContent";

export default class AdminToDo extends Component {
  state = {
    title: "Admin",
    itemList: ["Admin existing"],
    count: 0,
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     title: "Admin Todo App",
  //     newItem: "",
  //     itemList: [],
  //   };
  // }
  // getInput(userInput) {
  //   this.setState(
  //     {
  //       newItem: userInput,
  //     },
  //     () => console.log(userInput)
  //   );
  // }
  // addItem(userInput) {
  //   let itemArray = this.state.itemList;
  //   itemArray.push(userInput);
  //   this.setState({
  //     itemList: itemArray,
  //     newItem: "",
  //   });
  // }
  // removeItem(removedItem) {
  //   let itemArray = this.state.itemList;
  //   itemArray.splice(removedItem, 1);
  //   this.setState({
  //     itemList: itemArray,
  //   });
  // }
  render() {
    return (
      <div>
        {/* <ToDoContent
          title={this.state.title}
          newItem={this.state.newItem}
          itemList={this.state.itemList}
          getInput={this.getInput.bind(this)}
          addItem={this.addItem.bind(this)}
          removeItem={this.removeItem.bind(this)}
        /> */}
        <ToDoContent
          title={this.state.title}
          itemList={this.state.itemList}
          count={this.state.count}
        />
      </div>
    );
  }
}
