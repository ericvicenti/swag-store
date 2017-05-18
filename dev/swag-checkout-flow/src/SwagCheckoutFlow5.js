/**
 * @flow
 */

import React, { Component } from "react";
import { View, Text } from "react-native";

import {
  ConfirmationScreen,
} from "./Screens5";

import CheckoutNavigator from "./CheckoutNavigator5";

const CheckoutRoutes = {
  Cart: { screen: CheckoutNavigator },
  Confirmation: { screen: ConfirmationScreen }
};

export {
  CheckoutRoutes,
};
