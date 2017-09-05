import React from "react";
import { DrawerNavigator } from "react-navigation";
import LaunchScreen from "../Containers/LaunchScreen";
import ListviewExample from "../Containers/ListviewExample";
import CardExample from "../Containers/CardExample";
import DrawerContent from "../Containers/DrawerContent";

import styles from "./Styles/NavigationStyles";

const NavigationDrawer = DrawerNavigator({
		ListviewExample: { screen: ListviewExample },
		CardExample: { screen: CardExample },
		LaunchScreen: { screen: LaunchScreen },
	},
	{
		initialRouteName: "LaunchScreen",
		contentComponent: props => <DrawerContent {...props} />,
	}
);

export default NavigationDrawer;
