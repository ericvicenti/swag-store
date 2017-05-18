/**
 * @flow
 */

import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

import { ConfirmationScreen } from "./Screens";

import CheckoutNavigator from "./CheckoutNavigator";

const App = StackNavigator(
  {
    Cart: { screen: CheckoutNavigator },
    Confirmation: { screen: ConfirmationScreen }
  },
  {
    navigationOptions: { header: null },
    mode: "modal"
  }
);

export default App;
