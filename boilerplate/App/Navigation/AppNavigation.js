import React from "react";
import { StackNavigator } from "react-navigation";
import styles from "./Styles/NavigationStyles";

// screens identified by the router
import Login from "../Containers/LoginScreen";
import NavigationDrawer from "./NavigationDrawer";

const PrimaryNav = StackNavigator(
	{
		Login: { screen: Login },
		NavigationDrawer: { screen: NavigationDrawer },
	},
	{
		initialRouteName: "Login",
		headerMode: "none",
	}
);

export default PrimaryNav;
