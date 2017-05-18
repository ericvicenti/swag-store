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

const CheckoutRouter = TabRouter({
  CheckoutCart: { screen: CheckoutCartScreen },
  CheckoutShipping: { screen: CheckoutShippingScreen },
  CheckoutBilling: { screen: CheckoutBillingScreen }
});

export default CheckoutRouter;
