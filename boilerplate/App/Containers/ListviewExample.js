import React from "react";
import { connect } from "react-redux";
import { FlatList } from "react-native";
import { List, ListItem, Text, View, Container, Header, Title, Button, Left, Right, Body, Icon } from "native-base";
// import Icon from 'react-native-vector-icons/Ionicons'

const dataObjects = [
  { title: "First Title", description: "First Description" },
  { title: "Second Title", description: "Second Description" },
  { title: "Third Title", description: "Third Description" },
  { title: "Fourth Title", description: "Fourth Description" },
  { title: "Fifth Title", description: "Fifth Description" },
  { title: "Sixth Title", description: "Sixth Description" },
  { title: "Seventh Title", description: "Seventh Description" },
  { title: "Eighth Title", description: "Eighth Description" },
  { title: "Ninth Title", description: "Ninth Description" },
  { title: "Tenth Title", description: "Tenth Description" },
  { title: "Eleventh Title", description: "Eleventh Description" },
  { title: "12th Title", description: "12th Description" },
  { title: "13th Title", description: "13th Description" },
  { title: "14th Title", description: "14th Description" },
  { title: "15th Title", description: "15th Description" },
  { title: "16th Title", description: "16th Description" },
  { title: "17th Title", description: "17th Description" },
  { title: "18th Title", description: "18th Description" },
  { title: "19th Title", description: "19th Description" },
  { title: "20th Title", description: "20th Description" },
  { title: "BLACKJACK!", description: "BLACKJACK! Description" },
];
class ListviewExample extends React.Component {
  _renderItem = ({ item }) => {
    return (
      <ListItem style={{ justifyContent: "space-between" }}>
        <Text>{item.title}</Text>
        <Text note>{item.description}</Text>
      </ListItem>
    );
  };
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body style={{ flex: 3 }}>
            <Title>List Example</Title>
          </Body>
          <Right />
        </Header>
        <FlatList data={dataObjects} keyExtractor={item => item.title} renderItem={this._renderItem} />
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    // ...redux state to props here
  };
};

export default connect(mapStateToProps)(ListviewExample);
