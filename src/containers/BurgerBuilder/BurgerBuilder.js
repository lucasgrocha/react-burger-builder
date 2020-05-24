import React, { Component } from "react";

import Aux from '../../hoc/Aux'
import Burguer from '../../components/Burger/Burguer'

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {}
  // }

  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  }

  render() {
    return(
      <Aux>
        <Burguer ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Aux>
    )
  }
}

export default BurgerBuilder