import React, { Component } from "react";
import { ScrollView, Image, BackHandler } from "react-native";
import { List, ListItem, Text, View, Content } from "native-base";

import styles from "./Styles/DrawerContentStyles";
import { Images } from "../Themes";

class DrawerContent extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={Images.logoDark} style={styles.logo} />
        <Content>
          <ListItem onPress={() => navigation.navigate("ListviewExample")}>
            <Text>List example</Text>
          </ListItem>
          <ListItem onPress={() => navigation.navigate("CardExample")}>
            <Text>Card example</Text>
          </ListItem>
        </Content>
      </View>
    );
  }
}

export default DrawerContent;
