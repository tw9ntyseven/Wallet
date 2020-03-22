import React, {useState} from 'react';
import {StyleSheet, TouchableHighlight, Alert, View, ScrollView, TextInput, Button} from 'react-native';
import styled from 'styled-components/native';
import { RadioButton, Text } from 'react-native-paper';

import FooterBar from './Footer-Tab';


const AddCard = ({ history, onSubmit }) => {
    const [checked, setChecked] = useState('first')
    const [title,setTitle] = useState('')
    const [price,setPrice] = useState('')
    const pressHandler = () => {
        if (title&&price.trim()) {
            onSubmit(title,price, true)
            setPrice('')
            setTitle('')
            history.push('/')
        } else {
            Alert.alert('Название и цена не может быть пустым!')
        }
    }
    return (
        <>
        <Wrapper>
            {/* <Button title="< Back " color="#000" onPress={() => history.push("/")} /> */}
            <WrapperBackForm>
            <BackForm onPress={() => history.push("/")}>
                <BackFormArrow>←</BackFormArrow>
                <BackFormText>Создать запись</BackFormText>
            </BackForm>
            </WrapperBackForm>
            <AddForm>
                <Input
                    onChangeText={setTitle}
                    value={title}
                    placeholder="Введите название"
                    />
                <Input
                    onChangeText={setPrice}
                    value={price}
                    placeholder="Введите цену"
                    keyboardType="number-pad"
                    />
            </AddForm>
            <RadioButton.Group
            onValueChange={value => setChecked({ value })}
            value={checked}
            >
            <View>
            <Text>First</Text>
            <RadioButton value="first" />
            </View>
            <View>
            <Text>Second</Text>
            <RadioButton value="second" />
            </View>
            </RadioButton.Group>
            <AddButtonWrapper>
            <AddButton onPress={pressHandler}>
                <AddButtonText>+ Добавить</AddButtonText>
            </AddButton>
            </AddButtonWrapper>
        </Wrapper>
        <FooterBar/>
        </>
    );
}
const AddButtonText = styled.Text `
    font-weight: 700;
    font-size: 20px;
    color: #fff;
`;
const AddButton = styled.TouchableOpacity `
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 45px;
    border-radius: 25px;
    background: green;
`;
const AddButtonWrapper = styled.View `
    justify-content: center;
    align-items: center;
`;
const BackFormArrow = styled.Text `
    font-weight: 700;
    font-size: 35px; 
    margin-top: 15px;
    padding-bottom: 20px;
    color: #000;
`;
const BackFormText = styled.Text `
    font-weight: 700;
    color: #000;
    margin-right: 230px;
    margin-top: 10px;
    font-size: 18px;
`;
const BackForm = styled.TouchableOpacity `
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 50px;
`;
const WrapperBackForm = styled.View `
    width: 100%;
    height: 60px;
    background: #F2F3F2;
`;
const Input = styled.TextInput `
    width: 95%;
    height: 50px;
    border: 1px solid #DBDDDA;
    border-radius: 5px;
    margin-bottom: 10px;
    padding-left: 10px;
`;
const AddForm = styled.View `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;
const AddTitle = styled.Text ``;
const AddPrice = styled.Text ``;
const Wrapper = styled.View `
    margin-top: 25px;
`;

export default AddCard;