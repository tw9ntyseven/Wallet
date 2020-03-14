import React, {useState} from 'react';
import {StyleSheet, TouchableHighlight, Alert, Text, View, ScrollView, TextInput, Button} from 'react-native';
import styled from 'styled-components/native';


const AddCard = ({ history, onSubmit }) => {
    const [title,setTitle] = useState('')
    const [price,setPrice] = useState('')
    const pressHandler = () => {
        if (title&&price.trim()) {
            onSubmit(title,price, true)
            setPrice('')
            setTitle('')
        } else {
            Alert.alert('Название и цена не может быть пустым!')
        }
    }

    return (
        <Wrapper>
            <Button title="< Back " color="#000" onPress={() => history.push("/")} />
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
            <Button width='95%' color='#000' title='Добавить' onPress={pressHandler} />
        </Wrapper>
    );к
}


const Input = styled.TextInput `
    width: 95%;
    height: 50px;
    ${'' /* border-bottom: 1px solid #c4c4c4; */}
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