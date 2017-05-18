/**
 * @flow
 */

import React, { Component } from "react";
import { Text, View, ScrollView, Dimensions, Image, StyleSheet} from "react-native";
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { List,ButtonGroup, ListItem, CheckBox } from 'react-native-elements'

export class SimplePage extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}><View style={{paddingBottom: 20}}>
        {children}</View>
      </ScrollView>
    );
  }
}


const PRODUCTS = [
  {
    name: "Shirt",
    price: 20,
    image: require('../assets/shirt.jpg'),
    exampleQty: 3,
  },
  {
    name: "Foam Finger",
    price: 10,
    image: require('../assets/foam-finger.jpg'),
    exampleQty: 0,
  },
  {
    name: "Team Jacket",
    price: 40,
    image: require('../assets/team-jacket.jpg'),
    exampleQty: 2,
  },
  {
    name: "Hat",
    price: 15,
    image: require('../assets/hat.jpg'),
    exampleQty: 0,
  },
]

export class CartPage extends Component {
  render() {
    return (
      <View>
        <Text
          style={{ fontSize: 42, padding: 18, paddingTop: 40, fontWeight: '100' }}
        >
          Get your Swag!
        </Text>
        {PRODUCTS.map((product, index) => (
          <View key={index} style={{flexDirection: 'row', margin: 18, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: '#888'}}>
            <Image source={product.image} style={{width: 100, height: 100, marginTop: 20}} />
            <View style={{flex: 1, padding: 20}}>
              <Text style={{fontSize: 26, fontWeight: '100'}}>{product.name}</Text>
              <Text>${product.price} each</Text>
            </View>
            <View style={{width: 100, paddingVertical: 20, paddingHorizontal: 10}}>
              <Text style={{fontSize: 14, fontWeight: '100',  textAlign: 'center'}}>Quantity:</Text>
              <Text style={{fontSize: 24, fontWeight: '100',  textAlign: 'center'}}>{product.exampleQty}</Text>
              <ButtonGroup
                onPress={() => {}}
                containerStyle={{flexDirection: 'row', }}
                buttons={[
                  {element: () => <Text style={{fontSize: 28, fontWeight: '100' }}>-</Text>},
                  {element: () => <Text style={{fontSize: 28, fontWeight: '100' }}>+</Text>},
                ]}
              />
            </View>
          </View>
        ))}
      </View>
    );
  }
}

export class BillingPage extends Component {
  render() {
    return (
      <View>
      <Text
        style={{ fontSize: 42, padding: 18, paddingTop: 40, fontWeight: '100' }}
      >
        Billing Information
      </Text>

      <FormLabel>Name on Card</FormLabel>
      <FormInput onChangeText={() => {}}/>
      <FormLabel>Card #</FormLabel>
      <FormInput onChangeText={() => {}}/>
      <FormLabel>CVV, Exp. Date</FormLabel>
      <FormInput onChangeText={() => {}}/>
      </View>
    );
  }
}

export class ShippingPage extends Component {
  render() {
    return (
      <View>
      <Text
        style={{ fontSize: 42, padding: 18, paddingTop: 40, fontWeight: '100' }}
      >
        Shipping Details
      </Text>

      <FormLabel>Name</FormLabel>
      <FormInput onChangeText={() => {}}/>
      <FormLabel>Address</FormLabel>
      <FormInput onChangeText={() => {}}/>
      <FormLabel>City, State, Zip</FormLabel>
      <FormInput onChangeText={() => {}}/>
      </View>
    );
  }
}

export class ConfirmationPage extends Component {
  render() {
    return (
      <View style={{paddingHorizontal: 18, marginBottom: 20}}>
        <Text
          style={{ fontSize: 42, paddingVertical: 40, fontWeight: '100' }}
        >
          Order Confirmation
        </Text>
        <Text
          style={{ fontSize: 18, paddingTop: 8, paddingBottom: 4, color: '#444' }}
        >
          Cart
        </Text>
        <Text style={{color: '#444', fontWeight: '100'}}>3x Shirts ($20) = $60</Text>
        <Text style={{color: '#444', fontWeight: '100'}}>2x Team Jackets ($40) = $80</Text>
        <Text style={{color: '#444', fontWeight: '100'}}>Subtotal = $140</Text>

        <Text
          style={{ fontSize: 18, paddingTop: 8, paddingBottom: 4, color: '#444' }}
        >
          Shipping Details
        </Text>
        <Text style={{color: '#444', fontWeight: '100'}}>Standard shipping speed</Text>
        <Text style={{color: '#444', fontWeight: '100'}}>Address not yet specified</Text>

        <Text
          style={{ fontSize: 18, paddingTop: 8, paddingBottom: 4, color: '#444' }}
        >
          Billing Information
        </Text>
        <Text style={{color: '#444', fontWeight: '100'}}>Paying with VISA*1234</Text>
      </View>
    );
  }
}
