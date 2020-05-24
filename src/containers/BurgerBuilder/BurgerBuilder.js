import React, { Component } from "react";

import Aux from '../../hoc/Aux'
import Burguer from '../../components/Burger/Burguer'

class BurgerBuilder extends Component {
  render() {
    return(
      <Aux>
        <Burguer />
        <div>Build Controls</div>
      </Aux>
    )
  }
}

export default BurgerBuilder