import React, { Component } from "react";
import Listitem from "./Listitem.jsx";

export default class App extends Component {
  state = {
    items: [
      {
        text: "Some text",
        tag: "Incomplete",
        key: "1",
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      },
      {
        text: "Again text",
        tag: "Completed",
        key: "2",
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      },
    ],
    currentItem: {
      text: "",
      key: "",
      tag: "",
      date: "",
      time: "",
    },
  };
  // change input handler
  changeInput = (e) => {
    let txt = e.target.value;
    txt = txt.replace(txt.charAt(0), txt.charAt(0).toUpperCase());
    this.setState({
      currentItem: {
        text: txt,
        key: Date.now(),
        tag: "Incomplete",
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      },
    });
  };
  //form submit handler
  handleSubmit = (e) => {
    e.preventDefault();
    const item = this.state.items;
    const newItem = this.state.currentItem;
    console.log(newItem.date);
    if (this.state.currentItem.text) {
      this.setState({
        items: [...item, newItem],
        currentItem: {
          text: "",
          key: "",
          date: "",
          time: "",
        },
      });
    }
  };
  // item remove handler
  removeItem = (key) => {
    const item = this.state.items;
    this.setState({
      items: item.filter((val) => {
        return val.key !== key;
      }),
    });
  };
  //item complete handler
  completeItem = (key) => {
    const items = this.state.items.map((val) => {
      if (val.key === key) {
        val.tag = "Completed";
      }
      return val;
    });
    this.setState({ items });
  };
  render() {
    return (
      <div className="row mx-auto mt-5 container-fluid">
        <div className="col-md-8 px-0 mx-auto col-lg-6">
          <div className="card-hover-shadow-2x mb-3 card">
            <div className="card-header-tab card-header">
              <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                <i className="fa fa-tasks"></i>&nbsp;Task Lists
              </div>
            </div>
            <div className="scroll-area-sm">
              <div className="ps-show-limits">
                <div style={{ position: "static" }} className="ps ps--active-y">
                  <div className="ps-content">
                    <Listitem
                      items={this.state.items}
                      removeItem={this.removeItem}
                      completeItem={this.completeItem}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-block text-right card-footer">
              <form onSubmit={(e) => this.handleSubmit(e)}>
                <div className="input-group">
                  <input
                    onChange={(e) => this.changeInput(e)}
                    type="text"
                    value={this.state.currentItem.text}
                    className="form-control"
                  />
                  <div className="input-group-prepend">
                    <button
                      type="submit"
                      className="btn btn-primary rounded-right btn-md"
                    >
                      Add Task
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
