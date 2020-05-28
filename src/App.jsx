import React, { Component } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import MealBox from "./component/mealBox/mealBox";
import AddForm from "./component/addForm/addForm";
import Search from "./component/search/search";

import meals from "./meals";

class App extends Component {
  constructor() {
    super();
    this.state = {
      meals: [...meals],
      query: "",
      logs: [],
    };
  }

  openAddNewMeal = (event) => {
    const $form = event.target.parentNode.childNodes[2];
    if ($form.style.display === "block") {
      $form.style.display = "none";
    } else {
      $form.style.display = "block";
    }
  };

  addMeal = (meal) => {
    this.setState({
      meals: [...this.state.meals, meal],
    });
  };

  handleQuery = (queryResult) => {
    this.setState({
      query: queryResult,
    });
  };

  addTodayFood = (newLog) => {
    this.setState({
      logs: [...this.state.logs, newLog],
    });
    console.log(this.state.logs);
  };

  render() {
    return (
      <div className="app">
        <p>Sample App</p>
        <button onClick={this.openAddNewMeal}>Add meal</button>
        <div style={{ display: "none" }}>
          <AddForm getMeal={this.addMeal}></AddForm>
        </div>
        <Search getSearchQuery={this.handleQuery}></Search>
        <div className="main">
          <div>
            {this.state.meals
              .filter((meal) => {
                return meal.name.toLowerCase().includes(this.state.query.toLowerCase());
              })
              .map((meal) => {
                return <MealBox addTodayFood={this.addTodayFood} key={meal.name} {...meal}></MealBox>;
              })}
          </div>
          <div className="food-log">
            <h1>Today's food</h1>
            {this.state.logs.map((log) => {
              return (
                <div>
                  <p>
                    {log.qty} {log.name} = {log.calories} cal
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
