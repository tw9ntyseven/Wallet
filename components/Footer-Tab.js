import React from 'react';
import styled from 'styled-components/native';
import { NativeRouter, Switch, Route } from 'react-router-native';


const FooterBar = ({ history }) => {
    return (
        <Footer>
            <FooterTab>
                <TabButton onPress={() => history.push("/")} >
                    <TabText>Main</TabText>
                </TabButton>
                <TabButton>
                    <TabText>Statistic</TabText>
                </TabButton>
                <TabButton>
                    <TabText>Payment</TabText>
                </TabButton>
                <TabButton>
                    <TabText>Setting</TabText>
                </TabButton>
            </FooterTab>
        </Footer>
    );
}
const TabText = styled.Text `
`;
const TabButton = styled.TouchableOpacity `
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 100px;
    height: 70px;
`;
const FooterTab = styled.View `
    width: 100%;
    display: flex;
    background: #F2F3F2;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
`;
const Footer = styled.View `
    width: 100%;
    position: absolute;
    bottom: 0;
`;
export default FooterBar;