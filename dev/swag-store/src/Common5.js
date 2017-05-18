/**
 * @flow
 */

import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";

export class SimplePage extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ paddingBottom: 20 }}>
          {children}
        </View>
      </ScrollView>
    );
  }
}

exports.PRODUCTS = [
  {
    id: "jacket",
    name: "Team Jacket",
    price: 40,
    image: require("../assets/team-jacket.jpg"),
    exampleQty: 2
  },
  {
    id: "finger",
    name: "Foam Finger",
    price: 10,
    image: require("../assets/foam-finger.jpg"),
    exampleQty: 0
  },
  {
    id: "shirt",
    name: "Shirt",
    price: 20,
    image: require("../assets/shirt.jpg"),
    exampleQty: 3
  },
  {
    id: "hat",
    name: "Hat",
    price: 15,
    image: require("../assets/hat.jpg"),
    exampleQty: 0
  }
];

export class SwagBrowseList extends Component {
  render() {
    return (
      <View>
        {this.props.products.map((product, index) => (
          <View
            key={product.id}
            style={{
              borderTopWidth: StyleSheet.hairlineWidth,
              borderTopColor: "#888",
              padding: 0
            }}
          >
            <TouchableOpacity
              onPress={() => {
                this.props.onProductPress(product.id);
              }}
              key={index}
              style={{
                flexDirection: "row",
                margin: 18
              }}
            >
              <Image
                source={product.image}
                style={{ width: 100, height: 100 }}
              />
              <View style={{ flex: 1, padding: 20 }}>
                <Text style={{ fontSize: 26, fontWeight: "100" }}>
                  {product.name}
                </Text>
                <Text>${product.price} each</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  }
}

export class ProductPage extends Component {
  render() {
    const { product } = this.props;
    return (
      <View>
        <Image
          source={product.image}
          style={{
            height: 300,
            alignSelf: "center",
            marginBottom: 15
          }}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 26, fontWeight: "100", marginBottom: 5, textAlign: 'center' }}>
          {product.name} - ${product.price} each
        </Text>
      </View>
    );
  }
}
