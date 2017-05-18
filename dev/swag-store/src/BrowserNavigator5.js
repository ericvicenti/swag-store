/**
 * @flow
 */

import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

import { SwagListScreen, SwagProductScreen } from "./Screens5";

const CheckoutNavigator = StackNavigator({
  SwagList: { screen: SwagListScreen },
  SwagProduct: { screen: SwagProductScreen }
});

export default CheckoutNavigator;
