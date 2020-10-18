import React, { Component } from 'react';
import Home from "./HomeComponent"
import Menu from "./MenuComponent"
import {DISHES} from "../shared/dishes"
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch, Route, Redirect} from "react-router-dom"

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
          <Switch>
            <Route path="/home"> <Home /></Route>
            <Route exact path="/menu"> <Menu dishes={this.state.dishes} />  </Route>
            <Redirect to="/home"/>
           </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
