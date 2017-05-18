/**
 * @flow
 */

import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import { CheckoutRoutes } from "swag-checkout-flow";

const App = StackNavigator(
  {
    ...CheckoutRoutes
  },
  {
    navigationOptions: { header: null },
    mode: "modal"
  }
);

export default App;
