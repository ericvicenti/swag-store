/**
 * @flow
 */

import React, { Component } from "react";
import { TabRouter, NavigationActions } from "react-navigation";

import {
  CheckoutCartScreen,
  CheckoutShippingScreen,
  CheckoutBillingScreen
} from "./Screens";

const DefaultCheckoutRouter = TabRouter({
  CheckoutCart: { screen: CheckoutCartScreen },
  CheckoutShipping: { screen: CheckoutShippingScreen },
  CheckoutBilling: { screen: CheckoutBillingScreen }
});

const CheckoutRouter = {
  ...DefaultCheckoutRouter,

  getStateForAction: (action, lastState) => {
    if (
      lastState && action.type === NavigationActions.BACK && lastState.index > 0
    ) {
      return {
        ...lastState,
        index: lastState.index - 1
      };
    }
    if (
      lastState &&
      action.type === NavigationActions.NAVIGATE &&
      action.routeName === "Confirmation" &&
      lastState.index < lastState.routes.length - 1
    ) {
      return {
        ...lastState,
        index: lastState.index + 1
      };
    }
    return DefaultCheckoutRouter.getStateForAction(action, lastState);
  }
};

export default CheckoutRouter;
