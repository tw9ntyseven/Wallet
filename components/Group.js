import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const leftActions = () => {
    return (
        <SwipeMenu>
            <SwipeText>Delete</SwipeText>
        </SwipeMenu>
    );
}

const Group = ({income, items, onSwipeFromLeft, onRightPress}) => {
    return (
        <GroupBlock>
            {items.map((item, index) => (
                <Swipeable renderLeftActions={leftActions}>
                <WrapperGroupItem>
                    <GroupItem income={item.income} key={index}>
                        <GroupTitle>{item.title}</GroupTitle>
                        <GroupPrice>{item.price}</GroupPrice>
                    </GroupItem>
                    </WrapperGroupItem>
                </Swipeable>
            ))}
        </GroupBlock>
    );
};

Group.defaultProps = {
    items: []
};
const SwipeText = styled.Text `
  color: #fff;
`;

const SwipeMenu = styled.View `
  background: red;
  width: 55px;
  height: 50px;
  display: flex;
  padding: 5px;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
`;

const WrapperGroupItem = styled.View `
  display:flex;
  align-items: center;
`;
const GroupPrice = styled.Text `
  color: #fff;
  position: absolute;
  right: 0;
  margin-right: 10px;
  font-size: 23px;
`;

const GroupTitle = styled.Text `
  color: #fff;
  margin-left: 5px;
  font-size: 23px;
`;

const GroupItem = styled.TouchableOpacity `
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  padding: 7px;
  background: ${props => props.income
    ? '#00FF7F'
    : '#DC143C'};
  border-radius: 10px;
  width: 95%;
  height: 50px;
`;

const GroupBlock = styled.View `
  margin-top: 10px;
`;
export default Group;
