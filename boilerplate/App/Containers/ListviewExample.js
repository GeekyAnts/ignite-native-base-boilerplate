import React from 'react'
import { connect } from 'react-redux'
import { List, ListItem, Text, View, Container, Header, Title, Button, Left, Right, Body, Icon} from 'native-base'
// import Icon from 'react-native-vector-icons/Ionicons'


const dataObjects = [
  {title: 'First Title', description: 'First Description'},
  {title: 'Second Title', description: 'Second Description'},
  {title: 'Third Title', description: 'Third Description'},
  {title: 'Fourth Title', description: 'Fourth Description'},
  {title: 'Fifth Title', description: 'Fifth Description'},
  {title: 'Sixth Title', description: 'Sixth Description'},
  {title: 'Seventh Title', description: 'Seventh Description'},
  {title: 'Eighth Title', description: 'Eighth Description'},
  {title: 'Ninth Title', description: 'Ninth Description'},
  {title: 'Tenth Title', description: 'Tenth Description'},
  {title: 'Eleventh Title', description: 'Eleventh Description'},
  {title: '12th Title', description: '12th Description'},
  {title: '13th Title', description: '13th Description'},
  {title: '14th Title', description: '14th Description'},
  {title: '15th Title', description: '15th Description'},
  {title: '16th Title', description: '16th Description'},
  {title: '17th Title', description: '17th Description'},
  {title: '18th Title', description: '18th Description'},
  {title: '19th Title', description: '19th Description'},
  {title: '20th Title', description: '20th Description'},
  {title: 'BLACKJACK!', description: 'BLACKJACK! Description'}
]
class ListviewExample extends React.Component {
  render () {
    return (
      <Container >
        <Header>
          <Left>
            <Button transparent onPress={()=> this.context.drawer.open()}>
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body style={{flex: 3}}>
            <Title>List Example</Title>
          </Body>
          <Right />
        </Header>
        <List dataArray={dataObjects}
          renderRow={(item) =>
          <ListItem>
            <Text>{item.title}</Text>
            <Right>
              <Text note>{item.description}</Text>
            </Right>
          </ListItem>
        } />
    </Container>
    )
  }
}
ListviewExample.contextTypes = {drawer: React.PropTypes.object}
const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

export default connect(mapStateToProps)(ListviewExample)
