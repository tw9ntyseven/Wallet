import React, {useState} from 'react';
import { NativeRouter, Switch, Route } from 'react-router-native';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import styled from 'styled-components/native';

import Group from './components/Group';
import Diagram from './components/Diagram';
import AddCard from './components/AddCard';

function HomeScreen({history}) {
    // const [card, setCard] = useState([])

// const addCard = (title, price, income) => {
//     setCard(prev => [
//         ...prev, 
//         {
//         id: Date.now().toString(),
//         income: income,
//         title: title,
//         price: price,
//         }
// ])
// }
    return (
        <Container>
            <GroupTop>
                <GroupTitle>Wallet</GroupTitle>
                <GroupAdd onPress={() => history.push("/card")}>+</GroupAdd>
            </GroupTop>
            {/* <Diagram>

            </Diagram> */}
            <ScrollView>
              <Group 
                items={[
                {
                    income: false,
                    title: 'Кофа',
                    price: '100р',
                },
                {
                    income: true,
                    title: 'Мама дала мани',
                    price: '200р',
                },
                {
                    income: false,
                    title: 'На проезд',
                    price: '17р',
                },
                ]}> 
                </Group>
            </ScrollView>
        </Container>
    );
}


export default class App extends React.Component {
    render(){
        return (
            <NativeRouter>
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/card" component={AddCard} />
                </Switch>
            </NativeRouter>
        );
    }
}

const GroupAdd = styled.Text `
  margin-right: 20px;
  position: absolute;
  color: green;
  font-size: 35px;
  right: 0;
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
