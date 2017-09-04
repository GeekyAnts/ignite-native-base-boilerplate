import React, { Component } from "react";
import Styles from "./Styles/NavigationContainerStyles";
import { StackNavigator, DrawerNavigator } from "react-navigation";
// import NavigationDrawer from "./NavigationDrawer";

// screens identified by the router
import LaunchScreen from "../Containers/LaunchScreen";
import ListviewExample from "../Containers/ListviewExample";
import CardExample from "../Containers/CardExample";
import Login from "../Containers/LoginScreen";
import DrawerContent from "../Containers/DrawerContent";

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

const NavigationDrawer = DrawerNavigator(
  {
    ListviewExample: { screen: ListviewExample },
    CardExample: { screen: CardExample },
    LaunchScreen: { screen: LaunchScreen },
  },
  {
    initialRouteName: "LaunchScreen",
    contentComponent: props => <DrawerContent {...props} />,
  }
);

const NavigationRouter = StackNavigator(
  {
    Login: { screen: Login },
    NavigationDrawer: { screen: NavigationDrawer },
  },
  {
    initialRouteName: "Login",
    headerMode: "none",
  }
);

export default NavigationRouter;
