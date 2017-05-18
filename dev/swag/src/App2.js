/**
 * @flow
 */

import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

import { ConfirmationScreen } from "./Screens1";

import CheckoutNavigator from "./CheckoutNavigator3";

const App = StackNavigator(
  {
    Checkout: { screen: CheckoutNavigator },
    Confirmation: { screen: ConfirmationScreen }
  },
  {
    navigationOptions: { header: null },
    mode: "modal"
  }
);

export default App;
