/**
 * @flow
 */

import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import { CheckoutRoutes } from "swag-checkout-flow";
import BrowserNavigator from "./BrowserNavigator0";

const App = StackNavigator(
  {
    Browse: {screen: BrowserNavigator},
    ...CheckoutRoutes,
  },
  {
    navigationOptions: { header: null },
    mode: "modal"
  }
);

export default App;
