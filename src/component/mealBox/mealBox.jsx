import React, { Component } from "react";

class MealBox extends Component {
  constructor({ props }) {
    super(props);
    this.state = {
      qty: 0,
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
    const todayFood = {
      qty: this.state.qty,
      name: this.props.name,
      calories: this.props.calories,
    };

    this.props.addTodayFood(todayFood);
  };

  render() {
    return (
      <div className="media">
        <img src={this.props.image} className="img-thumbnail mr-3 mw-25 border-0" style={{ maxWidth: "10em" }} />
        <div className="media-body align-self-center">
          <h5 className="mt-0 mb-1">{this.props.name}</h5>
          <small>{this.props.calories}</small>
        </div>
        <form onSubmit={this.add} className="row align-self-center">
          <input
            onChange={this.handler}
            className="form-control col-9"
            type="number"
            name="qty"
            value={this.state.qty}
          />

          <button className="btn btn-primary col-3">+</button>
        </form>
      </div>
    );
  }
}

export default MealBox;
