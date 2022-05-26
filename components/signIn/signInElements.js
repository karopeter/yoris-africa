import styled from 'styled-components/native';
import { Button, TextInput } from 'react-native-paper';

export const AuthenticationBackground = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const AuthenticationImage = styled.Image`
    width: 140px;
    height: 100px;
    bottom: 80px;
`;

export const AuthenticationInput = styled(TextInput)`
    background: #4E4E4E;
    width: 318px;
    height: 48px;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 25);
    position: relative;
    color: #fff;
    border-radius: 20px;
    bottom: 15px;
`;

export const PasswordInput = styled(TextInput)`
    background: #4E4E4E;
    width: 318px;
    height: 48px;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 25);
    position: relative;
    color: #fff;
    border-radius: 20px;
`;

export const PasswordContainer = styled.View`
   display: flex;
`;

export const ForgotText = styled.Text`
   text-align: center;
   justify-content: center;
   margin-top: 5px;
   margin-left: 90px;
   color: #C3AD60;
`;

export const AuthenticationButton = styled(Button)`
    color: #000;
    background: #C3AD60;
    height: 48px;
    width: 300px;
    bottom: -30px;
`;

export const AuthenticationBtn = styled(Button)`
   color: #000;
   background: #000;
   height: 48px;
   width: 300px;
   top: 50px;
   border: 3px solid #C3AD60;
`;
