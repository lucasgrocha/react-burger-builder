import React, { Component } from "react";

import Aux from '../../hoc/Aux'
import Burguer from '../../components/Burger/Burguer'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {}
  // }

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }

  render() {
    return(
      <Aux>
        <Burguer ingredients={this.state.ingredients} />
        <BuildControls />
      </Aux>
    )
  }
}

export default BurgerBuilder