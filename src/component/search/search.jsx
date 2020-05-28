import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  handler = (event) => {
    this.setState({
      input: event.target.value,
    });

    this.props.getSearchQuery(event.target.value);
  };

  render() {
    return (
      <form>
        <input
          style={{ width: "100%", margin: "20px 0" }}
          onChange={this.handler}
          name="input"
          type="search"
          value={this.state.input}
        />
      </form>
    );
  }
}

export default Search;
