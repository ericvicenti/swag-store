/**
 * @flow
 */

import React, { Component } from "react";
import { addNavigationHelpers, NavigationActions } from "react-navigation";
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import { Button } from "react-native-elements";

import CheckoutRouter from "./CheckoutRouter3";

const SCREEN_WIDTH = Dimensions.get("window").width;

const CheckoutIcons = {
  CheckoutCart: require("../assets/icon-cart.png"),
  CheckoutShipping: require("../assets/icon-shipping.png"),
  CheckoutBilling: require("../assets/icon-billing.png")
};

class CheckoutNavigator extends Component {
  static router = CheckoutRouter;

  state = { scrollPosition: new Animated.Value(0) };

  componentDidUpdate() {
    const newIndex = this.props.navigation.state.index;
    this._scroller.scrollTo({ x: newIndex * SCREEN_WIDTH });
  }

  render() {
    const screenNavigationProps = this.props.navigation.state.routes.map(
      route => {
        return addNavigationHelpers({
          state: route,
          dispatch: this.props.navigation.dispatch
        });
      }
    );
    const scrollPosition = this.state.scrollPosition;
    return (
      <View style={{ flex: 1 }}>
        <Animated.ScrollView
          ref={s => {
            this._scroller = s && s.getNode();
          }}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollPosition } } }],
            { useNativeDriver: false }
          )}
          showsHorizontalScrollIndicator={false}
          style={{ flex: 1 }}
          pagingEnabled={true}
          horizontal={true}
        >
          {this.props.navigation.state.routes.map(this.renderScreen)}
        </Animated.ScrollView>
        <View
          style={{
            height: 50,
            borderTopWidth: StyleSheet.hairlineWidth,
            borderTopColor: "#888"
          }}
        >
          <View style={{ flexDirection: "row" }}>
            {[
              "CheckoutCart",
              "CheckoutShipping",
              "CheckoutBilling"
            ].map((routeName, routeIndex) => {
              const opts = CheckoutRouter.getScreenOptions(
                screenNavigationProps[routeIndex]
              );
              const icon = opts.tabBarIcon({
                focused: true,
                tintColor: "black"
              });
              return (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.dispatch(
                      NavigationActions.navigate(routeName)
                    )}
                  key={routeName}
                  style={{
                    backgroundColor: "transparent",
                    height: 50,
                    width: 80,
                    alignItems: "center",
                    paddingTop: 0
                  }}
                >
                  <Image
                    source={CheckoutIcons[routeName]}
                    style={{ width: 48, height: 48 }}
                  />
                </TouchableOpacity>
              );
            })}
            <Animated.View
              style={{
                backgroundColor: "#17591722",
                width: SCREEN_WIDTH,
                position: "absolute",
                right: SCREEN_WIDTH - 80,
                top: 0,
                bottom: 0,
                transform: [
                  {
                    translateX: scrollPosition.interpolate({
                      inputRange: [0, SCREEN_WIDTH],
                      outputRange: [0, 80]
                    })
                  }
                ]
              }}
            />
            <View style={{ flex: 1 }} />
            <Button
              style={{ margin: 3, marginRight: -8 }}
              raised
              backgroundColor="rgb(20,100,20)"
              onPress={() => this.props.navigation.navigate("Confirmation")}
              title="Continue"
            />
          </View>
        </View>
      </View>
    );
  }

  renderScreen = (route, routeIndex) => {
    const ScreenComponent = CheckoutRouter.getComponentForRouteName(
      route.routeName
    );
    const screenNavigation = addNavigationHelpers({
      state: route,
      dispatch: this.props.navigation.dispatch
    });
    return (
      <View key={route.key} style={{ flex: 1, width: SCREEN_WIDTH }}>
        <ScreenComponent navigation={screenNavigation} />
      </View>
    );
  };

  positionChangeTimeout: ?number = null;

  componentDidMount() {
    this.state.scrollPosition.addListener(position => {
      const navigation = this.props.navigation;
      const val = position.value;
      clearTimeout(this.positionChangeTimeout);
      this.positionChangeTimeout = setTimeout(
        () => {
          const computedIndex = Math.ceil(
            (val - SCREEN_WIDTH / 2) / SCREEN_WIDTH
          );
          if (computedIndex !== navigation.state.index) {
            const routeName = navigation.state.routes[computedIndex].routeName;
            navigation.navigate(routeName);
          }
        },
        800
      );
    });
  }
}

export default CheckoutNavigator;
