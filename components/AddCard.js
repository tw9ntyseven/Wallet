import React, {useState} from 'react';
import {StyleSheet, TouchableHighlight, Alert, Text, View, ScrollView, TextInput, Button} from 'react-native';
import styled from 'styled-components/native';

import FooterBar from './Footer-Tab';


const AddCard = ({ history, onSubmit }) => {
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
            <BackForm onPress={() => history.push("/")}>
                <BackFormText>◁ Назад</BackFormText>
            </BackForm>
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
            <AddButtonWrapper>
            <AddButton onPress={pressHandler}>
                <AddButtonText>Добавить</AddButtonText>
            </AddButton>
            </AddButtonWrapper>
        </Wrapper>
        <FooterBar/>
        </>
    );
}
const AddButtonText = styled.Text `
    font-size: 20px;
    color: #fff;
`;
const AddButton = styled.TouchableOpacity `
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 50px;
    border-radius: 25px;
    background: green;
`;
const AddButtonWrapper = styled.View `
    justify-content: center;
    align-items: center;
`;
const BackFormText = styled.Text `
    font-weight: 700;
    font-size: 22px;
    color: black;
`;
const BackForm = styled.TouchableOpacity `
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 50px;
`;
const Input = styled.TextInput `
    width: 95%;
    height: 50px;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
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