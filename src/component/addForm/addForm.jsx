import React, { Component } from "react";

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      calories: "",
      picture: "",
    };
  }
  handler = (event) => {
    const $input = event.target;
    const value = $input.value;
    const name = $input.name;

    this.setState({
      [name]: value,
    });
  };

  add = (event) => {
    event.preventDefault();
    this.props.getMeal({
      name: this.state.name,
      calories: this.state.calories,
      picture: this.state.picture,
    });
  };

  render() {
    return (
      <form action="" onSubmit={this.add}>
        <label htmlFor="name-input">Name</label>
        <input onChange={this.handler} name="name" id="name-input" type="text" value={this.state.name} />
        <label htmlFor="calories-input">Calories</label>
        <input onChange={this.handler} name="calories" id="calories-input" type="text" value={this.state.calories} />
        <label htmlFor="img-input">Picture</label>
        <input onChange={this.handler} name="picture" id="img-input" type="text" value={this.state.picture} />
        <button>Add</button>
      </form>
    );
  }
}

export default AddForm;
