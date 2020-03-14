import React, {useState} from 'react';
import {StyleSheet, TouchableHighlight, Alert, Text, View, ScrollView, TextInput, Button} from 'react-native';
import styled from 'styled-components/native';


const AddCard = ({ history, onSubmit, titles, prices }) => {
    const [titles,setTitles] = useState('')
    const [prices,setPrices] = useState('')
    const pressHandler = () => {
        if (titles&&prices.trim()) {
            onSubmit(titles,prices)
            setPrices('')
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
                    onChangeText={setTitles}
                    value={titles}
                    placeholder="Введите название"
                    />
            <Input
                onChangeText={setPrices}
                value={prices}
                placeholder="Введите цену"
                keyboardType="number-pad"
                />
        </AddForm>
        <Button width='95%' color='#000' title='Добавить' onPress={pressHandler} />
        </Wrapper>
    );
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