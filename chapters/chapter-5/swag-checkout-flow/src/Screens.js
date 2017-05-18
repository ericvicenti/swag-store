/**
 * @flow
 */

import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import { SimplePage, CartPage, ShippingPage, BillingPage, ConfirmationPage } from "./Common";
import { Button } from 'react-native-elements'

export class CheckoutCartScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Cart",
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SimplePage>
        <CartPage />
        <Button
          onPress={() => navigate('CheckoutShipping')}
          title="Next"
        />
      </SimplePage>
    );
  }
}

export class CheckoutShippingScreen extends React.Component {
  static navigationOptions = {
    title: "Shipping",
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SimplePage>
        <ShippingPage />
        <Button
          onPress={() => navigate('CheckoutBilling')}
          title="Next"
        />
      </SimplePage>
    );
  }
}

export class CheckoutBillingScreen extends React.Component {
  static navigationOptions = {
    title: "Billing",
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SimplePage>
        <BillingPage />
        <Button
          onPress={() => navigate('Confirmation')}
          title="Next"
        />
      </SimplePage>
    );
  }
}

export class ConfirmationScreen extends React.Component {
  static navigationOptions = {
    title: "Confirmation",
  };

  render() {
    const { goBack } = this.props.navigation;

    return (
      <SimplePage>
        <ConfirmationPage />
        <Button
          onPress={() => goBack()}
          title="Place Order"
        />
      </SimplePage>
    );
  }
}
