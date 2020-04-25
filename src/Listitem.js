import React, { Component } from "react";
import "./Listitem.css";

export default class Listitem extends Component {
  render() {
    const items = this.props.items;
    const listItem = items.map((val) => {
      return (
        <li key={val.key}>
          <input
            type="text"
            value={val.text}
            onChange={(e) => this.props.handlerEdit(e.target.value, val.key)}
          />
          <button onClick={() => this.props.removeItem(val.key)}>
            &times;
          </button>
        </li>
      );
    });
    return <ul>{listItem}</ul>;
  }
}
