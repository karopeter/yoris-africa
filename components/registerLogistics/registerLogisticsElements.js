import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';

export const RegistrationBackground = styled.View`
      display: flex;
      align-items: center;
      justify-content: center;
`;


export const RegistrationImage = styled.Image`
     width: 140px;
     height: 100px;
     bottom: 80px;
`;

export const RegistrationInput = styled(TextInput)`
         background: #4E4E4E;
         width: 318px;
         height: 48px;
         box-sizing: border-box;
         box-shadow: 0px 4px 4px rgba(0, 0, 0, 25);
         position: relative;
         color: #fff;
         border-radius: 30px 0px 0px 30px;
         bottom: 15px;
`;

export const EmailInput = styled(TextInput)`
       background: #4E4E4E;
       width: 318px;
       height: 48px;
       box-sizing: border-box;
       box-shadow: 0px 4px 4px rgba(0, 0, 0, 25);
       position: relative;
       color: #fff;
       border-radius: 30px 0px 0px 30px;
`;