/**
 * @flow
 */

import React, { Component } from "react";
import { View, Text } from "react-native";

import {
  ConfirmationScreen,
} from "./Screens";

import CheckoutNavigator from "./CheckoutNavigator";

const CheckoutRoutes = {
  Cart: { screen: CheckoutNavigator },
  Confirmation: { screen: ConfirmationScreen }
};

export {
  CheckoutRoutes,
};
