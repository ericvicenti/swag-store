/**
 * @flow
 */

import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

import {
  CheckoutCartScreen,
  CheckoutShippingScreen,
  CheckoutBillingScreen,
  ConfirmationScreen
} from "./Screens1";

const App = () => (
  <ScrollView horizontal={true} pagingEnabled={true}>
    <View style={styles.pane}>
      <CheckoutCartScreen />
      <CheckoutShippingScreen />
      <CheckoutBillingScreen />
      <ConfirmationScreen />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  pane: {
    flexDirection: "row",
    width: 4 * SCREEN_WIDTH
  }
});

export default App;
