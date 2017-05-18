/**
 * @flow
 */

import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import { SimplePage, SwagBrowseList, ProductPage, PRODUCTS } from "./Common";
import { Button } from "react-native-elements";

export class SwagListScreen extends React.Component {
  static navigationOptions = {
    title: "Swag Store"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SimplePage>
        <SwagBrowseList
          products={PRODUCTS}
          onProductPress={productId => navigate("SwagProduct", { productId })}
        />
      </SimplePage>
    );
  }
}

export class SwagProductScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const product = PRODUCTS.find(
      p => p.id === navigation.state.params.productId
    );
    return {
      title: product.name
    };
  };

  render() {
    const { navigate, state } = this.props.navigation;
    const product = PRODUCTS.find(p => p.id === state.params.productId);
    return (
      <SimplePage>
        <ProductPage product={product} />
        <Button
          onPress={() => navigate("CheckoutCart", { addProduct: product.id })}
          title="Add to Cart!"
        />
      </SimplePage>
    );
  }
}
