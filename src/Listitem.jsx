import React, { Component } from "react";

export default class Listitem extends Component {
  render() {
    const items = this.props.items;
    const listItem = items.map((val) => {
      return (
        <li key={val.key} className="list-group-item">
          <div className={this.getIndicatorClasses(val.tag)}></div>
          <div className="widget-content p-0">
            <div className="widget-content-wrapper">
              <div className="widget-content-left ml-2">
                <div className="widget-heading">
                  {val.text}
                  <div className={this.getBadgeClasses(val.tag)}>{val.tag}</div>
                </div>
                <div className="widget-subheading">
                  <i>{val.date}</i> {val.time}
                </div>
              </div>
              <div className="widget-content-right">
                <button
                  onClick={() => this.props.completeItem(val.key)}
                  className="border-0 btn-transition btn btn-outline-success"
                >
                  <i className="fa fa-check"></i>
                </button>
                <button
                  onClick={() => this.props.removeItem(val.key)}
                  className="border-0 btn-transition btn btn-outline-danger"
                >
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </li>
      );
    });
    return <ul className="list-group list-group-flush">{listItem}</ul>;
  }
  // change classes method
  getBadgeClasses(tag) {
    let classes = "badge ml-2 badge-";
    classes += tag === "Incomplete" ? "danger" : "success";
    return classes;
  }
  getIndicatorClasses(tag) {
    let classes = "todo-indicator bg-";
    classes += tag === "Incomplete" ? "warning" : "primary";
    return classes;
  }
}
