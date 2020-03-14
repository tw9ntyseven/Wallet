import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import styled from 'styled-components/native';

const Group = ({ income, items }) => {
    return (
            <GroupBlock>
                {items.map((item, index) => (
                    <GroupItem income={item.income} key={index}>
                        <GroupTitle>{item.title}</GroupTitle>
                        <GroupPrice>{item.price}</GroupPrice>
                    </GroupItem>
                ))}
            </GroupBlock>
    );
};

Group.defaultProps = {
    items: [],
};

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
  display: flex;
  align-items: center;
`;
export default Group;
