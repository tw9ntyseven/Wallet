import React, {useState} from 'react';
import { NativeRouter, Switch, Route } from 'react-router-native';
import {StyleSheet, Text, View, ScrollView, AsyncStorage} from 'react-native';
import styled from 'styled-components/native';

import Group from './components/Group';
import RemoveItems from './components/Group';
import Diagram from './components/Diagram';
import AddCard from './components/AddCard';
import FooterBar from './components/Footer-Tab';

function HomeScreen({history, items}) {
    return (
        <Container>
            <GroupTop>
                <GroupTitle>Wallet</GroupTitle>
                <GroupAdd onPress={() => history.push('/card')}>+</GroupAdd>
            </GroupTop>
            {/* <Diagram>

            </Diagram> */}
            <ScrollPanel>
              <Group 
                items={items}
                // onSwipeFromLeft={}
                // onRightPress={}
                > 
                </Group>
            </ScrollPanel>
            <FooterBar />
        </Container>
    );
}

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items : [{
                    income: true,
                    title: 'Кофа',
                    price: '100р',
                }]
        }

        this.addCard = this.addCard.bind(this);
    }
    async componentDidMount() {
        // AsyncStorage.setItem('items', undefined);
        let data = await AsyncStorage.getItem('items').then((items, err) => {return JSON.parse(items)})
        if(data !== null && data !== undefined){
            this.setState({ items: data })
        }
    }

    async addCard(title, price, income) {
        const { items } = this.state
        items.push({title, price, income});
        await AsyncStorage.setItem('items', JSON.stringify(items)).then(err => console.log(err))
        let data = await AsyncStorage.getItem('items').then((items, err) => (JSON.parse(items)))
        this.setState({
            items: data
        })
    }
    // Delete Items not working
    async RemoveItems(items) {
        try{
            let itemsJSON = await AsyncStorage.getItem('items');
            let itemsArray = JSON.parse(itemsJSON);
            alteredItems = itemsArray.filter(function(e){
                return e.id !== items.id
            })
            AsyncStorage.setItem('items', JSON.stringify(alteredItems));
            this.setState({
                items:alteredItems
            })
        }
        catch(error){
            console.log(error)
        }
    };

    render(){
        return (
            <NativeRouter>
                <Switch>
                    <Route exact path="/" component={(props) => (<HomeScreen history={props.history} items={this.state.items}/>)} />
                    <Route exact path="/card" component={(props) => (<AddCard history={props.history} onSubmit={this.addCard}/>)} />
                </Switch>
            </NativeRouter>
        );
    }
}

const ScrollPanel = styled.ScrollView `
    margin-bottom: 65px;
`;
const GroupAdd = styled.Text `
  position: absolute;
  right: 0;
  margin-right: 20px;
  color: green;
  font-size: 35px;
`;

const GroupTitle = styled.Text `
  margin-left: 10px;
  font-weight: 700;
  font-size: 22px;
  color: #000000;
`;
const GroupTop = styled.View `
  display: flex;
  justify-content: center;
`;

const Container = styled.View `
  flex: 1;
  margin-top: 50px;
`;
