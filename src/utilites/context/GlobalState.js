import React from "react";
import Context from "./Context";
export default class GlobalState extends React.Component {
  state = {
    data: {},
  };

  addData = (data) => {
    const list = [this.state.data, data];
    this.setState({ data: list });
  };

  deleteData = (ID) => {
    this.setState(this.state.data.splice(ID, 1));
  };
  render() {
    return (
      <Context.Provider
        value={{
          data: this.state.data,
          addData: this.addNewTask,
          deleteData: this.deleteData,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
