/**
 * @flow
 */

import React, { Component } from "react";
import { TabNavigator } from "react-navigation";

import {
  CheckoutCartScreen,
  CheckoutShippingScreen,
  CheckoutBillingScreen
} from "./Screens";

const CheckoutNavigator = TabNavigator(
  {
    CheckoutCart: { screen: CheckoutCartScreen },
    CheckoutShipping: { screen: CheckoutShippingScreen },
    CheckoutBilling: { screen: CheckoutBillingScreen }
  },
  {
    swipeEnabled: false,
    animationEnabled: false
  }
);

export default CheckoutNavigator;
