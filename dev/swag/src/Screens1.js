/**
 * @flow
 */

import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  SimplePage,
  CartPage,
  ShippingPage,
  BillingPage,
  ConfirmationPage
} from "./Common0";
import { Button } from "react-native-elements";

export class CheckoutCartScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Cart",
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? "ios-cart" : "ios-cart-outline"}
        size={26}
        style={{ color: tintColor, backgroundColor: "transparent" }}
      />
    )
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SimplePage>
        <CartPage />
        <Button onPress={() => navigate("CheckoutShipping")} title="Next" />
      </SimplePage>
    );
  }
}

export class CheckoutShippingScreen extends React.Component {
  static navigationOptions = {
    title: "Shipping",
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? "ios-navigate" : "ios-navigate-outline"}
        size={26}
        style={{ color: tintColor, backgroundColor: "transparent" }}
      />
    )
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SimplePage>
        <ShippingPage />
        <Button onPress={() => navigate("CheckoutBilling")} title="Next" />
      </SimplePage>
    );
  }
}

export class CheckoutBillingScreen extends React.Component {
  static navigationOptions = {
    title: "Billing",
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? "ios-pricetag" : "ios-pricetag-outline"}
        size={26}
        style={{ color: tintColor, backgroundColor: "transparent" }}
      />
    )
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SimplePage>
        <BillingPage />
        <Button onPress={() => navigate("Confirmation")} title="Next" />
      </SimplePage>
    );
  }
}

export class ConfirmationScreen extends React.Component {
  static navigationOptions = {
    title: "Confirmation",
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? "ios-checkmark" : "ios-checkmark-outline"}
        size={26}
        style={{ color: tintColor, backgroundColor: "transparent" }}
      />
    )
  };

  render() {
    const { goBack } = this.props.navigation;
    return (
      <SimplePage>
        <ConfirmationPage />
        <Button onPress={() => goBack()} title="Place Order" />
      </SimplePage>
    );
  }
}
