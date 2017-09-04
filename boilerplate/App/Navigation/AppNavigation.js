import { StackNavigator, DrawerNavigator } from "react-navigation";
import styles from './Styles/NavigationStyles'

// screens identified by the router
import LaunchScreen from "../Containers/LaunchScreen";
import ListviewExample from "../Containers/ListviewExample";
import CardExample from "../Containers/CardExample";
import Login from "../Containers/LoginScreen";
import DrawerContent from "../Containers/DrawerContent";


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

export default PrimaryNav
