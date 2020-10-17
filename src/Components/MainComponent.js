import React, { Component } from 'react';
import Menu from "./MenuComponent"
import Dishdetail from "./DishdetailComponent"
import {DISHES} from "../shared/dishes"
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {

  constructor(props){
    super(props)

    this.state = {
      dishes: DISHES,
      selectedDish: null
    }

  }

  onDishSelected(dishId) {
    this.setState({ selectedDish: dishId })
}


  render() {
    return (
      <div>      
        <Header />
        <Menu dishes={this.state.dishes} onClick={(dishId) => { this.onDishSelected(dishId)}}/>
        <Dishdetail selectedDish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]} />
        <Footer />
      </div>
    );
  }
}

export default Main;
