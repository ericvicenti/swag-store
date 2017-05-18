/**
 * @flow
 */

import React, { Component } from "react";
import { TabNavigator } from "react-navigation";

import {
  CheckoutCartScreen,
  CheckoutShippingScreen,
  CheckoutBillingScreen,
  ConfirmationScreen
} from "./Screens";

const App = TabNavigator({
  CheckoutCart: { screen: CheckoutCartScreen },
  CheckoutShipping: { screen: CheckoutShippingScreen },
  CheckoutBilling: { screen: CheckoutBillingScreen },
  Confirmation: { screen: ConfirmationScreen }
});

export default App;
