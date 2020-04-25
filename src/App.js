import React, { Component } from "react";
import "./App.css";
import Listitem from "./Listitem";

export default class App extends Component {
  state = {
    items: [],
    currentItem: {
      text: "",
      key: "",
    },
  };
  changeInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const item = this.state.items;
    const newItem = this.state.currentItem;
    if (this.state.currentItem.text) {
      this.setState({
        items: [...item, newItem],
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  };
  removeItem = (x) => {
    const item = this.state.items;
    this.setState({
      items: item.filter((val) => {
        return val.key !== x;
      }),
    });
  };
  handlerEdit = (text, key) => {
    const items = this.state.items;
    items.map((val) => {
      if (val.key === key) {
        val.text = text;
      }
    });
    this.setState({
      items: items,
    });
  };
  render() {
    return (
      <div className="main">
        <header>
          <h2>My To Do List</h2>
          <form id="myForm" onSubmit={(e) => this.handleSubmit(e)}>
            <input
              type="text"
              value={this.state.currentItem.text}
              onChange={(e) => this.changeInput(e)}
              placeholder="Title..."
            />
            <button type="submit">Add</button>
          </form>
        </header>
        <div className="list_container">
          <Listitem
            items={this.state.items}
            removeItem={this.removeItem}
            handlerEdit={this.handlerEdit}
          />
        </div>
      </div>
    );
  }
}
