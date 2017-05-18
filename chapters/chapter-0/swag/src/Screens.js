/**
 * @flow
 */

import React, { Component } from "react";
import { ScrollView, Dimensions } from "react-native";
import {
  SimplePage,
  CartPage,
  BillingPage,
  ShippingPage,
  ConfirmationPage
} from "./Common";

const SCREEN_WIDTH = Dimensions.get("window").width;

class ScreenLayout extends Component {
  render() {
    return (
      <ScrollView style={{ width: SCREEN_WIDTH }}>
        {this.props.children}
      </ScrollView>
    );
  }
}

export class CheckoutCartScreen extends Component {
  render() {
    return (
      <ScreenLayout>
        <CartPage />
      </ScreenLayout>
    );
  }
}

export class CheckoutShippingScreen extends Component {
  render() {
    return (
      <ScreenLayout>
        <ShippingPage />
      </ScreenLayout>
    );
  }
}

export class CheckoutBillingScreen extends Component {
  render() {
    return (
      <ScreenLayout>
        <BillingPage />
      </ScreenLayout>
    );
  }
}

export class ConfirmationScreen extends Component {
  render() {
    return (
      <ScreenLayout>
        <ConfirmationPage />
      </ScreenLayout>
    );
  }
}
